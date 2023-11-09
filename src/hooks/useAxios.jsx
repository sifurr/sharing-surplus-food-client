import axios from "axios";

const instance = axios.create({
    // vercel production link
    // https://b8a11-server-side-sifurr.vercel.app
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true,
    
  });
        
const useAxios = () => {
    return instance;
};

export default useAxios;