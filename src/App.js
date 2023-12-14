import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './Calculator';
import Todo from './Todo';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link to="/" className="navbar-brand">
                End Term Exam
              </Link>
              <div className="justify-content-end">
                <ul className="navbar-nav d-flex flex-row gap-4">
                  <li className="nav-item">
                    <Link to="/calculator" className="nav-link">
                      Calculator
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/todo" className="nav-link">
                      Todo List
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/IkigaiLabs_End_Term" element={<Calculator />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>

        <footer className="bg-dark text-white mt-auto">
          <div className="container mt-4 text-center">
            <div className='d-flex flex-column align-items-start mb-4'>
              <p className='mb-0'>Created By:</p>
              <p className='mb-0'>Sujal Kulshrestha</p>
              <p className='mb-0'>2115500144 - 51</p>
              <p className='mb-0'>B.Tech CSE AIML - 3rd Year - 3R</p>
            </div>
            <p>&copy; Copyright 2023 - End Term Exam</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
