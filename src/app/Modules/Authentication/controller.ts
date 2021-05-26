import { ILogin } from './interface';
import { getUserByEmail } from '../Users/core';

export const store = async (request: { body: ILogin }, response: any) => {
  const { email, password } = request.body;
  if (!email || !password) {
      return response.status(400).send({
        error:
          'Missing e-mail or password data. Please fill all the form fields and try again or contact support.',
      });
  }

  const user = await getUserByEmail(email);
  console.log(user);
  if (!user) {
    
  }

  return response.send({});
};