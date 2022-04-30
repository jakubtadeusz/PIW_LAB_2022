import "./StudentEntry.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentEntry(props) {
  const [student, setStudent] = useState([]);

  let navigate = useNavigate();

  useEffect(()=>{
    setStudent(props.student);
  }, [props])


  const handleEntryClick = () => {
    navigate(`/message/send/${student.name} ${student.surname}`);
  }

  return (
    <div className="StudentEntry" onClick={handleEntryClick}>
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
