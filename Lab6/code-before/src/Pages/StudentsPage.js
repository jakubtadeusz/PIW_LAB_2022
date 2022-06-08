import "./ElementsPage.css"
import { useState, useEffect, useContext } from "react";
import StudentService from "../Models/StudentService";
import StudentEntry from "./Components/StudentEntry";
import StudentSearch from "./Components/StudentSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addStudentImage } from "../Features/Students/studentsSlice";
import { LoginContext } from "../Context/LoginContext";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/init";

function StudentsPage() {
  const students = useSelector(state=>state.students.students);
  const studentsImages = useSelector(state=>state.students.images);
  const savedStudents = useSelector(state=>state.students.savedStudents);

  const dispatch = useDispatch();
  const [searchButtonContent, setSearchButtonContent] = useState("Rozwiń wyszukiwanie");
  const [showSearch, setShowSearch] = useState(false);

  const [tagsToFilter, setTagsToFilter] = useState([]);
  const [courseToFilter, setCourseToFilter] = useState("");
  const [descToFilter, setDescToFilter] = useState("");
  const localStorage = useLocalStorage();

  let navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(()=>{
    if(user === null){
      console.log("local", localStorage);
      navigate('/')
    }
  }, [])

  useEffect(()=>{
      for(const student of students){
        console.log(studentsImages[student.id])
        if(studentsImages[student.id] !== undefined) continue;
        StudentService.getStudentImage(student).then(url=>dispatch(addStudentImage({id: student.id, url: url})));
      }
  }, [dispatch, students, studentsImages]);

  useEffect(()=>{
    console.log(students);
  }, [students])


  useEffect(()=>{
      setSearchButtonContent(showSearch?"Zwiń wyszukiwanie":"Rozwiń wyszukiwanie");
  }, [showSearch])

  const handleShowSearchButton = () => {
    setShowSearch(!showSearch);
  }

  const filterStudents = (students) => {
    return students.filter((st)=>{
      for(let tag of tagsToFilter){
        let found = false;
        for(let stTag of st.tags){
          if(stTag.toUpperCase().includes(tag.toUpperCase())){ 
            found = true;
            break;
          }
        }
        if(!found) return false;
      }
      return true;
    }).filter((st)=>{
      if(courseToFilter.length === 0) return true;
      for(let course of st.courses){
        if(course.toUpperCase().includes(courseToFilter.toUpperCase())){ 
          return true;
        }
      }
      return false;
    }).filter((st)=>{
      return st.description.toUpperCase().includes(descToFilter.toUpperCase());
    })
  }

  const getStudentSearch = () =>{
    return(
      <StudentSearch updateTags={setTagsToFilter} updateCourse={setCourseToFilter} updateDesc={setDescToFilter}></StudentSearch>
    );
  }

  const handleAddStudentButton = () =>{
    navigate("/students/add");
  }
 
  const isSaved = (student) => {
    return (savedStudents.filter(s=>s.id === student.id).length > 0)
  }

  return (
    <div className="ElementsPage">
      <div className="element-buttons">
        <button type="button" className="btn btn-dark" onClick={handleShowSearchButton}>{searchButtonContent}</button>
        <button type="button" className="btn btn-dark" onClick={handleAddStudentButton}>Dodaj nowe ogłoszenie!</button>
      </div>
      {showSearch && getStudentSearch()}
      {filterStudents(students).map((student)=><StudentEntry student={{...student, imageUrl: studentsImages[student.id]}} saved={isSaved(student)} key={"student_" + student.id}></StudentEntry>)}
    </div>
  );
  
}

export default StudentsPage;
