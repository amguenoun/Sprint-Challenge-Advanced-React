import { useState } from 'react';
import axios from 'axios';

const useAxios = (link) => {
    const [url, setUrl] = useState(link);

    const [data, setData] = useState(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log('Error: Axios: ', error))
    })

    return [data, setUrl];
}

export default useAxios;