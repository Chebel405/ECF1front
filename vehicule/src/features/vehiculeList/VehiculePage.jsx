import React from 'react';
import { useState, useEffect } from 'react';
import ClientService from './service/ClientService';
import { ClientData } from './service/ClientData';

export const VehiculePage = () => {
    return
    const [vehicules, setVehicules] = useState()
    const [vehiculeAdds, setVehiculeAdds] = useState()
    const [Clients, setClients] = useState < Clients[ClientData] > ([]);

    useEffect(() => {
        setClients(ClientData);
    }, [])

    const findAllVehicule = () => {
        ClientService.findAll()
            .then(data => setVehicules(data))
    }

    const deleteVehicules = (id) => {
        ClientService.delete(id)
            .then(() => findAllVehicule())
    }


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
    const modifier = (id, modification) => {
        // const listTemporaires = vehicules.map(vehicule => vehicule.id === modification.id ? modification : vehicule)
        // setVehicules(listTemporaires);
        ClientService.path(id, modification)
            .then(() => findAllVehicule());
    }
    /**
     * Méthod Ajouter Location à ajouter
     */
    const ajouter = (newLocation) => {
        setVehicules((vehicules) => { return [...vehicules, newLocation] })
        setVehiculeAdds((value) => !value);

    }
    return (
        <>
            {Clients.map(({ id, nom, prenom, dateNaissance, tel, location }) => (
                <div className="center">
                    <p> key={id}  {prenom}</p>
                    <p></p>
                    <p>{dateNaissance}</p>
                    <p>{tel}</p>
                    <p>{location}</p>
                </div>
            ))};
            {/* <VehiculeList vehicules={vehicules}
                modifier={modifier}
                deleteVehicules={deleteVehicules}
            />
            <button onClick={() => setVehiculeAdds((value) => !value)}>ajouter</button>
            {vehiculeAdds && <AddLocataire ajouter={ajouter} />} */}
        </>

    )


}