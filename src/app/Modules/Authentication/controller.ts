import { ILogin } from './interface';
import { getUserByEmail } from '../Users/core';
import { validateAccess } from './core';

export const login = async (request: { body: ILogin }, response: any) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).send({
          error:
            'Missing e-mail or password data. Please fill all the form fields and try again or contact support.',
        });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return response.status(401).send({ message: 'User not registered' });
    }

    const validatedAccess = await validateAccess({ email, password });
    if (!validatedAccess) {
      return response.status(401).send({ message: 'Email or password incorrect' });
    }

    return response.send(validatedAccess);
  } catch(err) {
    return response.status(500).send({ message: 'Error to login' });
  }
};