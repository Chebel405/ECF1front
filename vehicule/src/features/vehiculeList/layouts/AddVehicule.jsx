import React from 'react';
import { LocataireInput } from "../components/LocataireInput";


export const AddLocataire = (props) => {
    const { newLocataires, setNewLocataires } = useState({

        nom: "",
        prenom: "",
        dateNaissance: "",
        tel: "",
        location: false

    });
    const cle = [{
        nom: "label",
        prenom: "label",
        dateNaissance: "date",
        tel: "tel"

    },
    {
        name: "dateEcheance",
        text: "",
        type: "date"
    }]

    const saveInput = (name, value) => {
        setNewLocataires((previousTodo) => { return { ...previousTodo, [name]: value } })
    }
    const handleClickSave = () => {
        props.addTodo(newLocataires)
    }
    return (
        <>
            <h2>Ajout Locataire</h2>
            <div>
                {cle.map((newLocataire, index) => (<LocataireInput newLocataire={newLocataire} key={index} vehicule={newLocataire} saveInput={saveInput} />))}
            </div>
            <button onClick={handleClickSave}>Ok</button>
        </>
    )

}
