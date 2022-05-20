import "./StudentEntry.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveStudent, unfollowStudent } from "../../Features/Students/studentsSlice";

function StudentEntry(props) {
  const [student, setStudent] = useState([]);
  const [saved, setSaved] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(()=>{
    setStudent(props.student);
    setSaved(props.saved);
  }, [props])


  const handleEntryClick = () => {
    navigate(`/message/send/${student.name} ${student.surname}`);
  }

  const handleFollow = () => {
    dispatch(saveStudent(student));
  }

  const handleUnfollow = () => {
    dispatch(unfollowStudent(student));
  }

  return (
    <div className="StudentEntryContainer">
    <div className="StudentEntry" onClick={handleEntryClick}>
      {student.courses !== undefined && 
        <div className="top-bar">
          <div className="courses" key={"courses_" + student.id}>
            {student.courses.map((course, i)=>{
              return <div className="course" key={"course_" + i}>{course}</div>
            })}
          </div>
        </div>
      }
      <div className="student-introduction"><img src={student.imageUrl} alt="img"></img><h4>{student.name} {student.surname}</h4></div>
      <p>{student.description}</p>
      {student.tags !== undefined && 
        <div className="tags" key={"tags_" + student.id}>
          {student.tags.map((tag, i)=>{
            return <div className="tag" key={"tag_" + i}>{tag}</div>
          })}
        </div>
      }
    </div>
    {saved?
      <button type="button" className="btn btn-outline-dark" onClick={handleUnfollow}>
        Unfollow
      </button>:
      <button type="button" className="btn btn-outline-dark" onClick={handleFollow}>
        Follow
      </button>
    }
    </div>
  );
}

export default StudentEntry;
