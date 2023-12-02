import axios from "axios";
import {useState,useEffect} from "react";

const useFetch = (endpoint, query) => {
    const [isLoading, setIsloading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
          'X-RapidAPI-Key': "0f705a3767msh38a339d6f969bc7p103405jsn4daeaf57fc41",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
          setIsloading(true);
          try {
              const response = await axios.request(options);
              setData(response.data.data);
              setIsloading(false);
          } catch (error) {
              setError(error);
              alert('There is an error');
          } finally {
            setIsloading(false);
          }
      }

      useEffect(()=>{
          fetchData();
      },[]);
      const refetch = () => {
          setIsloading(true);
          fetchData();
      }
      return {data, isLoading, error, refetch}
}

export default useFetch;