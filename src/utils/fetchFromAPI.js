import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

const options = {
    
    params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key': '33aced3dfcmsh82edf85d35bf3aep1e3710jsn6c619bed4cdf',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }
