import { useState, useEffect } from "react";
import StudentService from "../Models/StudentService";
import StudentEntry from "./Components/StudentEntry";
import StudentSearch from "./Components/StudentSearch";


function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    setStudents(StudentService.getStudents());
  }, [])

  return (
    <div className="StudentsPage">
        <StudentSearch></StudentSearch>
        <button type="button" className="btn btn-primary">Dodaj nowe ogłoszenie!</button>
        {students.map((student)=><StudentEntry student={student} key={"student_" + student.id}></StudentEntry>)
        }
    </div>
  );
}

export default StudentsPage;
