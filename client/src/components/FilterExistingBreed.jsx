import { React } from "react";
import { useDispatch } from "react-redux";
import {  filterExistingBreed } from "../actions/";



export default function FilterExistingBreed() {
  const dispatch = useDispatch();

  const handlefilterExistingBreed=(e)=>{
    e.preventDefault();
    dispatch(filterExistingBreed(e.target.value))
  }
  

  return (
    <div >
        <div>
            <select className="botonfiltro" 
            onChange={e=> handlefilterExistingBreed(e)}>
                <option value="todo">All Existing Breed</option>
                <option value="db" >Existing Breed DB</option>
                <option value="api" >Existing Breed API</option>
              
            </select>
        </div> 
    </div>
  );
}