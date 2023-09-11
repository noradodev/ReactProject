import { Link } from "react-router-dom";
import { useRef } from "react";
function NavBar() {
  const showNav = useRef();

  return (
    <div className="navbar p-5">
      <div className="flex justify-between items-center">
        <div className="icon ">
          <img
            src="https://placekitten.com/g/50"
            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} rounded-full inline pe-3"
            alt=""
          />
          <Link to="/" className="bg-yellow-200 p-2 rounded-full text-sm ">
            We are hiring
          </Link>
        </div>
        <div className="navbar-link text-md tracking-widest ">
          <Link to="/" className="mx-2 hover:underline">
            Work
          </Link>
          <Link to="/about" className="mx-2 hover:underline">
            Service
          </Link>
          <Link to="/about" className="mx-2 hover:underline">
            About
          </Link>
          <Link to="/about" className="mx-2 hover:underline">
            Blog
          </Link>
          <Link
            to="/about"
            className="mx-2 border border-black p-3 rounded-full hover:bg-slate-400 hover:border-white"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
