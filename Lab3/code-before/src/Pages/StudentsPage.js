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
        <button type="button" class="btn btn-primary">Dodaj nowe ogłoszenie!</button>
        {students.map((student)=><StudentEntry student={student}></StudentEntry>)
        }
    </div>
  );
}

export default StudentsPage;
