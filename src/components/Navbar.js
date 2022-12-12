import React, {useState} from 'react';

function Navbar() {
  const [navig, setNav] = useState(false)
  const handleClick = () => setNav(!navig)

    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#ourCocktails">Our cocktails</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="floatRight"><a href="#about">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;