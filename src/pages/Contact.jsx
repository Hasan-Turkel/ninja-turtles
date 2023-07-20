import address from "../img/address.jpg";


const Contact = () => {
  return (
    <div className="contact">
        <img src={address} alt="" width={"100%"} />
        <div className="text-light ">
            <h3>email:ninjaturtles@gmail.com</h3>
            <h3 className="my-5">number: 0800 400 80 80 </h3>
            <h3>
                address: 28-1 122nd St #8th, Queens, NY 11354  
            </h3>
            

        </div>
    </div>
  )
}

export default Contact