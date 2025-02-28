import { Link, useNavigate } from 'react-router-dom';
import { Heart, CircleUserRound, Settings, LogOut, Calendar } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({auth = false, setauth = () => { }}) => {

  const [token, setToken] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [role, setRole] = useState("ngo");
  const navigate = useNavigate();
  console.log(auth)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to='/' className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">MediPulse</span>
            </Link>
          </div>
          <div className="relative hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            {
              auth==true? (<>
                {(role == "ngo" || role == "doctor") && (
                  <Link to="/pastevents" className="text-gray-700 hover:text-blue-600 flex items-center">
                    <Calendar className="w-5 h-5 mr-1" />
                    Events
                  </Link>
                )}
                <div>
                  <button onClick={() => {
                    setShowProfile(!showProfile)
                  }}
                    className="focus:outline-none cursor:pointer"
                  >
                    <CircleUserRound className='size-10 text-blue-600 bg-blue-100 p-0.5 border rounded-full' />
                  </button>

                  {showProfile && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                      <Link to="/edit-profile" onClick={() => { setShowProfile(!showProfile) }} className='flex items-center px-4 py-2 hover:bg-gray-100'>
                        <Settings className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Link>
                      <button onClick={() => {
                        setauth(false);
                        setShowProfile(false);
                        navigate("/");
                      }}
                        className="flex items-center w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              </>)
                : (<div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8"><Link to='/login' className="text-gray-700 hover:text-blue-600">Login</Link>
                  <Link to='/signup' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Sign Up
                  </Link>
                </div>)
            }
            {/* <Link to='/About' className="text-gray-700 hover:text-blue-600">About</Link> */}
            {/* <Link to='/Communities' className="text-gray-700 hover:text-blue-600">Communities</Link> */}
            {/* <Link to='/Doctors' className="text-gray-700 hover:text-blue-600">Doctors</Link> */}
            {/* <Link to='/Resources' className="text-gray-700 hover:text-blue-600">Resources</Link> */}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
