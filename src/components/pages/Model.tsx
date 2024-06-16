import React from 'react';
import {adidasArr, ItemType} from "./Adidas";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";
import {pumaArr} from "./Puma";

export type crossModelType = {
    adidas: ItemType[],
    puma: ItemType[]
}


const crossModel = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = () => {
    const { model, id } = useParams<{ model: keyof crossModelType; id: string }>();
    const currentModel = model ? crossModel[model] : null
    const arr = currentModel?.find((el: ItemType)=> el.id === Number(id))
   // console.log(arr)
    return (
        <div>
            {arr && <>
            <h3>{arr.model}</h3>
            <span>{arr.collection}</span>
            <span>{arr.price}</span>
            <img src={arr.picture}/></> || <Error404/>}


        </div>
    );
};
