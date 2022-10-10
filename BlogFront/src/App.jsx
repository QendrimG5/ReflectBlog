import { Home, Login, Search, Signup, User, View, ViewYourPost, Write, YourArticles } from './pages'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import styles from './style';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App w-full flex flex-col h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary absoulute w-full`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-10 pb-20`}>
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
        <Footer />
      </div>
    </Router>
  )
}

export default App;
