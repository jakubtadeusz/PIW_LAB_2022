import {useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props){
    const [isLogin, setIsLogin] = useState(true);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const students = useSelector(state=>state.students.students);
    const navigate = useNavigate();

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
            navigate('/students')
        }
    }

    return (
        <div className="login-page">
            <div>{isLogin?<button type='button' className='btn btn-outline-dark' onClick={changeToRegister}>Register</button>:<button type='button' className='btn btn-outline-dark' onClick={changeToLogin}>Login</button>}</div>
            {isLogin?
            <div>
                <div>Login: <input type={"text"} onChange={e=>setLogin(e.target.value)} value={login}></input></div>
                <div>Password: <input type={"password"} onChange={e=>setPassword(e.target.value)} value={password}></input></div>
                <div><button type='button' className='btn btn-dark' onClick={handleLogin}>Login</button></div>
            </div>
            :
            <div></div>
            }
        </div>
    )
}