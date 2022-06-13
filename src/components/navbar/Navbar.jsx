import React,{useState} from 'react'
import '../navbar/navbar.scss'
import BrandName from '../brandname/Brandname';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";






 function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };



return(
  <div className={`navbar ${toggleNavbar === true ? "active" : ""}`} >


 <div className="col">
        <BrandName className="brand" />
        <div className="collapseble-button">
        {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
</div>
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