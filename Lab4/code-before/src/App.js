import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import StudentsPage from './Pages/StudentsPage';
import AddStudentPage from './Pages/AddStudentPage';
import GroupsPage from './Pages/GroupsPage';
import AddGroupPage from './Pages/AddGroupPage';
import { useNavigate } from "react-router-dom";
import SendMessage from './Pages/Components/SendMessage';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
    <header>
      <h2>Code Before</h2>
      <h3>Sometimes repo is better than tinder</h3>
    </header>
    <main>
      <nav>
        <NavLink to="/students">Studenci</NavLink>
        <NavLink to="/groups">Grupy projektowe</NavLink>
      </nav>
      <div className="AppContent">
        <Routes>
          <Route path="/" element={<StudentsPage/>}/>
          <Route path="/students" element={<StudentsPage/>} />
          <Route path='/students/add'element={<AddStudentPage/>}/>
          <Route path="/groups" element={<GroupsPage navigate={navigate}/>} />
          <Route path="/groups/add" element={<AddGroupPage/>} />
          <Route path='/message/send/:name'element={<SendMessage/>} />
        </Routes>
      </div>
    </main>
    <footer>Jakub Tadeusz - 256760 - PIW 2022</footer>
  </div>
  );
}

export default App;
