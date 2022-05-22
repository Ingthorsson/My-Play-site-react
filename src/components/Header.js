import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {

  const { pathname } = useLocation();

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  })

  const [location, setLocation] = useState('/')
  const [disabled, setDisabled] = useState(false);

  //useEffect for page changes
  useEffect(() => {
    if (location !== pathname) {
      setLocation(pathname)
      setState({clicked: false, menuName: "Menu"})
    }
  },[pathname, location])

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setLocation('/')
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "close"
      });
    }
  }

  // if disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  }

  return <header>
    <div className='container'>
      <div className='wrapper'>
        <div className='inner-header'>
          <div className='logo'>
            <Link to='/'>PLAY.</Link>
          </div>
          <div className='menu'>
            <button disabled={disabled} onClick={handleMenu} >menu</button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state} />

  </header>;
};

export default Header;