const jwt = require('jsonwebtoken');
const JWT_SECRET = 'JWTSECRET';

function auth(req, res, next) {
    const token = req.headers.token;
    const validatedData = jwt.verify(token, JWT_SECRET);

    if (validatedData) {
        req.body.email = validatedData.email;
        next();
    } else {
        res.json({
            Message: "Token invalid"
        })
        return
    }
}

module.exports = {
    auth: auth
}