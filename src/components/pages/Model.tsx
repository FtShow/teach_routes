import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


export const Model = () => {
    const params = useParams<{id: any}>()
    console.log(params.id)
    const arr = adidasArr.find(el=> el.id === +params.id)
    console.log(arr)
    return (
        <div>
            <h3>{arr?.model}</h3>
            <span>{arr?.collection}</span>
            <span>{arr?.price}</span>
            <img src={arr?.picture}/>


        </div>
    );
};
