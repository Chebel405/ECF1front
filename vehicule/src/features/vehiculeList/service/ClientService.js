const URL = 'http://localhost:3000/ClientData';

// findAll = () => {
//     return fetch(url)
//     .then((response) => 
//     response.json())
// }

supprimer = async(id) => { 
    return fetch(`${URL}/${id}`, {
        method:"DELETE",
    }).then((response) => response.json())
}

