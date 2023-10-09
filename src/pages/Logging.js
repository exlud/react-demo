import React, { useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './Logging.css';
import RoleContext from '../component/Role'

const cookies = new Cookies();

async function validateAs(pin) {
    return fetch('http://localhost:8091/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pin)
    }).then(data => data.json());
}

function Logging() {

    const [pin, setPin] = useState();
  
    const nav = useNavigate();
    
    const { logged , setLogged} = useContext(RoleContext);

    const handleSubmit = async e => {
      e.preventDefault();
      const ret = await validateAs({pin});
      if(ret.name === "" || ret.access.length === 0) {
        alert("Can not validate your identity");
        return;
      }

      var premises = [];
      for(let item in ret.access) {
        premises.push(ret.access[item]);
      }

      cookies.set('user', ret.name, { path: '/', 'sameSite': 'none', 'secure': 'true'});
      cookies.set('premises', premises.join(";"), { path: '/', 'sameSite': 'none', 'secure': 'true' });
      setLogged(true);
      nav('/lab');
    }
  
    return(
        <div className="Login-wrapper">
          <form onSubmit={handleSubmit}>
            <label>
              <p className="Login-text">pin code</p>
              <input type="password" onChange={e => setPin(e.target.value)}/>
            </label>
            <div className="Login-submit-wrapper">
              <button className="Login-submit-btn" type="submit">Go</button>
            </div>
          </form>
        </div>
    );
}

export default Logging;