import React from 'react';

export default function Post(props) {
      return(
        <section className='Post'>
          <div className='Post-photo'>
            <img src={props.photoSrc} alt={props.photoAlt} width="150" height="150"/>
          </div>          
          <div className='Post-author' >
            <b>Author: {props.name}</b>
            <p><b>Company: {props.companyName}</b></p>
          </div>
          <div className='Post-title'>
            <b>Title: {props.title}</b>
          </div>
          <div className='Post-body'>
            <b>{props.body}</b>
          </div>
        </section>
      );
};
  