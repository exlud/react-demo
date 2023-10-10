// the hub page to list demos

import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'

class Hub extends React.Component {
    render() {
        return (
            <>
                <div className='App-header'>
                    <p>
                        demo links
                    </p>
                    <Link to='/tide'>tide effect of typping</Link>
                    <Link to='/md'> md fetch and render</Link>
                    <Link to='/lab/solna'> routing with parameter</Link>
                    <Link to='/lab/tallinn'> routing with parameter</Link>
                </div>
            </>
            
            
        );
    }
};

export default Hub;