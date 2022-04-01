import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import StudentsPage from './Pages/StudentsPage';
import AddStudentPage from './Pages/AddStudentPage';
import GroupsPage from './Pages/GroupsPage';
import AddGroupPage from './Pages/AddGroupPage';

function App() {
  return (
    <div className="App">
    <header>
      <h2>Code Before</h2>
      <h3>Sometimes repo is better than tinder</h3>
    </header>
    <main>
      <BrowserRouter>
      <nav>
        <NavLink to="/students">Studenci</NavLink>
        <NavLink to="/groups">Grupy projektowe</NavLink>
      </nav>
      <div className="AppContent">
      <Routes>
        <Route path="/" element={<StudentsPage/>}/>
        <Route path="/students" element={<StudentsPage/>} />
        <Route path='/students/add'element={<AddStudentPage/>}/>
        <Route path="/groups" element={<GroupsPage/>} />
        <Route path="/groups/add" element={<AddGroupPage/>} />

      </Routes>
      </div>
      </BrowserRouter>
    </main>
    <footer>Jakub Tadeusz - 256760 - PIW 2022</footer>

  </div>
  );
}

export default App;
