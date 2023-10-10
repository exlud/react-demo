import React from 'react';
import MdRenderer from '../component/MdRender';
import '../App.css';

class Md extends React.Component {
    render() {
        return (
            <div className='App-header'>
                <MdRenderer url="http://localhost:3001/sequenceFlow.md"/>
            </div>
        );
    };
};

export default Md;