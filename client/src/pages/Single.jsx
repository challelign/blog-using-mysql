import React, { useEffect, useState } from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import DOMPurify from 'dompurify';

const Single = ({match}) => {


  const [post, setPost] = useState([]);
  const location = useLocation()
  const baseApi = 'http://127.0.0.1:8800/api/';
  // const baseApi = 'http://127.0.0.1:8800/api/';
  const postId = location.pathname.split("/")[2]
  useEffect(() =>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${baseApi}posts/${postId}`); 
        setPost(res.data);
      } catch (err) {
        console.log(err)
      }
    }

    fetchData();
  },[postId])



  return (
    <div className='single'>
      <div className='content'>
        <img
          src= {post?.img}
          alt=''
        />
        <div className='user'>
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted 2 day ago</p>
          </div>

          <div className='edit'>
            <Link to={`write?edit=2`}>
              <img src={Edit}></img>
            </Link>
            <img src={Delete}></img>
          </div>
        </div>
        <h1>{post.title}</h1>
        <p>
         
         {post.desc}
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
