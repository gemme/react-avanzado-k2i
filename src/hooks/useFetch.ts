import { useState, useEffect } from 'react';
/*
{
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  }
*/

interface UseFetchProps{
    url: string; 
    options?: Record<string, unknown>;
}

export const useFetch = <R = Record<string, unknown>>({ url, options = {}}: UseFetchProps) => {
    // props.url
    // props.options
    //const { url, options } = props;

    const [data, setData] = useState<R>();

    const fetchData = async (url: string, options: Record<string, unknown>) => {
        try{
            if(options){
                options.headers = {
                    ...(options.headers ?? {}),
                    "Content-Type": "application/json",
                };
            }
            const response = await fetch(url, options);
            if(response.ok){
                const data = await response.json();
                setData(data);
                return;
          }
        } catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchData(url, options);
    }, [url, options]);


    return {
        data
    };
}