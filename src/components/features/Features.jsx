import React from 'react'
import "../features/features.scss"
import Title from '../Title/Title';
import phone from "../../assets/phoneimage3.png"
import {SiPremierleague} from 'react-icons/si'
import {GiTrophy, GiLaurelsTrophy} from 'react-icons/gi'
import {AiFillTrophy} from 'react-icons/ai'
import {IoMdTrophy} from 'react-icons/io'
import {RiTrophyFill} from 'react-icons/ri'
import phone2 from '../../assets/phoneimage1.png'



function Features(){
return(
<section>
<div className='title'>
<Title />
</div>
<div className='section'>
<div className='section1'>
</div>


<div className='text'>
        <div className='header'><h2>Many cups and leagues</h2></div>
<div className='items'>
<SiPremierleague className='icon'/>Premier league</div>
<div className='items'>
<GiTrophy className='icon'/>Champions league</div>
<div className='items'>
< GiLaurelsTrophy className='icon'/>Europa league</div>
<div className='items'>
<AiFillTrophy className='icon'/>Bundesliga</div>
<div className='items'>
<IoMdTrophy className='icon'/>Seria A</div>
<div className='items'>
<RiTrophyFill className='icon'/>Ligue 1</div>

</div>

</div>
<div className='features'>
        <div className='feat'>
<div className='outline'>
        <h2>Own Team</h2>
        Create your own fantasy team
</div>
<div className='outline'>
        <h2>live points</h2>
        Get points when the players score in real life
</div>
<div className='outline'>
        <h2>Real time play</h2>
        Compete against friends far and wid and win
</div>
        </div>
        <div className='section2'>
        </div>



</div>





        </section>
)
}

export default Features;
