import {useState, useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import { addStudent } from '../Features/Students/studentsSlice';
import useLocalStorage from '../Hooks/useLocalStorage';

export default function LoginPage(props){
    const [isLogin, setIsLogin] = useState(true);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const localStorage = useLocalStorage();

    const students = useSelector(state=>state.students.students);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let context = useContext(LoginContext);
    
    useEffect(() => {
    console.log(context)
      if(context !== null){
          navigate("/students")
      }
    }, [context])

    const changeToRegister = () =>{
        setIsLogin(false);
    }

    const changeToLogin = () => {
        setIsLogin(true);
    }

    const handleLogin = () => {
        const logged = students.filter(s=>`${s.name} ${s.surname}` === login && s.password === password);
        if(logged.length === 0){
            props.setLoggedUser(null);
        }else{
            props.setLoggedUser(logged[0]);
            localStorage.setItem("logged", JSON.stringify(logged[0]))
            navigate('/students')
        }
    }

    const handleRegister = () => {
        if(password === repeatPassword){
            const student = {
                name: name,
                surname: surname,
                description: description,
                email: email,
                date: Date.now()
            }
            dispatch(addStudent(student));
            props.setLoggedUser(student);
            localStorage.setItem("logged", JSON.stringify(student))
            navigate('/students')
        }else{
            setShowError(true);
        }
    }

    return (
        <div className="login-page">
            <div>{isLogin?<button type='button' className='btn btn-outline-dark' onClick={changeToRegister}>Register</button>:<button type='button' className='btn btn-outline-dark' onClick={changeToLogin}>Login</button>}</div>
            {isLogin?
            <div>
                <div>Login (name + surname): <input type={"text"} onChange={e=>setLogin(e.target.value)} value={login}></input></div>
                <div>Password: <input type={"password"} onChange={e=>setPassword(e.target.value)} value={password}></input></div>
                <div><button type='button' className='btn btn-dark' onClick={handleLogin}>Login</button></div>
            </div>
            :
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
            }
        </div>
    )
}