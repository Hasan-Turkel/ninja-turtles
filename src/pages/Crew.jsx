import  leonardo  from "../img/leanardo-aside.gif";
import  raphael  from "../img/raphael.jpg";
import  donatello  from "../img/donatello.jpg";
import  michelangelo  from "../img/michalengelo-aside.gif";
import { useNavigate } from "react-router-dom";

const Crew = () => {
    let navigate = useNavigate()
  return (
    
    <div className="d-flex justify-content-center p-3 gap-3 text-center bg-black flex-wrap">

<div onClick={()=>navigate("leonardo")} role="button" className="card" style={{ width: "18rem" }}>
  <img src={leonardo} className="card-img-top" alt="..." height={"300px"} />
    <h5 className="card-title">LEANARDO</h5>
</div>
<div onClick={()=>navigate("raphael")} role="button" className="card" style={{ width: "18rem" }}>
  <img src={raphael} className="card-img-top" alt="..."  height={"300px"} />
    <h5 className="card-title">RAPHAEL</h5>
</div>
<div onClick={()=>navigate("donatello")} role="button" className="card" style={{ width: "18rem" }}>
  <img src={donatello} className="card-img-top" alt="..."  height={"300px"} />
    <h5 className="card-title">DONATELLO</h5>
</div>
<div onClick={()=>navigate("michelangelo")} role="button" className="card" style={{ width: "18rem" }}>
  <img src={michelangelo} className="card-img-top" alt="..."  height={"300px"} />
    <h5 className="card-title">MİCHELANGELO</h5>
</div>


        
    </div>
  )
}

export default Crew