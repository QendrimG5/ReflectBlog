import { Home, Login, Search, Signup, User, View, ViewYourPost, Write, YourArticles } from './pages'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import styles from './style';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App w-full flex flex-col overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary w-full fixed top-0 z-10 drop-shadow-md`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-[112px] pb-10 main-wrapper`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/view' element={<View />} />
              <Route exact path='/search' element={<Search />} />
              <Route exact path='/write' element={<Write />} />
              <Route exact path='/your-articles' element={<YourArticles />} />
              <Route exact path='/user-profile' element={<User />} />
              <Route exact path='/view-your-post' element={<ViewYourPost />} />
              <Route exact path='/log-in' element={<Login />} />
              <Route exact path='/sign-up' element={<Signup />} />
            </Routes>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary z-10`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
