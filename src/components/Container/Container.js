import React from 'react'
import { Celular } from '../Pantalla/Celular'
import { Pantalla } from '../Pantalla/Pantalla'
import './Container.scss'



export const Container = () => {
    return (
        <div className="Fondo">

         
        <Celular/>
        <Pantalla/>  
        
        </div>
    )
}
