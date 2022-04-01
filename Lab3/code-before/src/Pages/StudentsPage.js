import "./StudentsPage.css"
import { useState, useEffect } from "react";
import StudentService from "../Models/StudentService";
import StudentEntry from "./Components/StudentEntry";
import StudentSearch from "./Components/StudentSearch";


function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [searchButtonContent, setSearchButtonContent] = useState("Rozwiń wyszukiwanie");
  const [showSearch, setShowSearch] = useState(false);

  const [tagsToFilter, setTagsToFilter] = useState([]);
  const [courseToFilter, setCourseToFilter] = useState("");
  const [descToFilter, setDescToFilter] = useState("");

  useEffect(()=>{
    setStudents(StudentService.getStudents());
  }, [])

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

  return (
    <div className="StudentsPage">
      <div className="students-buttons">
        <button type="button" className="btn btn-dark" onClick={handleShowSearchButton}>{searchButtonContent}</button>
        <button type="button" className="btn btn-dark">Dodaj nowe ogłoszenie!</button>
      </div>
      {showSearch && getStudentSearch()}
      {filterStudents(students).map((student)=><StudentEntry student={student} key={"student_" + student.id}></StudentEntry>)}
    </div>
  );
  
}

export default StudentsPage;
