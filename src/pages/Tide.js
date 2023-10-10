// typping and deleting effect, like tide wave

import React from 'react';
import {Link} from 'react-router-dom'
import Slogan from '../component/Slogan';

import './Tide.css';

class Tide extends React.Component {
    render() {
        return (
            <div className="Tide">
                <div className="Tide-banner">
                    <span>Tides</span>
                    <Slogan />
                </div>
                <div className="Tide-home">
                    <Link to='/'>hub</Link>
                </div>
                
            </div>
            
        );
    }
};

export default Tide;