import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from '../requests';

export default function Auth() {
  const [profile, setProfile] = useState({password:"", login:"" });
  const navigate = useNavigate();

  const handleSubmit = async (event) => { //логика проверки логина/пароля
    event.preventDefault();
    const users = await fetchData('users');
    const validUser = users.find(user => (user.email === profile.login && user.username === profile.password));
    if (validUser) {
      localStorage.setItem("user", JSON.stringify(validUser));
      navigate('/', {replace: true});
      // window.location.reload(); вариант костыля для обновления хэдера
    } else {
      alert('Wrong username or password')
    }
  };

  const handleChange = ({ target }) => { //перезаписываем в стейт текущий набранный пароль/логин для будущего сравнения
    const { name, value } = target;
      setProfile ((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    };
    
  return (
    <div className='Login-container'>
      <div id='Auth-text'><b>Authorization</b></div>
      <form className='Input-container' onSubmit={handleSubmit}>
        <div id='Login-input'>
          <div><b>login</b></div>
          <input id='lgn' type="text" name="login" required onChange={handleChange}></input>
        </div>
        <div id='Password-input'>
          <div><b>password</b></div>
          <input id='pass' type="password" name="password" required onChange={handleChange}></input>
        </div>
        <div id='Auth-submit-btn'>
          <button id='btn' type="submit"><b>Submit</b></button>
        </div>
      </form>
    </div>
  )
};
