function login (user, password)
{
    if(user == "test@test.com" && password == "pass")
    {
        return true;
    }
    else
    {
        return false;
    }
}


module.exports= login;