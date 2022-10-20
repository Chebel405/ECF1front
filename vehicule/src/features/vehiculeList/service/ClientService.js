import { VehiculeList } from '../layouts/VehiculeList';

    const URL = 'http://localhost:3000/ClientData';


    class ClientService {
      findAll = async () => {
        const res = await fetch(URL);
          return res.json();
      };
    
      delete = async (id) => {
        const res = await fetch(`${URL}/${id}`, {
              method: "DELETE",
          });
          return res.json();
      };
    
      patch = async (id, element) => {
        const res = await fetch(`${URL}/${id}`, {
              method: "PATCH",
              body: JSON.stringify(element),
              headers: { "Content-Type": "application/json" },
          });
          return res.json();
      };
      findById = async (id) => {
        const data = await fetch(`${URL}/${id}`);
          return await data.json();
      };
    }










