const jwt = require('jsonwebtoken')
//access-token
const verifyToken = (req, res, next) => {
    const token = req.header('access-token')
    if (!token) return res.status(401).json({ error: '¡Lo sentimos!, pero no tiene permisos para acceder a esta ruta.' })
    try {
        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified
        next() 
    } catch (error) {
        res.status(400).json({ error: 'El token no es válido' })
    }
}
module.exports = verifyToken;