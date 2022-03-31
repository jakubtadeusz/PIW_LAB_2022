import './App.css';

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

      <Routes>

        <Route path="/" element={<Home toDos={toDos} setToDos={setToDos} />}/>
        <Route path="/students" element={<h2>Koniec internetu</h2>} />
        <Route path="/groups" element={<Search toDos={toDos}/>} />
      </Routes>
      </BrowserRouter>
    </main>
    <footer>Jakub Tadeusz - 256760 - PIW 2022</footer>

  </div>
  );
}

export default App;
