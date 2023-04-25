import { db } from '../db.js';

export const getPosts = (req, res) => {
    // if their is cat in req body cat=art
    const q = req.query.cat ? "SELECT * FROM posts where cat=?":"SELECT * FROM posts";
    db.query(q, [req.query.cat] , (err, data) =>{
        if(err) return res.send(err);
        return res.status(200).json(data)
    })
}
export const getPost = (req, res) => {
    // console.log('This is new post getPost')
//    const q = "SELECT `username`,`title`,`desc`,p.img,u.img AS userImg,`date`,`cat`, FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?"
   const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";


   db.query(q, [req.params.id], (err, data)=>{
    if (err) return res.json(err);
    return res.status(200).json(data[0]);

   })
    
}

export const addPost = (req, res) => {
    res.json("from controller")
  
  }
export const deletePost = (req, res) => {
    res.json("from controller")
}
export const updatePost = (req, res) => {
    res.json("from controller")
}
