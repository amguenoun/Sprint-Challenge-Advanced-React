import axios from 'axios';

import useLocalStorage from './useLocalStorage';

const useAxios = (url) => {
    const [data, setData] = useLocalStorage('data', [])

    axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.log('Error: Axios: ', error))

    return [data];
}

export default useAxios;