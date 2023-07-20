import { useParams } from "react-router-dom"
import  leonardo  from "../img/leanardo-aside.gif";
import  raphael  from "../img/raphael.jpg";
import  donatello  from "../img/donatello.jpg";
import  michelangelo  from "../img/michalengelo-aside.gif";
import  err  from "../img/404.png";
import {Link } from "react-router-dom"


const Mutant = () => {
   let {id} = useParams()
   console.log(id);
  return (

    <main className="bg-black">
    <div className="card text-center m-auto p-4" style={{ width: "18rem" }}>

{id==="leonardo"? <img src={leonardo} className="card-img-top" alt="..." />:id==="raphael"?<img src={raphael}  className="card-img-top" alt="..." />:id==="donatello"?  <img src={donatello}  className="card-img-top" alt="..." />:id==="michelangelo"?<img src={michelangelo} className="card-img-top" alt="..." />:
<img className="p-4" width={"250px"} src={err} alt="" />
}

  <div className="card-body">

  {id==="leonardo"? <p className="card-text">
    The leader, is the most disciplined and skilled turtle; an expert swordsman, he wields two katana and wears a blue bandana.
    </p>:id==="raphael"?<p className="card-text">
      He strongest and most hot-headed turtle, wears a red bandana and uses a pair of sai.
    </p>
:id==="donatello"?   <p className="card-text">
He uses his intellect to invent gadgets and vehicles; he wears a purple mask and uses a bo staff.
</p>:id==="michelangelo"?<p className="card-text">
    He is the least disciplined and most fun-loving turtle, and is usually portrayed as the fastest and most agile. He wears an orange bandana and uses nunchucks.</p>
:<p></p>}

 <h5 className="card-title">{id.toUpperCase()}</h5>
  </div>

  <Link to="/crew"> <button className="btn btn-success">Go back to crew</button></Link>

 
</div>
</main>
  )
}

export default Mutant