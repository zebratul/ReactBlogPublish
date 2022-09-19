import React from 'react';
import logo from './logo.png';
import logoMobile from './logo-mobile.png';
import logout from './logout.png';


export default function Head() {
  const currentUser = JSON.parse(localStorage.getItem('user')); //на данный момент есть баг с отрисовкой юзера/логаута. Можно пофиксить редуксом. 
  const handleClick = event => {
    event.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  }
  return(
    <header className='App-header'>
        <div className='App-header-logo'>
            <img src={logo} alt="Logo"/>
            <img src={logoMobile} alt="logo Mobile" id='App-header-logo-mobile'/>
        </div>
        <div className='App-header-user'>
          <div className='App-header-user-username'>{ currentUser ? currentUser.username : '' }</div>
        </div>
        <div className='App-header-logout'>{ currentUser && <a href='#' onClick={handleClick}> <img src={logout} alt='Logout'/> </a>}</div>
    </header>
  );
}
