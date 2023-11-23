const database = require("../database")
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const {signature} = require("../config");

class AuthController {
    async signUp(req, res) {
        try {
            const {email, password} = req.body;
            const hashedPassword = await argon2.hash(password)
            const newUser = await database.query(`INSERT INTO users (email, hashed_password) values ($1, $2) RETURNING *`, [email, hashedPassword])
            const generatedJWT = jwt.sign({email}, signature, {expiresIn: '24h'})
            res.json({jwt: generatedJWT, status: 200})
        } catch (e) {
            res.json({status: 500, message: `${e}`})
        }
    }

    async signIn(req, res) {
        try {
            const {email, password} = req.body
            const hashedPassword = await database.query('SELECT hashed_password FROM users WHERE email = $1', [email])
            const verify = await argon2.verify(hashedPassword.rows[0].hashed_password, password)
            if (verify) {
                const generatedJWT = jwt.sign({email}, signature, {expiresIn: '24h'})
                res.json({status: 200, jwt: generatedJWT})
            } else {
                res.json({status: 401})
            }

        } catch (e) {
            res.json({status: 500, message: `${e}`})
        }
    }
}

module.exports = new AuthController()
