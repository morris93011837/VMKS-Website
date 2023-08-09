import { useState, useEffect } from 'react';
import { MaterialType } from './MaterialType';



const useFetchMaterial = (url:string) => {
    const [data, setData] = useState<MaterialType|null>(null);
    const [isPending, setIsPending] = useState(true);
    
  
    useEffect(() => {
        fetch(url)
        .then(res => {
          if (!res.ok) { 
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
        })
        .catch(err => {
          setIsPending(false);

        })
      }, [url])

      console.log("success fetch");
    return { data, isPending };
  }
 
export default useFetchMaterial;