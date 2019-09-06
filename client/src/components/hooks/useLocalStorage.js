import { useState } from 'react';

const useLocalStrorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const updateValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
    }

    return [storedValue, updateValue];
}

export default useLocalStrorage;