import './NavBar.scss'
// import logo from '../../logoPurple.png';
// import { CartWidget } from '../CartWidget/CartWidget';

import { GiAbstract027 } from "react-icons/gi";
import { GiRaining } from "react-icons/gi";
import { GiWaveCrest } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { GiTreeBranch } from "react-icons/gi";
import { GiAbstract054 } from "react-icons/gi";

export const NavBar = () => {

    return <header className='header'>
    <h1>SoundScape Online</h1> <GiAbstract027 className="LogoMarcaTexto"/>


    <nav>
        <ul>
            <li><a href="url"><GiRaining /></a></li>
            <li><a href="url"><GiWaveCrest /></a></li>
            <li><a href="url"><GiCampfire /></a></li>
            <li><a href="url"><GiTreeBranch /></a></li>
            <li><a href="url"><GiAbstract054 /></a></li>
        </ul>
    </nav>

    {/* <CartWidget/> */}

    </header>
}


// GiAbstract048
// GiAbstract054
// GiAbstract084


// //ICONOS PRINCIPALES
// GiAlgae
// GiWaveCrest
// GiTreeBranch
// GiTreeBeehive

// //FIRE
// GiCampfire
// GiFireRing
// GiFireGem

// //VIENTO
// GiFlowerTwirl


// GiSteelDoor

// GiBarbedCoil

// GiMushroomGills
// GiMushrooms
