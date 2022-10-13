import React from 'react'
import { ClientData } from '../service/ClientData'
import { useState } from 'react'
import { Vehicule } from '../components/Vehicule'

export const VehiculeList = () => {

    const [vehicules, setVehicules] = useState(ClientData)
    const [vehiculeAdd, setVehiculeAdd] = useState();
    //   const [Clients, setClients] = useState < Clients[ClientData] > ([]);


    /**
     * 
     * @param {*} id methode de la suppression de locataire. Filre les locateires si l'id est le mm 
     * de celui qu'il veut supprimer.  
     */
    const supprimer = (id) => {
        const supprimer = vehicules.filter((vehicule) => vehicule.id !== id);
        setVehicules(supprimer);
        // setVehicules((vehicules) => { return vehicules.filter(vehicule => vehicule.id !== id) })
    }
    /**
     * 
     * @param {*} modification //Création d'une listTemporaires qui va prendre le contenu des locataires avec map.
     *  Si l'id du locataire correspond à l'id modifier on remplace d'une listTemporaires. 
     */
    const modifier = (modification) => {
        const listTemporaires = vehicules.map(vehicule => vehicule.id === modification.id ? modification : vehicule)
        setVehicules(listTemporaires);
    }
    /**
     * Méthod Ajouter Location à ajouter
     */
    const ajouter = (newLocation) => {
        setVehicules((vehicules) => { return [...vehicules, newLocation] })
        setVehiculeAdd((value) => !value);

    }

    return (
        <>
            <h1>Gestion Locataire</h1>

            {vehicules.map((vehicule, index) => { return <Vehicule key={index} vehicule={vehicule} supprimer={supprimer} ajouter={ajouter} modifier={modifier} /> })}

        </>
    )



}
