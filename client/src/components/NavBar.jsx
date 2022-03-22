import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getDogs, sortWeight, sortName} from '../actions';
import  "../CSS/NavBar.css";
import FilterTempe from './FilterTempe';
import Search from './Search';
import FilterExistingBreed from "./FilterExistingBreed";

export default function NavBar(){
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getDogs());
    }, [dispatch]);

    function handleOrdenar(e) {
    e.preventDefault();
    dispatch(sortName(e.target.value));
  }
  function handleOrdenarWeitgh(e) {
    e.preventDefault();
    dispatch(sortWeight(e.target.value));
  }
  
  return(<div>
      
  <div className="filtros">
  
      <div> 
        <FilterTempe /> 
      </div>  
      <div>
      <FilterExistingBreed/>
      </div>
      <div>
        <Search/>
      </div>
      <div>
        <select className="botonfiltro" onChange={e=> handleOrdenarWeitgh(e)}>
            <option value='All'>By Weight</option>
            <option value='small'> Light  </option>
            <option value='big'> Weight  </option>
        </select> 
      </div>  
  
      <div>
        <select className="botonfiltro" onChange={e=> handleOrdenar(e)}>
            <option value='All'>Alphabetically</option>
            <option value='asc'> A a Z  </option>
            <option value='desc'> Z a A  </option>
        </select> 
      </div> 
  </div> 
  </div>
  )
}