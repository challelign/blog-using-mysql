import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react"; 
import DOMPurify from "dompurify";

const Single = () => {
  
 

  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          
          <div className="info">
            <span></span>
            <p>Posted</p>
          </div>
          
        </div>
        <h1>this is para</h1>
        <p ></p>      </div>
    </div>
  );
};

export default Single;
