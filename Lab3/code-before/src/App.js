import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import StudentsPage from './Pages/StudentsPage';

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
        <Route path="/groups" element={<p>Groups</p>} />
      </Routes>
      </div>
      </BrowserRouter>
    </main>
    <footer>Jakub Tadeusz - 256760 - PIW 2022</footer>

  </div>
  );
}

export default App;
