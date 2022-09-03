import React from 'react'
import { useGContext } from './Context';

const Navbar = (props) => {

    const {colorr, hanclick, navstyle} = useGContext()

      const darkMode = {
        backgroundColor: colorr ? "rgb(34, 38, 44)" : "#ffffff",
      };
    
    
    
  return (
    <div style={navstyle} className='nav'><h1>Notes</h1>
     <div className="mode">
        <div className="lightt">
          <p style={{color: 'white'}} className="light">
            Light
          </p>
          <div style={darkMode}  className="mode-circle">
            {colorr ? (
              <div onClick={hanclick} className="lightmode"></div>
            ) : (
              <div onClick={hanclick} className="darkmode"></div>
            )}
          </div>
          <p style={{color: 'white'}} className="dark">
            Dark
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar