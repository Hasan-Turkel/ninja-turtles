import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <nav>
      <ul class="nav justify-content-end">
  <li className="nav-item">
   <Link  to="/" className="nav-link">Home</Link>
  </li>
  <li className="nav-item">
   <Link  to="/about" className="nav-link">About</Link>
  </li>
  <li className="nav-item">
   <Link  to="/crew" className="nav-link">Our Crew</Link>
  </li>
  <li className="nav-item">
   <Link  to="/contact" className="nav-link">Contact</Link>
  </li>
</ul>
    </nav>
  )
}

export default Nav