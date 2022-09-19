import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { fetchData } from '../requests';
import Post from './post';

export default function Blog() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({});
  const [postData, setPostData] = useState({});
  const [photosData, setPhotosData] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  useEffect( () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCurrentUser(user);
  }, [location]);
  
  useEffect( () => {
     const getUserAccs = async () => {  //загрузка листа юзеров
      const data = await fetchData('users');
      setUserData(data);
    }; 
    getUserAccs();
  
    const getPosts = async () => {  //загрузка листа постов
      const data = await fetchData('posts')
      setPostData(data);
    }; 
    getPosts();
  
    const getPhotos = async () => {  //загрузка листа постов
      const data = await fetchData('photos');
      setPhotosData(data);
    }; 
    getPhotos();
   
    },[location]);

  useEffect( () => { //обновление статуса загрузки когда получили дату с бэкенда
    if (Object.keys(photosData).length !== 0) {
      setIsLoading(false);
    }
  },[userData,postData,photosData, location]); 

  if (!currentUser) {
    navigate('/login', {replace: true});
  }

  return( //отрисовка постов
    <div className='Posts-container'>
      {isLoading ? <h1>loading...</h1> : (userData.map((user) => 
      <Post name={user.name}
      companyName={user.company.name}
      title={postData.find(el => el.userId === user.id).title} 
      body={postData.find(el => el.userId === user.id).body}
      photoSrc={photosData.find(el => el.albumId === user.id).thumbnailUrl}
      photoAlt={photosData.find(el => el.albumId === user.id).title}
      key={postData.find(el => el.userId === user.id).id}
      />))}
    </div>
    )
}
