import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl = 'https://my-json-server.typicode.com/tractian/fake-api'

export function useFetch<T = unknown>(path: string){
    const [data, setData] = useState<T | null>(null);
    
    
    useEffect(() => {
        axios.get(baseUrl + path)
            .then(response => {
                setData(response.data);
            })
        }, [baseUrl, path]);

    return {data};

};


    
