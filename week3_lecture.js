let dbuser = [
    {
        username: "tan",
        password: "12344",
        name: "tan jun yan",
        email: "junyantan95@gmail.com"
    },

    {
        username: "nick",
        password: "36554",
        name: "nicolas Sii Ting Kie",
        email: "nickolas@yahoo.com"

    },

    {
        username : "Ho",
        password : "44885",
        name : "Ho Zhe Heng",
        email : "ho334@yahoo.com"
    }
]

function login (requsername, reqpassword){
    let matchuser = dbuser.find (
        user => user.username == requsername
    )
    console.log ()
    if (!matchuser)
        return "invalid username"
    //console.log (matchuser)
    if (matchuser.password == reqpassword)
        return matchuser
    else
        return "Invalid password"

}

function register (Username, Password, Name, Email){
    dbuser.push({
        username: Username,
        password: Password,
        name: Name,
        email: Email
    })

}

/*
same as for (i=0; i<dbuser.length (); i++)
{
    if (requsername == dbuser [i]){
        cout...
    }

}
*/

//try to login
console.log (login ("tan", 12344))
console.log (login ("nick", "36554"))

register ("loong", "1@PPPK", "ngoi yuk loong", "loong77@gmail.my")
console.log (login ("utem", "1@PPPK"))
/*
login ("tan", 12344)
login ("nock", "36554")*/