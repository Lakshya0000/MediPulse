import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import DoctorsProfile from "./pages/DoctorsProfile";
import CommunityForm from "./pages/CommunityForm";
import Doctors from "./pages/Doctors";


function App() {
  console.log("App");
  return (
    <>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/:type" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/doctorsProfile/:id" element={<DoctorsProfile />} />
        <Route path="/communities" element={<CommunityForm />} />
        <Route path="/doctors" element={<Doctors />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
