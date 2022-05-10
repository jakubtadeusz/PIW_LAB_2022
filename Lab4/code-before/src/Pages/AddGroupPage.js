import {useState, useContext} from "react"
import "./AddElementPage.css"
import { useNavigate } from "react-router-dom";
import GroupService from "../Models/GroupService";
import { LoginContext } from "../Context/LoginContext";

function AddGroupPage () {
    const [course, setCourse] = useState([]);

    const [name, setName] = useState("");
    const [team, setTeam] = useState([]);
    const [description, setDescription] = useState("");
    const [memberSurname, setMemberSurname] = useState("");
    const [memberName, setMemberName] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    const [memberOccupation, setMemberOccupation] = useState("");

    const student = useContext(LoginContext);
    if(student !== null && team.length === 0 && memberName === "" && memberSurname === ""){
        setMemberName(student.name);
        setMemberSurname(student.surname);
    }
    
    let navigate = useNavigate();

    const handleBackButton = () => {
        navigate("/groups")
    }

    const handleAddButton = () => {
        const group = {
            name: name,
            team: team,
            description: description,
            course: course
        };
        GroupService.addGroup(group);
        navigate("/groups");
    }

    const handleAddMemberButton = () => {
        const member = {
            name: memberName,
            surname: memberSurname,
            occupation: memberOccupation,
            email: memberEmail
        }
        setMemberName("");
        setMemberSurname("");
        setMemberOccupation("");
        setMemberEmail("");
        const newTeam = [...team];
        newTeam.push(member);
        setTeam(newTeam);
    }

    return (
    <div className="AddElement">
        <button type="button" className="btn btn-dark" onClick={handleBackButton}>Cofnij</button>
        <div className="group-info">
            <div>Nazwa grupy: </div>
            <input type={"text"} placeholder="Wprowadź nazwę grupy" className="form-control" onChange={(event)=>setName(event.target.value)}></input>
        </div>
        <div className="group-info">
            <div>Przedmiot: </div>
            <input type={"text"} placeholder="Wprowadź przedmiot" className="form-control" onChange={(event)=>setCourse(event.target.value)}></input>
        </div>
        <div className="group-info">
            <div>Opis: </div>
            <textarea type={"text"} className="form-control" rows="2" placeholder="Wprowadź opis" onChange={(event)=>setDescription(event.target.value)}></textarea>
        </div>
        <div className="group-info">
            <div>Skład grupy: </div>
            <div className="group-members">
                {team.map((member,i)=>{
                    return <div className="group-member" key={"member_" + i}>{member.name} {member.surname} {member.occupation}</div>
                })}
                <div className="add-group-member">
                    <input type={"text"} placeholder="Wprowadź imię" className="form-control" onChange={(event)=>setMemberName(event.target.value)} value={memberName}></input>
                    <input type={"text"} placeholder="Wprowadź nazwisko" className="form-control" onChange={(event)=>setMemberSurname(event.target.value)} value={memberSurname}></input>
                    <input type={"text"} placeholder="Wprowadź email" className="form-control" onChange={(event)=>setMemberEmail(event.target.value)} value={memberEmail}></input>
                    <input type={"text"} placeholder="Wprowadź obowiązki" className="form-control" onChange={(event)=>setMemberOccupation(event.target.value)} value={memberOccupation}></input>
                    <button type={"button"} className="btn btn-dark" onClick={handleAddMemberButton}>Dodaj</button>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-dark" onClick={handleAddButton}>Zatwierdź</button>
    </div>
    );

}

export default AddGroupPage;