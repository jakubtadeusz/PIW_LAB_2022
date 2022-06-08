import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import StudentsPage from './Pages/StudentsPage';
import AddStudentPage from './Pages/AddStudentPage';
import GroupsPage from './Pages/GroupsPage';
import AddGroupPage from './Pages/AddGroupPage';
import { useNavigate } from "react-router-dom";
import SendMessage from './Pages/Components/SendMessage';
import StudentBasket from './Pages/Components/StudentBasket';
import { LoginProvider } from './Context/LoginContext';
import {useState, useEffect} from 'react'
import { setStudents } from "./Features/Students/studentsSlice";
import { useDispatch } from "react-redux";
import StudentService from "./Models/StudentService";
import Login from './Pages/Login';
import {logout} from './Firebase/users'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase/init';
import Register from './Pages/Register';

function App() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [user, loading, error] = useAuthState(auth);

  useEffect(()=>{
    StudentService.getStudents().then(s=>{
      dispatch(setStudents(s));
      });
  }, [dispatch]);

  const logoutUser = () => {
    logout();
    navigate('/')
  }
  return (
    <div className="App">
    <LoginProvider value={user}>
    <header>
      <div>
      <h2>Code Before</h2>
      <h3>Sometimes repo is better than tinder</h3>
      </div>
      {user !== null&&<div style={{display: "flex", flexDirection: "column", alignItems: "center", marginLeft:"50vw"}}><div>Logged as: {user.displayName} </div>
      <div><button type='button' className='btn btn-dark' onClick={logoutUser}>Logout</button></div>
      </div>}
      {user !== null&&<div><StudentBasket/></div>}
    </header>
    <main>
      <nav>
        <NavLink to="/students">Studenci</NavLink>
        <NavLink to="/groups">Grupy projektowe</NavLink>
      </nav>
      <div className="AppContent">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/students" element={<StudentsPage/>} />
          <Route path='/students/add'element={<AddStudentPage/>}/>
          <Route path="/groups" element={<GroupsPage navigate={navigate}/>} />
          <Route path="/groups/add" element={<AddGroupPage/>} />
          <Route path='/message/send/:name'element={<SendMessage/>} />
        </Routes>
      </div>
    </main>
    <footer>Jakub Tadeusz - 256760 - PIW 2022</footer>
    </LoginProvider>
  </div>
  );
}

export default App;
