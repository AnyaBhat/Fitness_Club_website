import axios from 'axios'
export const exerciseOptions =  {
  method: 'GET',
  params: {limit: '100'},
  headers: {

    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  }
};


export const youtubeOptions = {
  method: 'GET',
  params: {limit: '20'},
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,

  }
};


export const fetchData = async (url, Options) => {
  const response = await axios.get(url, Options); 
  console.log(response) // to fetch url
  //const data = await response.json();          // to extract

  return response;
}