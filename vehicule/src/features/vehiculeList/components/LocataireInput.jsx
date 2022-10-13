import React from 'react'
import { InputText } from 'primereact/inputtext'

export const LocataireInput = (props) => {

    const handleChange = (e) => {
        props.saveInput(props.newLocataire.name, e.target.value)
    }
    //A REVOIR L.14 
    return (
        <>
            <div className="container">
                <InputText value={props.vehicule[props.newLocataire.nom]} prenom={props.newLocataire.prenom} dateNaissance={props.newLocataire.dateNaissance} tel={props.newLocataire.tel} onChange={e => handleChange(e)} /><br />
                {/* <input value={props.vehicule.nom} type="text" /><br />
                <input value={props.vehicule.prenom} type="text" /><br />
                <input value={props.vehicule.dateNaissance} type="date" /><br />
                <input value={props.vehicule.tel} type="tel" /><br />
                <input value={props.vehicule.location} type="boolean" /><br /> */}
            </div>
        </>


    )
}
