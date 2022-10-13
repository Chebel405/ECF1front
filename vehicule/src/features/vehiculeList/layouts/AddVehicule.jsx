

export const AddLocataire = (props) => {
    const { newLocataires, setNewLocataires } = useState({


    });

    return (
        <>
            <h2>Ajout Locataire</h2>
            {newLocataires.map((newLocataire, index) => { return <Vehicule key={index} vehicule={vehicule} supprimer={supprimer} ajouter={ajouter} /> })}
        </>
    )

}
