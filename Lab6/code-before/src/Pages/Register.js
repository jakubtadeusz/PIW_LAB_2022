import {useState, useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import { addStudent } from '../Features/Students/studentsSlice';
import useLocalStorage from '../Hooks/useLocalStorage';
import { getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";



export default function Register(props){
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const auth = getAuth();
    const navigate = useNavigate();
    let context = useContext(LoginContext);
    
    useEffect(() => {
    console.log(context)
      if(context !== null){
          navigate("/students")
      }
    }, [context])

    const handleRegister = () => {
        if(password === repeatPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then(function(result) {
                console.log(result);
                updateProfile(auth.currentUser, {
                    displayName: name + " " + surname
                  }).then((r) => {
                      console.log(r);
                    navigate("/");
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
              }).catch(function(error) {
                console.log(error);
              });
 
        }else{
            setShowError(true);
        }
    }

    return (
        <div className="login-page">
            <div>
                <div>Name: <input type={"text"} onChange={e=>setName(e.target.value)} value={name}></input></div>
                <div>Surname: <input type={"text"} onChange={e=>setSurname(e.target.value)} value={surname}></input></div>
                <div>Description: <input type={"text"} onChange={e=>setDescription(e.target.value)} value={description}></input></div>
                <div>Email: <input type={"email"} onChange={e=>setEmail(e.target.value)} value={email}></input></div>
                <div>Password: <input type={"password"} onChange={e=>setPassword(e.target.value)} value={password}></input></div>
                <div>Repeat password: <input type={"password"} onChange={e=>setRepeatPassword(e.target.value)} value={repeatPassword}></input></div>
                <div><button type='button' className='btn btn-dark' onClick={handleRegister}>Register</button></div>
                {showError&&<div>Passwords not matching</div>}
            </div>
        </div>
    )
}