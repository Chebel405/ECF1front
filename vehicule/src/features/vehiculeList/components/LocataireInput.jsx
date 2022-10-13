import React from 'react'

export const LocataireInput = (props) => {


    return (
        <>
            <div className="container">
                <input value={props.vehicule.id} /><br />
                <input value={props.vehicule.nom} type="text" /><br />
                <input value={props.vehicule.prenom} type="text" /><br />
                <input value={props.vehicule.dateNaissance} type="date" /><br />
                <input value={props.vehicule.tel} type="tel" /><br />
                <input value={props.vehicule.location} type="boolean" /><br />
            </div>

        </>


    )
}
