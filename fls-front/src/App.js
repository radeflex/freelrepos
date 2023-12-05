import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Works from "./pages/Works/Works";
import Freelancers from "./pages/Freelancers/Freelancers";
import EditProfile from "./components/editProfile/editProfile";
import CreatePost from "./components/createPost/createPost";
import Courses from "./pages/Courses/Courses";
import Main from "./pages/MainPage/Main";
import AboutPl from "./pages/About/AboutPlatf";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-work" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutplatform" element={<AboutPl />} />
        <Route path="/edit/:id" element={<EditProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/works" element={<Works />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
