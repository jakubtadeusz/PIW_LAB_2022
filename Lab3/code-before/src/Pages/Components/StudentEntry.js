import { useState, useEffect } from "react";

function StudentEntry(props) {
  const [student, setStudent] = useState([]);

  useEffect(()=>{
    setStudent(props.student);
  }, [props])

  return (
    <p>{student.name} {student.surname}</p>
  );
}

export default StudentEntry;
