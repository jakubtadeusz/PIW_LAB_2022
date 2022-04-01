import "./StudentEntry.css"
import { useState, useEffect } from "react";

function StudentEntry(props) {
  const [student, setStudent] = useState([]);

  useEffect(()=>{
    setStudent(props.student);
  }, [props])

  return (
    <div className="StudentEntry">
      {student.courses !== undefined && <div className="courses" key={student.id}>
      {student.courses.map((course, i)=><div className="course" key={i}>{course}</div>)}
      </div>}
      <h4>{student.name} {student.surname}</h4>
      <p>{student.description}</p>
      {student.tags !== undefined && <div className="tags" key={student.id}>
        {student.tags.map((tag, i)=><div className="tag" key={i}>{tag}</div>)}
      </div>}
    </div>
    
  );
}

export default StudentEntry;
