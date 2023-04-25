import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userValidation } from './validationjoi.js';

export const register = (req, res) => {
  // const result = req.body;
  const { email, password, username } = req.body;
  let { err } = userValidation(req.body);
  if (err) {
    return res.status(400).send(err.details[0].message);
  }

  try {
    //CHECK EXISTING USER
    const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

    db.query(q, [email, username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json('User already exists!');

      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const q = 'INSERT INTO users(`username`,`email`,`password`) VALUES (?)';
      const values = [username, email, hash];

      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json('User has been created.');
      });
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error', err.message);
  }
};

export const login = (req, res) => {
  // check if User exists
  const q = 'SELECT * FROM users WHERE username = ?';
  const { username } = req.body;
  db.query(q, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json('User not found');
    // check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json('Wrong username or password');

    const token = jwt.sign({ id: data[0].id }, 'jwtkey');
    const { password, ...other } = data[0];
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};
