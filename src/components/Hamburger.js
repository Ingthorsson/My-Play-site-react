import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import {
  staggerText,
  staggerReveal,
  staggerRevealClose,
  fadeInUp,
  handleHover,
  handleHoverExit
} from './Animations';


const Hamburger = ({ state }) => {

  // ars for ouranimated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close the menu
      staggerRevealClose(revealMenu, revealMenuBackground);

      gsap.to(menu, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menu, { duration: 0, css: { display: "block" } });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state])


  return (
    <div ref={el => (menu = el)} className='hamburger-menu'>
      <div ref={el => (revealMenuBackground = el)} className='menu-secondary-background-color'></div>
      <div ref={el => (revealMenu = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/giphy'>
                      Giphy
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/messages'>
                      Messages
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Our Promise</h3>
                <p>
                  Nunc quis venenatis mauris. Nullam molestie, tortor eget volutpat ultrices, lacus velit 
                  condimentum massa, at aliquet nisi tellus eget mauris. Donec luctus quam nibh, et mollis 
                  felis vulputate vitae. Donec tempus mattis sapien, blandit viverra velit dignissim sed.
                   Curabitur sed est consequat, feugiat nunc a, rutrum neque. Aliquam eleifend leo vitae nisi 
                   vehicula facilisis. Donec lacus sem, placerat ut pulvinar in, scelerisque sit amet nisl. 
                   Aliquam erat volutpat. Nullam felis sem, convallis vel varius nec, commodo quis dui. 
                   Integer vel pretium tortor, eu mattis turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;