import {useState, useEffect} from 'react'
export default function useLocalStorage(){
    const [data, setLocalStorage ] = useState([]);
    useEffect(() => {
      setLocalStorage(localStorage);
    })

    return data;
}