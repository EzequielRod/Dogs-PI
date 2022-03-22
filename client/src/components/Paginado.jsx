import React from "react";
import "../CSS/paginado.css";

export default function Paginado({dogsPage, allDogs, paginado}){
    const pageNumber=[];
    for (let i=0; i< Math.ceil(allDogs/dogsPage); i++){
        pageNumber.push(i+1);
    }
    

    return (
        <div >
            <div className="paginado9">
                {pageNumber.length >1 && pageNumber.map((number)=> {
                return (
                    <ul key= {number}>
                        <button className="botonPaginado" onClick={()=> paginado(number)}>
                            {number}
                        </button>
                    </ul>
            
                )
            })}
            </div>
        </div>
    )
}