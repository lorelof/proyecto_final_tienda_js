import { crearCards } from "./main.js";

fetch('js/data.json')        
        .then(res=>res.json())
        .then(products=>crearCards(products));