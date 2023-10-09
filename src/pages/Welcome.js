import React from 'react';
import Slogan from '../component/Slogan';
import PortalBtn from '../component/PortalBtn';

import './Welcome.css';

class Welcome extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <PortalBtn text='enter'/>
                <div className="Welcome-banner">
                    <span>eDevOps</span>
                    <Slogan />
                </div>
            </div>
        );
    }
};

export default Welcome;