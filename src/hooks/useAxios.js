import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios(initialUrl) {
    const [result, setResult] = useState(null);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(false);
            try {
                const res = await axios(url)
                setResult(res.data);
            } catch (error) {
                setError(error.response);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [url]);

    return [{ isLoading, result, error }, setUrl]
}
