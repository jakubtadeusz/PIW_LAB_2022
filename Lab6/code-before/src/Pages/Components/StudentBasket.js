import './StudentBasket.css'
import {useState} from 'react'
import { useSelector } from 'react-redux';
import StudentBasketEntry from './StudentBasketEntry';

export default function StudentBasket(){
    const [shown, setShown] = useState(false);
    const savedStudents = useSelector(state=>state.students.savedStudents);

    const handleButtonClick = () => {
        setShown(!shown);
    }

    return (
        <div className="student-basket-container">
            <div className="student-basket-button">
                <button type="button" className="btn btn-dark" onClick={handleButtonClick}>Student basket</button>
            </div>
            {shown&&
            <div className="student-basket">
                {savedStudents.length === 0&&"empty..."}
                {savedStudents.map(student=>
                {
                    return(<StudentBasketEntry student={student}/>)
                })}
            </div>}
        </div>
    );
}