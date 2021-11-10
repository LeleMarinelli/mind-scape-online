import './NavBar.scss'
// import logo from '../../logoPurple.png';
import { CartWidget } from '../CartWidget/CartWidget';

import { GiAbstract027 } from "react-icons/gi";


export const NavBar = () => {

    return <header className='header'>
    <h1>SoundScape Online</h1> <GiAbstract027 className="LogoMarcaTexto"/>

   
    {/* <img className="topLogo" src={logo} alt="Logo Purple Haze" /> */}
    
    <nav>
        <ul>
            <li><a href="url">Colecciones</a></li>
            <li><a href="url">Shop</a></li>
            <li><a href="url">Help</a></li>
        </ul>
    </nav>

    <CartWidget/>

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
