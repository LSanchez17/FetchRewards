import axios from 'axios';

const _URL = 'https://fetch-hiring.s3.amazonaws.com/hiring.json';

class API{
    static async getData(){
        let data = await axios.get(_URL);
        
        return data.data;
    }
}

export default API;