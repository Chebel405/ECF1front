import { Button } from 'bootstrap';
import React from 'react'
//import { VehiculeData } from '../service/VehiculeData'
import { LeButton } from './LeButton';
import { InputText } from 'primereact/inputtext';



export const Vehicule = (props) => {


    const supprimer = () => {
        return null;
    }

    const ajouter = () => {

    };

    const modifier = () => {

    }
    // const handleChange = event => {
    //     this.setState({ name: event.target.value });
    // }
    // const handleSubmit = event => {
    //     event.preventDefault();
    // }
    return (
        <div className='container' id="greeting">

            {/* <span className="p-float-label">
                <InputText id="in" value={props.vehicule.nom} onChange={this.handleChange} />
                <label htmlFor="in">Username</label>
            </span> */}
            <div className="center">
                <p>{props.vehicule.nom}</p>
                <p>{props.vehicule.prenom}</p>
                <p>{props.vehicule.dateNaissance}</p>
                <p>{props.vehicule.tel}</p>
                <p>{props.vehicule.location}</p>
            </div>

            <LeButton onClick={() => supprimer(props.vehicules.id)} handleClick={supprimer}>Supprimer</LeButton>
            <LeButton onClick={() => ajouter(props.vehicules.id)} handleClick={ajouter}>Ajouter</LeButton>
            <LeButton onClick={() => modifier(props.vehicules.id)} handleClick={modifier}>Modifier</LeButton>
        </div>

    );
};
