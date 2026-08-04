import { fetchGraphql } from '../utils/fetchGraphql';
import { useState, useEffect } from 'react';

interface UseFetchGraphqlProps{
    url: string,
    query: string,
    variables: Record<string, unknown>,
    headers: Record<string, unknown>
};

export const useFetchGraphql = <T = Record<string, unknown>>({
    url,
    query,
    variables,
    headers
}: UseFetchGraphqlProps) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function executeFetch(){
            setLoading(true);
            setError('');
            try{
                const result = await fetchGraphql(url, query, variables, headers);
                setData(result);
            } catch(error){
                setError(error instanceof Error ? error.message : 'Error fetching');
            } finally {
                setLoading(false);
            }
        }
        executeFetch();
    }, []);

    return { data, error, loading };
}