import { useEffect, useState } from "react";
import axios from 'axios';
import {v4 as uuid} from "uuid";

const useAxios = (baseURL) => {
    const [cards, setCards] = useState([]);

    
    const addCard = async (name = "") => {
        const response = await axios.get(`${baseURL}${name}`)
        setCards(data => [...data, {...response.data, id:uuid()}])
    };
    
    return [cards, addCard]
    

//     const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };
}

export default useAxios;