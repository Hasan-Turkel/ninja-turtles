import  homeLogo  from "../img/home-logo.gif";

import address from "../img/address.jpg";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
        <img src={homeLogo} alt="" width={"100%"} />
        <Footer/>
        <img src={address} alt="" width={"100%"} />
    </div>
  )
}

export default Home