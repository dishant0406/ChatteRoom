import React from 'react'
import {Link} from 'react-router-dom'
import {registerValidate} from '../../../Functions/ValidateForm'
import ReactTooltip from 'react-tooltip';
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { getActions } from '../../../store/actions/authActions';



const RegisterPage = ({register}) => {
  const [mail, setMail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [valid, setValid] = React.useState(false);
  const history = useHistory()

  React.useEffect(() => {
    
    if(registerValidate(mail, password, username)) {
      setValid(true);
    }else{
      setValid(false);
    }


  }, [mail, password,username, setValid])

  const handleRegister = (e)=>{
    e.preventDefault();
    const userDetails = {
      mail, password, username
    }

    register(userDetails, history)
  }

  return (
    <div className="loginwrapper">
      <h1>Hi.. Let's Start!</h1>
      <p>Register Here!</p>
      <form> 
        <input type="text" placeholder="*Enter Username..." value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder="*Enter Email..." value={mail} onChange={(e)=>setMail(e.target.value)}/>
        <input type="password" placeholder="*Password...(At least 6 characters)" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
      {valid && <button className='isvalid' onClick={handleRegister}>SignUp </button>}
      {!valid && 
      <><a href='!#' data-tip="React-tooltip"><button className="btn-not-valid" disabled>SignUp</button></a>
      <ReactTooltip place="top" effect="solid" type="dark">
      <span>Form Details are not valid!</span>
      </ReactTooltip>
      </>}
      </form>
      <div className="not-member">
        Already a member? <Link to='/login'>Login Now</Link>
      </div>
    </div>
  )
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null,mapActionsToProps)(RegisterPage)