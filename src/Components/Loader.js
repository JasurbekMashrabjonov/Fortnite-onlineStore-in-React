import React from 'react';
import "../styles/Loader.css";
function Loader(props) {
    return (
        <div className='loader'>
          <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
        </div>
    );
}

export default Loader;