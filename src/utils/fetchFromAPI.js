import axios from "axios";
import { Await } from "react-router-dom";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
      //'16cd4eb8c1msh717b6640dbb625fp166932jsn94586cb5adde'

      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };