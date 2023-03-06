import { useEffect, useState } from "react";
import axios from 'axios';

export function useFetch(url){
    const [loading, setLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async() =>{
            try{
                const response = await axios.get(url);
                console.log("response", response);
                const data = response?.data;
                setApiData(data);
                setLoading(false);
            } catch(error){
                setServerError(error);
                setLoading(false);
            }
            
        };
        fetchData();
    }, [url]);

    return [loading, apiData, serverError];
}