const JWT = require("jsonwebtoken");
const privateKey = "root";


async function getJwtToken(req, res){

    const payload = {
        userid: "cliente",
        exp: Date.now() + (1800 * 1000) // 30 segundos

    };

    const tokenJwt = await JWT.sign(payload, privateKey, {algorithm: "HS256"});

    res.status(200).json({
        jwt:tokenJwt
    })

}

async function verifyToken(req,res,next){
    const authHeader = req.headers.authorization;

    if (authHeader){
        const authToken = authHeader.replace("Bearer ","").replace("bearer ","")
        console.log(authHeader)
        console.log(authToken)

        try {
            await JWT.verify(authToken,privateKey)
            next();
        } catch (error) {
            res.status(401).send("Bad Credentials")
        }
    }else{
        res.status(401).send("Bad Credentials")
    }


}

module.exports = {
    getJwtToken,
    verifyToken
}