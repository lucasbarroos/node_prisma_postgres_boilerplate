import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const cryptPassword = async (password) => bcrypt.hash(password, 10);

export const generateToken = (params: any) => {

};

export const getTokenData = (token: string) => {

};

export const validateToken = (user: { email: string, password: string }, token: string) => {

};

export const validatePassword = () => {

};