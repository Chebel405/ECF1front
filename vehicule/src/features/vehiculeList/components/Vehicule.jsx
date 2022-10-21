import { Button } from 'bootstrap';
import React from 'react'
//import { VehiculeData } from '../service/VehiculeData'
import { LeButton } from './LeButton';
import { InputText } from 'primereact/inputtext';
import '../../../../src/vehicule.css';
import { useState } from 'react';



export const Vehicule = (props) => {



    return (
        <div className='container' id="greeting">

            <div className="center">
                <p>{props.vehicule.nom}  {props.vehicule.prenom}</p>
                <p></p>
                <p>{props.vehicule.dateNaissance}</p>
                <p>{props.vehicule.tel}</p>
                <p>{props.vehicule.location}</p>
            </div>

            <LeButton onClick={() => supprimer(props.vehicules)} handleClick={supprimer}>Supprimer</LeButton>
            <LeButton onClick={() => ajouter(props.vehicules)} handleClick={ajouter}>Ajouter</LeButton>
            <LeButton onClick={() => modifier(props.vehicules)} handleClick={modifier}>Modifier</LeButton>
        </div>

    );
};
