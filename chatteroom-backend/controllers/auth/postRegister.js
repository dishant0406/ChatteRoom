
const bcrypt = require('bcryptjs');
const User = require('../../models/user')
const jwt = require('jsonwebtoken')

const postRegister = async (req, res) => {
  // router code here
  try {

    //getting detail from body
    const { username, mail, password } = req.body;

    //checking if user already exists
    const userExists = await User.exists({ mail })

    //if user exists then return 
    if (userExists) {
      return res.status(409).send("E-mail already in use")
    }

    //if user does not exists

    //encrypt password
    const encryptPassword = await bcrypt.hash(password, 10);

    //create user document and save in database
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptPassword
    })

    //create jwt token
    const token = jwt.sign(
      {
        userId: user._id,
        mail
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: '24h'
      }
    )

    //send details to user
    res.status(201).json({
      userDetails: {
        mail: user.mail,
        username: user.username,
        token: token,
        _id: user._id
      }
    })
  }
  catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = postRegister