import './Ocassion.css'
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import { useState } from 'react'
function Ocassion()
{
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
      setFlipped(!flipped);
    };
 return(
    <div className="Ocassion">
    <div className={`cards${flipped ? 'flipped' : ''}`}>
    <div className='card'>
    <h2>Formal events</h2>
    <img src={image1}></img>
    </div>
    <div className="card">
    <h2>Casual Events</h2>
    <img src={image2}></img>
    </div>
    <div className="card">
    <h2>Social Events</h2>
    <img src={image3}></img>
    </div>
    <div className="card">
    <h2>Seasonal Events</h2>
    <img src={image4}></img>
    </div>
    </div>
    </div>
 )
}
export default Ocassion