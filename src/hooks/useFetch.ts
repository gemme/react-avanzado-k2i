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
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (url: string, options: Record<string, unknown>) => {
        setLoading(true);
        setError('');
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
                await (new Promise(resolve => setTimeout(resolve, 5000)));
                setData(data);
            } else {
                setError(`Request failed: ${response.status}`);
            }
        } catch(err){
            setError(err instanceof Error ? err.message : 'Request failed');
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        console.log('useEffect', url, options);
        fetchData(url, options);
    }, [url]);


    return {
        data,
        error,
        loading
    };
}