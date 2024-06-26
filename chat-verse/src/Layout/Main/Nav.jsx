import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logoLight from "../../assets/Logo/logo-light.png";
import Modal from "../../Components/Shared/Modal/Modal";
import SignIn from "../../Pages/Home/User/SignIn/SignIn";
import ContactForm from "../../Components/ContactForm/ContactForm";
import useMenu from "../../Hooks/useMenu";

const activeClass = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "text-xl hover:text-green-500 transition-colors text-green-500 uppercase"
    : "text-xl hover:text-green-500 transition-colors uppercase";

const links = (
  <>
    <li>
      <NavLink to={""} className={activeClass}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={"/features"} className={activeClass}>
        Features
      </NavLink>
    </li>
    <li>
      <NavLink to={"/feedback"} className={activeClass}>
        Feedback
      </NavLink>
    </li>
  </>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const navRef = useRef();
  useMenu(show, navRef, setShow);

  const contact = (
    <li>
      <button
        onClick={() => setShowContactForm(true)}
        className={"text-xl hover:text-green-500 transition-colors uppercase"}
      >
        Contact Us
      </button>
    </li>
  );

  return (
    <>
      <div className="border-b-2 shadow-lg py-5 font-rubik">
        <nav className="max-w-7xl mx-auto flex justify-between px-3 xl:px-0 items-center">
          <img
            className="w-[120px] lg:w-[180px] lg:h-[50px]"
            src={logoLight}
            alt="chatverse logo"
          />
          <ul className="items-center gap-4 hidden lg:flex">
            {links}
            {contact}
            <li
              onClick={() => setIsOpen(true)}
              className="text-xl hover:cursor-pointer px-4 py-2 bg-green-500 hover:bg-gray-300 transition-colors rounded-md text-center lg:text-left"
            >
              Sign In
            </li>
          </ul>
          <div className="lg:hidden">
            <button onClick={() => setShow(!show)} className="text-2xl pr-2">
              {show ? <IoClose /> : <FaBarsStaggered />}
            </button>
            <ul
              ref={navRef}
              className={`absolute bg-gray-200 h-screen space-y-5 w-3/4 md:w-1/2 p-5 top-0 ${
                show ? "left-0" : "left-[-9999px]"
              } transition-all duration-300`}
            >
              {links}
              {contact}
              <li
                onClick={() => setIsOpen(true)}
                className="text-xl hover:cursor-pointer px-4 py-2 bg-green-500 hover:bg-gray-300 transition-colors rounded-md text-center lg:text-left"
              >
                Sign In
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <SignIn setIsOpen={setIsOpen} />
      </Modal>
      <Modal isOpen={showContactForm} setIsOpen={setShowContactForm}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default Nav;
