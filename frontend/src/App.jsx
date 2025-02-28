import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events"
import EditProfile from "./pages/EditProfile";
import Chat from "./pages/Chat";
import DoctorsProfile from "./pages/DoctorsProfile";
import PastEvents from "./pages/PastEvents";
import CommunityForm from "./pages/CommunityForm";
import { useState } from "react";


function App() {

  const  [auth,setauth] = useState(false)
  return (
    <>
      <Navbar auth={auth} setauth={setauth}/>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp setauth={setauth} />} />
        <Route path="/login" element={<Login setauth={setauth} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/doctorsProfile/:id" element={<DoctorsProfile />} />
        <Route path="/pastevents" element={<PastEvents />} />
        <Route path="/new" element={<CommunityForm />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
