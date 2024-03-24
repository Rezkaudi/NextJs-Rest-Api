import jwt from 'jsonwebtoken';

const SECRET_KEY = "jkb4jk3b5m,43b5nj4hf89uydzsickhbjb4r43ui7fy6fgjfb43jh4384";


// Replace with your own secret key

export const generateToken = (payload) => {
   return jwt.sign(payload, SECRET_KEY, { expiresIn: '10m' });
};

export const verifyToken = (token) => {
   try {
      return jwt.verify(token, SECRET_KEY);
   } catch (error) {
      return null;
   }
};
