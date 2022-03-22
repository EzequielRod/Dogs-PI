import React from 'react';
import {Link} from 'react-router-dom';
import  '../CSS/LandingPage.css';


export default function LandingPage(){
    return (
    
        <div id='justificado'>

            <div>
                <h1 className='title'>Meet your new best friend</h1>
                <Link to ='/home'>
                    <button className='boton'> Start </button>
                </Link>
            </div>
            <div className="imaLoading">
                <img src="https://i.pinimg.com/originals/83/23/61/83236186c07e9ee1d3ac6094209f5cb0.gif" alt='Doy say Hi'/>
            </div>
        </div>
    )
}