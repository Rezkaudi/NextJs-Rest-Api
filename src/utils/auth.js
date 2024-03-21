import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const SECRET_KEY = uuidv4();


// Replace with your own secret key

export const generateToken = (payload) => {
   return jwt.sign(payload, SECRET_KEY, { expiresIn: '2m' });
};

export const verifyToken = (token) => {
   try {
      return jwt.verify(token, SECRET_KEY);
   } catch (error) {
      return null;
   }
};
