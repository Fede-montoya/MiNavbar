import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../CartContext/CartContext';
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {

    const [item, setItem]= useState ([]);
    const {id} = useParams();

    useEffect(() => {
       
        const queryDb = getFirestore();
        const queryCollect = collection(queryDb, 'productos');
  
        let queryFilter;
  
        if (id) {
          queryFilter = query(queryCollect, where('categoryId', '==', id));
        }
  
      const fetchData = async () => {
        try {
          const result = id ? await getDocs(queryFilter) : await getDocs(queryCollect);
          setItem(result.docs.map((p) => ({ id: p.id, ...p.data() })));
        }catch (error) {
          console.error("ERROR", error);
        } 
        };
        setTimeout(() => {
          fetchData();
        }, 1500);
  
      }, [id]);
  
    
return (
    <div className='container'>
        <div className='row'>

            <ItemList item={item}/>

     </div>
    </div>
  )
}

export default ItemListContainer