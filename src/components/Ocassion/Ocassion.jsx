import './Ocassion.css' 
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import { Link } from "react-router-dom";
import Calendar from '../Calendar/Calendar'
function Ocassion()
{
 return(
   <div className="c1">
   <Calendar/>
   <div className= "flipcards">
      <Link to="/Formal"> 
      <div className="container">
         <div className="cardd"> 
            <div className="front">
            <h2>Formal events</h2>
            <img class = "img" src={image1}></img>
            </div>
            <div className="back">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
            </div>
         
         </div>
      </div>
      </Link>
      <Link to="/Casual"> 
      <div className="container">
         <div className="cardd">  
            <div className="front">
            <h2>Casual events</h2>
            <img class = "img" src={image2}></img>
            </div>
            <div className="back">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
            </div>
         </div>
      </div>
      </Link>
      <Link to="/Social"> 
      <div className="container">
         <div className="cardd">  
            <div className="front">
            <h2>Social events</h2>
            <img class = "img" src={image3}></img>
            </div>
            <div className="back">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
            </div>
         </div>
      </div>
<<<<<<< HEAD
      <div className="containerr">
=======
      </Link>
      <Link to="/Seasonal">
      <div className="container">
>>>>>>> 8b2c819cd7a67d88aa9166ac82500431c2aa65df
         <div className="cardd">  
            <div className="front">
            <h2>Seasonal events</h2>
            <img class = "img" src={image4}></img>
            </div>
            <div className="back">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, a?</p>
            </div>
         </div>
      </div>
      </Link>
   </div>

   </div>
 )
}
export default Ocassion