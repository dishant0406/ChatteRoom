const User = require('../../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postLogin = async (req, res) => {
  // router code here

  try {

    //getting mail and password from the req body
    const { mail, password } = req.body;

    //find user with the same email as req body
    const user = await User.findOne({ mail: mail.toLowerCase() });

    //if user exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      //send new token
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

      //send response to the user
      return res.status(200).json({
        userDetails: {
          token,
          mail: user.mail,
          username: user.username,
          _id: user._id
        }
      })
    }

    //if no user find
    return res.status(400).send('Wrond credentials. Please Try Again!')

  }
  catch (err) {
    return res.status(500).send(err)
  }
}

module.exports = postLogin