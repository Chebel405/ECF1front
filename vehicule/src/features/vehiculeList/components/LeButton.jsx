import React from 'react'
import { Button } from "primereact/button"

//Méthode réutilisable
export const LeButton = (props) => {

    //La méthode que j'appelle avec le button que j'affiche dans Vehicule 
    const handleClick = (event) => {
        props.handleClick(event)
    }


    return (
        <Button onClick={handleClick}>{props.children}</Button>
    )
}
