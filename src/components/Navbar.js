import { Link } from "react-router-dom";
import { useRef } from "react";
function NavBar() {
  const showNav = useRef();

  return (
    <div className="navbar container mx-auto p-5 text-white font-satoshi">
      <div className="flex justify-between items-center">
        <div className="icon ">
          <img
            src="https://placekitten.com/g/50"
            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} rounded-full inline pe-3"
            alt=""
          />
          {/* <Link to="/" className="bg-yellow-200 p-2 rounded-full text-sm ">
            We are hiring
          </Link> */}
        </div>

        <div className="navbar-link text-sm tracking-widest ">
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
        </div>
        <div>
          <Link
            to="/about"
            className="mx-2 p-3 rounded bg-green-700 hover:bg-slate-400"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
