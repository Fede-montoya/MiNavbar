import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem]= useState ([]);
    const {id} = useParams();

    useEffect(() => {

        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'productos', id);
    
        getDoc(queryDoc)
          .then((r) => setItem({ id: r.id, ...r.data() }))
          .catch((error) => {
            console.log(error);
          })
    
      }, [id]);
    return (
    <div>
       <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer