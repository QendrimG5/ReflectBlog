import { Home, Login, Search, Signup, View, Write } from './pages'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import styles from './style';

function App() {
  return (
    <Router>
      <div className="App w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-10`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/view' element={<View />} />
              <Route exact path='/search' element={<Search />} />
              <Route exact path='/write' element={<Write />} />
              <Route exact path='/log-in' element={<Login />} />
              <Route exact path='/sign-up' element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
