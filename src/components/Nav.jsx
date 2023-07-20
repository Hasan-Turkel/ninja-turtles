import { NavLink, useNavigate } from "react-router-dom"
import  logo  from "../img/logo.png";



const Nav = () => {
  let navigate = useNavigate()
  return (
    <nav className="d-flex justify-content-between p-4 bg-primary-subtle">
      <img role="button" onClick={()=>navigate("/")} src={logo} alt="" width={"20%"} />
      <ul className="nav justify-content-end">
  <li className="nav-item ">
   <NavLink  to="/" className="nav-link text-dark fs-5">Home</NavLink>
  </li>
  <li className="nav-item">
   <NavLink  to="/about" className="nav-link text-dark fs-5 ">About</NavLink>
  </li>
  <li className="nav-item">
   <NavLink  to="/crew" className="nav-link text-dark fs-5">Our Crew</NavLink>
  </li>
  <li className="nav-item">
   <NavLink  to="/contact" className="nav-link text-dark fs-5">Contact</NavLink>
  </li>
</ul>
    </nav>
  )
}

export default Nav