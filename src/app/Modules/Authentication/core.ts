import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import database from '../../../database';
dotenv.config();

export const cryptPassword = async (password: string) => bcrypt.hash(password, 10);

export const generateToken = (params: any) => {
  return jwt.sign({ params }, `${process.env.SECRET_KEY}`, {
    expiresIn: 86400,
  });
};

export const getTokenData = (token: string) => {}; // TODO: Write the method to unmount the token data

export const validateAccess = async (user: { email: string, password: string }): Promise<any> => {
  const { email, password } = user;
  const access = await database.user.findUnique({
    where: { email: email.toLocaleLowerCase() },
  });

  if (!access) {
    return false;
  }

  if (!(await bcrypt.compare(password, access.password))) {
    return false;
  }

  return { 
    access,
    token: generateToken({ id: access.id }),
  };
};
