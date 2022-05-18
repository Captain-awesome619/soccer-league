import  React from 'react'
import Navbar from '../navbar/Navbar'
import '../starter/starter.scss'
import img1 from '../../assets/phoneimage5.png'
import img2 from '../../assets/project1.png'
import {AiFillApple} from 'react-icons/ai'
import {IoLogoGooglePlaystore} from 'react-icons/io5'

 export default function Starter() {
return(
    <div className="starter">
        <Navbar />
        <div className='stat'>
        <div className="cta">
            <h3 className='download'>DOWNLOAD</h3>
            <h2 className='super'>SUPER SOCCER LEAGUE</h2>
        </div>
<div className='form'>
<select className='btns1'>
    <option value='select a country'>country</option>
    <option value='us'>USA</option>
    <option value='us'>BRAZIL</option>
    <option value='us'>NIGERIA</option>
    <option value='us'>CANADA</option>
    <option value='us'>SOUTH-AFRICA</option>
    <option value='us'>ENGLND</option>
    <option value='us'>GHANA</option>
    <option value='us'>GERMANY</option>
    <option value='us'>FRANCE</option>
</select>
<form>
    <input className='input1' type='text' placeholder='input your id'></input>
</form>
<button type='submit' className='btns2'>submit</button>
</div>
        </div>
<div className='images'>
       <div className='player'> <img   src={img2}></img></div>
     <div className='phone' > <img  src={img1}></img></div>

     </div>
     <div
className='ctaa'>
<div className='button1'><IoLogoGooglePlaystore />Playstore </div>
<div className='button2'><AiFillApple/>App Store</div>

 </div>
    </div>

)
}