import React from 'react'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'



export const LocataireInput = (props) => {
    const [state, setstate] = useState()

    const handleChange = (e) => {
        props.saveInput(props.newLocataire, e.target.value)
    }


    return
    <>
        <form onSubmit={handleChange} className="form-horizontal" onKeyPress={handleChange} />
        <input value={props.newLocataire.id} onChange={e => handleChange(e)} /><br />
        <input value={props.vehicule.nom} type="text" onChange={e => handleChange(e)} /><br />
        <input value={props.vehicule.prenom} type="text" onChange={e => handleChange(e)} /><br />
        <input value={props.vehicule.dateNaissance} type="date" onChange={e => handleChange(e)} /><br />
        <input value={props.vehicule.tel} type="tel" onChange={e => handleChange(e)} /><br />
        <input value={props.vehicule.location} type="boolean" onChange={e => handleChange(e)} /><br />
        <button type="submit" onClick={e => handleChange(e)} />
        <form />
    </>





}
