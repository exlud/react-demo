// show how to pass routing wildcard
import React from 'react';
import { useParams } from "react-router-dom";
import MdRenderer from '../component/MdRender';
import '../App.css'

function Lab () {
    let { site } = useParams();
    const uri = "http://localhost:3001/" + site + ".md";

    return (
        <div className='App-header'>
            <MdRenderer url={uri}/>
        </div>
    );

};

export default Lab;