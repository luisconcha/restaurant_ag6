import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';

import {User, users} from '../model/users';
import {apiConfig} from './api-config';

export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body;

    if (isValid(user)) {
        const dbUser = users[user.email];
        const token = jwt.sign({
            sub: dbUser.email,
            iss: 'restaurant-api'
        }, apiConfig.secret);

        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token});
    } else {
        resp.status(403).json({message: 'Invalid data'});
    }
};


function isValid(user: User): boolean {
    if (!user) {
        return false;
    }
    const dbUser = users[user.email];

    return dbUser !== undefined && dbUser.matches(user);
}
