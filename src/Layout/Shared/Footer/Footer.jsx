import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-600 text-white">
      <footer className="footer p-10    container mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t    border-base-300  container mx-auto">
        <aside className="items-center grid-flow-col">
          <Link to="/">© 2021-2024 Open IT Institute. All Rights Reserved.
          </Link>
        
         
        </aside>
        <nav className="md:place-self-center md:justify-self-end ">
        <Link to="https://www.linkedin.com/in/adnanalemran">Developed by <samp className="text-warning"> Adnan al emran</samp> 
          </Link>
        
        </nav>
       
      </footer>
      
    </div>
  );
};

export default Footer;
