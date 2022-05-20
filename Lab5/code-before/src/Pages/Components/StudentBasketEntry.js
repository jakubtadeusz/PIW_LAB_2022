import './StudentBasket.css'
import {useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';

export default function StudentBasketEntry(props){
    let [student, setStudent] = useState();
    let navigate = useNavigate();

    useEffect(() => {
      setStudent(props.student);
    }, [props])

    const handleStudentClick = () => {
        navigate(`/message/send/${student.name} ${student.surname}`);
    }

    return (
        <div>{student!==undefined&&<div className="student-introduction" onClick={handleStudentClick} key={student.id}>
        <img src={student.imageUrl} alt="img" width={"40em"}></img><h4>{student.name} {student.surname}</h4></div>}
        </div>
    );
}