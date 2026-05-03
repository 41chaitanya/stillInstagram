import jwt from 'jsonwebtoken'
import {ENV} from '../config/env.js'

export const generatejwt=(payload)=>{
    return jwt.sign(payload,ENV.JWT_SECRET, {expiresIn:"1h"});
    //Returning the token
}