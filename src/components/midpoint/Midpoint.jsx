import React from "react";
import "./midpoint.scss"
import Getdownload from "../getDownload/Getdownload";


function Midpoint () {
  return (
    <div className="contain">

<div className='stat2'>
        <div className="cta2">
            <h3 className='download2'>DOWNLOAD</h3>
            <h4 className='super2'>Enter your mobile number and we'll send you the download link</h4>
        </div>
<div className='form2'>
<select className='btns1b'>
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
    <input className='input1b' type='text' placeholder='input your id'></input>
</form>
<button type='submit2' className='btns2'>submit</button>
</div>
        </div>
<Getdownload/>





    </div>
  )
}

export default Midpoint