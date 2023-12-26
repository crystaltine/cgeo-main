import React from 'react';
import '../styles/general/Menubar.css';
import { loggedIn, logOut } from '../utils';

import logo from '../assets/logo.png';
const hamburger_menu_threshold = 1300;
const links = [
  {
    name: 'Contest',
    url: '/contest'
  },
  {
    name: 'Arena',
    url: '/arena'
  },
  {
    name: 'Leaderboard',
    url: '/leaderboard'
  },
  {
    name: 'Past Tournaments',
    url: '/archive'
  },
  {
    name: 'About',
    url: '/about'
  },
];

interface MenubarProps {
	selected?: string;
	displayName?: string;
}

/**
 * - `selected: string` the name of the selected page, used to highlight the selected page in the menu bar
 * - `displayName: string` the display name of the user, used to display the user's name in the menu bar
 */
const Menubar = (props: MenubarProps) => {

  // If logged in, this is stored in localStorage
  const userDisplayName = loggedIn() && localStorage.getItem('displayName');

  const menuBarRef = React.useRef(null);
  const burgerListRef = React.useRef(null);
  
  const [useBurger, setUseBurger] = React.useState(window.innerWidth <= hamburger_menu_threshold);
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  React.useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= hamburger_menu_threshold && !useBurger) {
        setUseBurger(true);
      } else if (window.innerWidth > hamburger_menu_threshold && useBurger) {
        setUseBurger(false);
        setHamburgerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [useBurger]);

  return (
    /*window.innerWidth > hamburger_menu_threshold*/1===1?
      /* Regular menu bar */
      <header className='menu-bar noburger' ref={menuBarRef}>
        
        <div className='menu-left'>

          <a href='/' className='menu-logo'>
            <img src={logo} alt='logo' className='menu-logo-img' />
            Computer Game Engine Olympiad
          </a>

          <nav className='menu-middle'>

            {links.map((link, index) => {
              return (
                <a 
                href={link.url} 
                key={index} 
                className={`menu-link ${(props.selected === link.name)? 'hover-underline-selected' : ''}`}>
                  {link.name}
                </a>
              );
            })}

          </nav>
        </div>

        <div className='menu-right'>
          {loggedIn()?
            <div className='menu-right-loggedin'>
              <a href='/account' className='menu-right-account-link'>
                {userDisplayName || props.displayName}
              </a>
              <button className='button-danger button-medium min-width-max-content' onClick={() => logOut()}>Log out</button>
            </div> :

            <div className='flex-row flex-gap-10px align-center'>
              <a href='/account/register' className='text-decoration-none text-black'>
                <button className='button-primary button-medium'>Get Started</button>
              </a>
            </div>}
        </div>

      </header> :

      /* Hamburger menu bar */
      <header className='menu-bar yesburger' ref={menuBarRef} style={{backgroundColor: hamburgerOpen? 'rgb(16, 16, 17)' : undefined}}>

        <a href='/' className='menu-logo-hamburger'>
          <img src={logo} alt='logo' className='menu-logo-img-hamburger' />
          <span className='menu-logo-vanishable-name'>Computer Game Engine Olympiad</span>
        </a>

        <div 
        className='hamburger-icon-container'
        style={{backgroundColor: hamburgerOpen? '#8884' : undefined}}
        onClick={() => setHamburgerOpen(!hamburgerOpen)}>

          <img src={hamburgerOpen? require('../assets/icons/close.png') : require('../assets/icons/menu_burger.png')} alt='menu' className='hamburger-icon-img' />

        </div>

        <div ref={burgerListRef} className='hamburger-menu-list' style={{display: hamburgerOpen? 'flex' : 'none'}}>

          {links.map((link, index) => {

            return (
              <a className='menuburger-link' href={link.url} key={index}>
                {link.name}
              </a>
            )
            
          })}

          {loggedIn()?
            <>
              <a href='/account' className='menuburger-link'>Account</a>
              <div className='hml-logout-button-container'>
                <button className='width-100 button-danger button-medium font-size-18px' onClick={() => logOut()}>Log out</button>
              </div>
            </> :
            <>
              <a href='/account/login' className='menuburger-link'>Log In</a>
              <a href='/account/register' className='menuburger-link'>Create Account</a>
            </>
          }

        </div>

      </header>
  );
};

export default Menubar;