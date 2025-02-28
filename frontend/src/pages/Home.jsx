import {
    Users,
    Heart,
    MessageCircle,
    Stethoscope,
    Shield,
    UserPlus,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  // import { useEffect } from "react";
  // import { io } from "socket.io-client";
  
  const Home = () => {
    // useEffect(() => {
    //   const socket = io("http://localhost:8080/chatroom", {
    //     path: "/chatroom/socket.io",
    //   });
    //   socket.on("message", () => console.log("hello"));
    // }, []);
    return (
      <div>
        <div className="hero1 ">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empowering Differently Abled</span>
                <span className="block text-blue-600">
                  Communities Through Care
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join CareCircle - a supportive platform connecting differently
                abled individuals with healthcare providers and community support.
                Experience personalized care coordination and inclusive community
                engagement.
              </p>
  
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/signup">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Join as Patient
                  </button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/signup">
                  <button  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Join as Doctor
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="joincommunity mt-24 bg-blue-50 rounded-2xl p-8 sm:p-12">
              <div className=" max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Join Our Growing Community
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  CareCircle brings together patients, healthcare providers, and
                  support communities to create a comprehensive care network for
                  differently abled individuals.
                </p>
                <div className="numbers mt-8 flex justify-center space-x-8">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-blue-600">1000+</p>
                    <p className="mt-2 text-base font-medium text-gray-500">
                      Active Members
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-blue-600">30+</p>
                    <p className="mt-2 text-base font-medium text-gray-500">
                      Affiliated NGO's
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-blue-600">200+</p>
                    <p className="mt-2 text-base font-medium text-gray-500">
                      Affiliated Doctors
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="hero2 mt-24">
              <div className="hero2text">
                <h2 className="font-extrabold text-3xl text-center text-gray-900 sm:text-4xl mb-12">
                  How CareCircle Supports You
                </h2>
              </div>
              <div className="features grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-18">
                <FeatureCard
                  icon={<Users className="h-6 w-6 text-blue-600" />}
                  title="Inclusive Communities"
                  description="Join our global community and create private support groups based on specific needs and conditions."
                />
                <FeatureCard
                  icon={<MessageCircle className="h-6 w-6 text-blue-600" />}
                  title="Structured Communication"
                  description="Easy-to-use templates for common requests like blood donations, medical equipment sharing, and support services."
                />
                <FeatureCard
                  icon={<Stethoscope className="h-6 w-6 text-blue-600" />}
                  title="Matched Care"
                  description="Get connected with healthcare providers specialized in your specific needs and conditions."
                />
                <FeatureCard
                  icon={<Shield className="h-6 w-6 text-blue-600" />}
                  title="Safe Environment"
                  description="Verified healthcare providers and moderated communities ensure a secure and supportive space."
                />
                <FeatureCard
                  icon={<Heart className="h-6 w-6 text-blue-600" />}
                  title="Personalized Support"
                  description="Receive care recommendations and community suggestions based on your profile and needs."
                />
                <FeatureCard
                  icon={<Users className="h-6 w-6 text-blue-600" />}
                  title="Resource Sharing"
                  description="Access and share valuable resources, experiences, and support within your communities."
                />
              </div>
            </div>
  
            
          </main>
        </div>
      </div>
    );
  };
  
  const FeatureCard = ({ icon, title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
  
  export default Home;
  