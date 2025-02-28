import { Heart, Github, Mail, Linkedin, } from 'lucide-react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className="footerparts grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="fpart1">
            <div className="logo flex items-center">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-bold">MediPulse</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Empowering differently abled communities through inclusive healthcare and support.
            </p>
          </div>
          <div className="fpart2">
            <h3 className="heading2 ">COMPANY</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link to="/communities" className="text-gray-600 hover:text-blue-600">Communities</Link></li>
              <li><Link to="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link></li>
            </ul>
          </div>
          <div className="fpart3">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="fpart4">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="flex space-x-6 mt-4">
              <a href="https://github.com/khushalmidha" target='_blank' className="text-gray-600 hover:text-blue-600"><Github className="h-6 w-6" /></a>
              <a href="https://www.linkedin.com/in/khushal-midha-260bb3288/" target='blank' className="text-gray-600 hover:text-blue-600"><Linkedin className="h-6 w-6" /></a>
              <a href="mailto:khushalmidha24@gmail.com"className="text-gray-600 hover:text-blue-600"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} MediPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
