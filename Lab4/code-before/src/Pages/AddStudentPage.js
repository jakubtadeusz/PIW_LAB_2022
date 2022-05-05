import {useState} from "react"
import "./AddElementPage.css"
import { useNavigate } from "react-router-dom";
import StudentService from "../Models/StudentService";
import { useDispatch } from "react-redux";
import { addStudent } from "../Features/Students/studentsSlice";

function AddStudentPage () {
    const [tags, setTags] = useState([]);
    const [courses, setCourses] = useState([]);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleBackButton = () => {
        navigate("..")
    }

    const handleAddButton = () => {
        const student = {
            name: name,
            surname: surname,
            email: email,
            description: description,
            tags: tags,
            courses: courses
        };
        StudentService.addStudent(student).then(s=>dispatch(addStudent(s)));
        navigate("/students");
    }

    const handleTagsChange = (event) => {
        const tags = event.target.value.split(",").map(tag=>tag.trim()).filter(tag=>tag!=="");
        setTags(tags);
    }

    const handleCoursesChange = (event) => {
        const courses = event.target.value.split(",").map(course=>course.trim()).filter(course=>course!=="");
        setCourses(courses);
    }

    return (
    <div className="AddElement">
        <button type="button" className="btn btn-dark" onClick={handleBackButton}>Cofnij</button>
        <div className="student-info">
            <div>Imię: </div>
            <input type={"text"} placeholder="Wprowadź imię" className="form-control" onChange={(event)=>setName(event.target.value)}></input>
        </div>
        <div className="student-info">
            <div>Nazwisko: </div>
            <input type={"text"} placeholder="Wprowadź nazwisko" className="form-control" onChange={(event)=>setSurname(event.target.value)}></input>
        </div>
        <div className="student-info">
            <div>Email: </div>
            <input type={"text"} placeholder="Wprowadź email" className="form-control" onChange={(event)=>setEmail(event.target.value)}></input>
        </div>
        <div className="student-info">
            <div>Tagi: </div>
            <input type={"text"} placeholder="Wprowadź tagi, rozdzielone przecinkiem" className="form-control" onChange={(event)=>handleTagsChange(event)}></input>
            {(tags !== undefined && tags.length > 0) &&
                <div className="tags">
                    {tags.map((tag, id)=><div className="tag" key={"tag_" + id}>{tag}</div>)}
                </div>
            }
        </div>
        <div className="student-info">
            <div>Przedmioty: </div>
            <input type={"text"} placeholder="Wprowadź przedmioty, rozdzielone przecinkiem" className="form-control" onChange={(event)=>handleCoursesChange(event)}></input>
            {(tags !== undefined && tags.length > 0) &&
                <div className="courses">
                    {courses.map((course, id)=><div className="course" key={"course_" + id}>{course}</div>)}
                </div>
            }
        </div>
        <div className="student-info">
            <div>Opis: </div>
            <textarea type={"text"} className="form-control" rows="2" placeholder="Wprowadź opis" onChange={(event)=>setDescription(event.target.value)}></textarea>
        </div>
        <button type="button" className="btn btn-dark" onClick={handleAddButton}>Zatwierdź</button>
        
    </div>
    );
}

export default AddStudentPage;