import './Ocassion.css' 
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
function Ocassion()
{
 return(
   <div className= "flipcards">
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
      <div className="containerr">
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
   </div>


 )
}
export default Ocassion