import React from 'react'
import { useState, useEffect } from 'react'
// import { Vehicule } from '../components/Vehicule'
// import { ClientService } from '../service/ClientService'
// import { AddVehicule } from '../layouts/AddVehicule'
// import { VehiculePage } from '../VehiculePage'



export const VehiculeList = () => {
    const [filtre, setFiltre] = useState()


    return (
        <>
            <h1>Gestion Locataire</h1>

            <input name="name" type="text" placeholder />
            <button >Valider</button>

            {/* {vehicules.map((vehicule, index) => { return <Vehicule key={index} /> })} */}


        </>
    )



}
