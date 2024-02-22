import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com'

// backup_api_key = "ddbff3a4ebmshd927dd941c4fad8p12382ajsn8ddfe2d296f5"

const options = {
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': "d30018e47dmsh8875922a7122ff5p15acbfjsn4dfe415aec18",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchAPIData = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }