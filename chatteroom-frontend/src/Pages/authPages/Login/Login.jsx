import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import ReactTooltip from 'react-tooltip';
import {loginValidate} from '../../../Functions/ValidateForm'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { getActions } from '../../../store/actions/authActions';


const LoginPage = ({login}) => {
  const [mail, setMail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [valid, setValid] = React.useState(false);
  const history = useHistory()

  React.useEffect(() => {
    
    if(loginValidate(mail, password)) {
      setValid(true);
    }else{
      setValid(false);
    }


  }, [mail, password, setValid])
  
  const handleLogin = (e)=>{
    e.preventDefault();
    const userDetails = {
      mail, password,
    }

    login(userDetails, history)


  }


  return (
    <div className="loginwrapper">
      <h1>Welcome Again!</h1>
      <p>Login Here!</p>
      <form >
        <input type="text" placeholder="*Enter Email..." value={mail} onChange={(e)=>setMail(e.target.value)}/>
        <input type="password" placeholder="*Password..." value={password} onChange={(e)=>setPassword(e.target.value)}/>
      {valid && <button className='isvalid' onClick={handleLogin}>Signin</button>}
      {!valid && <><a href='!#' data-tip="React-tooltip"><button className="btn-not-valid" disabled>Signin</button></a>
      <ReactTooltip place="top" effect="solid" type="dark">
      <span>Form Details are not valid!</span>
      </ReactTooltip>
      </>}
      
      </form>
      <div className="not-member">
        Not a member? <Link to='/register'>Register Now</Link>
      </div>
    </div>
  )
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null,mapActionsToProps)(LoginPage)