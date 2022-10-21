import { VehiculeList } from '../layouts/VehiculeList';
import { VehiculePage } from '../VehiculePage';

    const URL = 'http://localhost:3000/ClientData';


    class ClientService {

      findAll =  () => {
        const res = fetch(URL);
          return res.json();
      };
    
      delete =  (id) => {
        const res = fetch(`${URL}/${id}`, {
              method: "DELETE",
          });
          return res.json();
      };
    
      patch = (id, modification) => {
        const res = fetch(`${URL}/${id}`, {
              method: "PATCH",
              body: JSON.stringify(modification),
              headers: { "Content-Type": "application/json" },
          });
          return res.json();
      };
      
      findById = (id) => {
        const data = fetch(`${URL}/${id}`);
          return  data.json();
      };
    }
    export default ClientService;










