'use strict'

/* Libraries */
const jwt = require('jsonwebtoken');
const env = require('dotenv').config().parsed;

const authMdl = (req: any, res: any, next: any) => {

	const authHeader = req.headers.authorization;
	
	if (!authHeader)
		return res.status(401).send({ message: 'No token provided' });

	const parts = authHeader.split(' ');

	if (parts.length !== 2)
		return res.status(401).send({ message: 'Token error' });

	const [scheme, token] = parts;

	if (!/^Bearer$/i.test(scheme))
		return res.status(401).send({ message: 'Token malformatted' });

	jwt.verify(token, env.SECRET_KEY, (err: any, decoded: any) => {
		if (err) return res.status(401).send({ message: 'Token invalid' });

		req.userId = decoded.id;


		return next();
	});
};

export default authMdl;
