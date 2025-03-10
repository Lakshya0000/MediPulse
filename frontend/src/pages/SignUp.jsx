import React, { useState, useCallback } from "react";
import { UserCircle2, Stethoscope, Mail } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ProfileSelection = ({ setUserType }) => (
  <div className="selectprofile space-y-6">
    <div className="text-center">
      <h3 className="text-lg font-medium">Choose your profile type</h3>
      <p className="mt-1 text-sm text-gray-600">
        Select how you want to join CareCircle
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button
        onClick={() => setUserType("user")}
        className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
      >
        <UserCircle2 className="h-8 w-8 text-blue-600 mx-auto" />
        <h4 className="mt-2 font-medium">Join as User</h4>
        <p className="mt-1 text-sm text-gray-600">
          Connect with healthcare providers and support communities
        </p>
      </button>
      <button
        onClick={() => setUserType("doctor")}
        className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
      >
        <Stethoscope className="h-8 w-8 text-blue-600 mx-auto" />
        <h4 className="mt-2 font-medium">Join as Doctor</h4>
        <p className="mt-1 text-sm text-gray-600">
          Provide care and support to differently abled individuals
        </p>
      </button>
    </div>
  </div>
);

const PatientSignUp = ({ handleSubmit, message, patient, setPatient, isloading }) => (
  <form className="space-y-6" onSubmit={handleSubmit}>
    {message && (
      <div className="text-red-500 text-center">
        {message}
      </div>
    )}
    <div className="userprofile rounded-md shadow-sm -space-y-px">
      <div className="text-xl font-bold m-2 underline mr-59">
        General Infomation
      </div>
      <div className="enteremail">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isloading}
            value={patient.email || ""}
            onChange={(e) => setPatient({ ...patient, email: e.target.value })}
            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Enter Email address"
          />
        </div>
      </div>
      <div className="enterpassword">
        <input
          id="password"
          name="password"
          type="password"
          required
          disabled={isloading}
          value={patient.password || ""}
          onChange={(e) => setPatient({ ...patient, password: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Create Password"
        />
      </div>
      <div className="firstname">
        <input
          id="firstname"
          name="firstname"
          type="firstname"
          required
          disabled={isloading}
          value={patient.firstName || ""}
          onChange={(e) => setPatient({ ...patient, firstName: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter your First name"
        />
      </div>
      <div className="lastname">
        <input
          id="lastname"
          name="lastname"
          type="lastname"
          disabled={isloading}
          value={patient.lastName || ""}
          onChange={(e) => setPatient({ ...patient, lastName: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter your Last name"
        />
      </div>
      <div className="gender">
        <select
          id="gender"
          name="gender"
          required
          disabled={isloading}
          value={patient.gender || ""}
          onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        >
          <option value="" disabled>
            Select your Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="phone-number">
        <input
          id="phone-number"
          name="phone-number"
          type="tel"
          disabled={isloading}
          value={patient.phone || ""}
          onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter your Phone number"
        />
      </div>
      <div className="bio">
        <input
          id="bio"
          name="bio"
          type="text"
          disabled={isloading}
          value={patient.bio || ""}
          onChange={(e) => setPatient({ ...patient, bio: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter Bio"
        />
      </div>

      <div className="text-xl font-bold m-2 mr-68 underline">
        Medical History
      </div>
      <div className="primary-condition">
        <input
          id="primary-condition"
          name="primary-condition"
          type="primary-condition"
          disabled={isloading}
          value={patient.primaryCondition || ""}
          onChange={(e) => setPatient({ ...patient, primaryCondition: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter your Primary condition"
        />
      </div>

      <div className="text-xl font-bold m-2 mr-60 underline">
        Emergency Contact
      </div>

      <div className="emergency-name">
        <input
          id="emergency-name"
          name="emergency-name"
          disabled={isloading}
          value={patient.emergencyContact || ""}
          type="emergency-name"
          onChange={(e) => setPatient({ ...patient, emergencyContact: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter name"
        />
      </div>

      <div className="relation">
        <input
          id="relation"
          name="relation"
          type="relation"
          disabled={isloading}
          value={patient.emergencyRelation || ""}
          onChange={(e) => setPatient({ ...patient, emergencyRelation: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter your relation with the person"
        />
      </div>

      <div className="emergency-number">
        <input
          id="emergency-number"
          name="emergency-number"
          type="number"
          disabled={isloading}
          pattern="[0-9]{10}"
          value={patient.emergencyPhone || ""}
          onChange={(e) => setPatient({ ...patient, emergencyPhone: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter the phone number"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isloading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create User Account
        </button>
      </div>
    </div>
  </form>
);

const DoctorSignUp = ({handleSubmit,message,doctor,setDoctor,isloading}) => (
  <form className="space-y-6" onSubmit={handleSubmit}>
    {message && (
      <div className="text-red-500 text-center">
        {message}
      </div>
    )}
    <div className="userprofile rounded-md shadow-sm -space-y-px">
      <div className="text-xl font-bold m-2 underline mr-59">
        General Infomation
      </div>
      <div className="enteremail">
        <label htmlFor="email" className="sr-only">
          Enter Email address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
          <input
            id="email"
            name="email"
            type="email"
            value={doctor.email || ""}
            disabled={isloading}
            onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Enter Email address"
          />
        </div>
      </div>
      <div className="enterpassword">
        <input
          id="password"
          name="password"
          type="password"
          value={doctor.password || ""}
          disabled={isloading}
          onChange={(e) => setDoctor({ ...doctor, password: e.target.value })}
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Enter Password"
        />
      </div>

      <div></div>
      <div>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={doctor.firstName || ""}
          disabled={isloading}
          onChange={(e) => setDoctor({ ...doctor, firstName: e.target.value })}
          required
          className="input appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <input
          name="lastName"
          type="text"
          disabled={isloading}
          value={doctor.lastName || ""}
          onChange={(e) => setDoctor({ ...doctor, lastName: e.target.value })}
          placeholder="Last Name"
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div className="gender">
        <select
          id="gender"
          name="gender"
          required
          disabled={isloading}
          value={doctor.gender || ""}
          onChange={(e) => setDoctor({ ...doctor, gender: e.target.value })}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        >
          <option value="" disabled>
            Select your Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <input
          name="phoneNumber"
          type="tel"
          value={doctor.phone || ""}
          onChange={(e) => setDoctor({ ...doctor, phone: e.target.value })}
          disabled={isloading}
          placeholder="Phone Number"
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <input
          name="bio"
          type="text"
          placeholder="Bio"
          value={doctor.bio || ""}
          onChange={(e) => setDoctor({ ...doctor, bio: e.target.value })}
          disabled={isloading}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div className="text-xl font-bold m-2 underline mr-78">Experience</div>
      <div>
        <input
          name="experience.years"
          type="number"
          placeholder="Years of Experience"
          value={doctor.years || ""}
          onChange={(e) => setDoctor({ ...doctor, years: e.target.value })}
          disabled={isloading}
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <input
          name="experience.expertise"
          type="text"
          placeholder="Expertise"
          value={doctor.expertise || ""}
          onChange={(e) => setDoctor({ ...doctor, expertise: e.target.value })}
          disabled={isloading}
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div className="text-xl font-bold m-2 underline mr-90">Clinic</div>
      <div>
        <input
          name="clinic.name"
          type="text"
          placeholder="Clinic Name"
          value={doctor.clinicName || ""}
          onChange={(e) => setDoctor({ ...doctor, clinicName: e.target.value })}
          disabled={isloading}
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <input
          name="clinic.location"
          type="text"
          value={doctor.clinicLocation || ""}
          onChange={(e) => setDoctor({ ...doctor, clinicLocation: e.target.value })}
          disabled={isloading}
          placeholder="Clinic Location"
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <input
          name="clinic.phoneNumber"
          type="tel"
          value={doctor.clinicPhone || ""}
          onChange={(e) => setDoctor({ ...doctor, clinicPhone: e.target.value })}
          disabled={isloading}
          placeholder="Clinic Phone Number"
          className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isloading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Doctor Account
        </button>
      </div>
    </div>
  </form>
);

const SignUp = () => {
  const {type} = useParams();
  const [userType, setUserType] = useState(type || "select");
  const redirect = useNavigate();
  const [patient, setPatient] = useState({});
  const [doctor, setDoctor] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { isAuth, setIsAuth, setUser, setRole } = useAuth();
  
  if (isAuth) {
    redirect("/dashboard");
  }
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    try {
      const data = userType === "user" ? patient : doctor;
      const res = await axios.post(
        `http://localhost:8080/${userType}/signup`, 
        data, 
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      if (res.status === 201) {
        console.log("check : ", res.data);
        setIsAuth(true);
        setUser(res.data.result);
        setRole(userType);
        redirect("/dashboard");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
      setMessage("An error occured");
    }
    setIsLoading(false);
  }, [userType, patient, doctor, setIsAuth, setUser, setRole]);

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="createacc text-center max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h1>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              SignIn
            </Link>
          </p>
        </div>

        {userType === "select" && <ProfileSelection setUserType={setUserType} />}
        {userType === "user" && (
          <PatientSignUp 
            handleSubmit={handleSubmit}
            message={message}
            patient={patient}
            setPatient={setPatient}
            isloading={isloading}
          />
        )}
        {userType === "doctor" && <DoctorSignUp handleSubmit={handleSubmit} message={message} doctor={doctor} setDoctor={setDoctor} isloading={isloading} />}

        {userType !== "select" && (
          <button
            onClick={() => setUserType("select")}
            className="mt-4 w-full text-sm text-gray-600 hover:text-blue-500"
          >
            ← Change profile type
          </button>
        )}

        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;