import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userValidationRules, validate } from './validator.js';
export const register =
  (userValidationRules(),
  validate,
  (req, res) => {
    const { email, password, username } = req.body;

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
  });

export const login = (req, res) => {};

export const logout = (req, res) => {};
