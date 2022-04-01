import "./StudentsPage.css"
import { useState, useEffect } from "react";
import StudentService from "../Models/StudentService";
import StudentEntry from "./Components/StudentEntry";
import StudentSearch from "./Components/StudentSearch";


function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [searchButtonContent, setSearchButtonContent] = useState("Rozwiń wyszukiwanie");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(()=>{
    setStudents(StudentService.getStudents());
  }, [])

  useEffect(()=>{
      setSearchButtonContent(showSearch?"Zwiń wyszukiwanie":"Rozwiń wyszukiwanie");
  }, [showSearch])

  const handleShowSearchButton = () => {
    setShowSearch(!showSearch);
  }

  return (
    <div className="StudentsPage">
      <div className="students-buttons">
        <button type="button" className="btn btn-dark" onClick={handleShowSearchButton}>{searchButtonContent}</button>
        <button type="button" className="btn btn-dark">Dodaj nowe ogłoszenie!</button>
      </div>
      {showSearch && <StudentSearch></StudentSearch>}
      {students.map((student)=><StudentEntry student={student} key={"student_" + student.id}></StudentEntry>)}
    </div>
  );
}

export default StudentsPage;
