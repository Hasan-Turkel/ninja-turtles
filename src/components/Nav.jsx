import { Link } from "react-router-dom"
import  logo  from "../img/logo.png";

const Nav = () => {
  return (
    <nav className="d-flex justify-content-between p-4 bg-primary-subtle">
      <img src={logo} alt="" width={"20%"} />
      <ul className="nav justify-content-end">
  <li className="nav-item ">
   <Link  to="/" className="nav-link text-dark fs-5">Home</Link>
  </li>
  <li className="nav-item">
   <Link  to="/about" className="nav-link text-dark fs-5 ">About</Link>
  </li>
  <li className="nav-item">
   <Link  to="/crew" className="nav-link text-dark fs-5">Our Crew</Link>
  </li>
  <li className="nav-item">
   <Link  to="/contact" className="nav-link text-dark fs-5">Contact</Link>
  </li>
</ul>
    </nav>
  )
}

export default Nav