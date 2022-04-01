import "./StudentEntry.css"
import { useState, useEffect } from "react";

function StudentEntry(props) {
  const [student, setStudent] = useState([]);

  useEffect(()=>{
    setStudent(props.student);
  }, [props])

  return (
    <div className="StudentEntry">
      {student.courses !== undefined && 
        <div className="courses" key={"courses_" + student.id}>
          {student.courses.map((course, i)=>{
            return <div className="course" key={"course_" + i}>{course}</div>
          })}
        </div>
      }
      <h4>{student.name} {student.surname}</h4>
      <p>{student.description}</p>
      {student.tags !== undefined && 
        <div className="tags" key={"tags_" + student.id}>
          {student.tags.map((tag, i)=>{
            return <div className="tag" key={"tag_" + i}>{tag}</div>
          })}
        </div>
      }
    </div>
  );
}

export default StudentEntry;
