const jwt = require("jsonwebtoken");

function login (user, password, res)
{
    if(user == "test@test.com" && password == "pass")
    {
        const token = jwt.sign({user: user},process.env.JWT_SIGN_SECRET ,
        {
            expiresIn: "60s"
        }
        );
        return {
            message:"Success",
            token: token
        };
    }
    else
    {
        return false;
    }
}


module.exports= login;