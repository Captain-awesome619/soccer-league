import React,{useState} from 'react'
import '../navbar/navbar.scss'
import BrandName from '../brandname/Brandname';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";






 function Navbar() {

return(
  <div className='navbar'>
 <div className="col">
        <BrandName />
        </div>

        <div className="collapseble-button">



</div>

<nav>

<div className="links">
  <ul>
    <li>
     <a href="" className='btn'>Home</a>
         </li>
    <li>
      <a href=""className='btn'>Features</a>
    </li>

    <li>
      <a href="" className='btn'>Download</a>
    </li>
</ul>
</div>
</nav>

  </div>
)

 }
export default Navbar;