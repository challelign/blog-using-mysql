import React, { useEffect, useState } from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import DOMPurify from 'dompurify';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <div className='user'>
          <div className='info'>
            <span>Chalie</span>
            <p>Posted 2 day ago</p>
          </div>

          <div className='edit'>
            <Link to={`write?edit=2`}>
              <img src={Edit}></img>
            </Link>
            <img src={Delete}></img>
          </div>
        </div>
        <h1>this is para</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          officiis sint officia suscipit ratione rerum voluptate iusto non sit
          tempora minima, quisquam quod ea sed consequatur sequi. Ea, dicta
          quam!
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
