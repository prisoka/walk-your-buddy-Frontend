import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../redux/actions/userActions'
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    email:'',
    password:'',
  }

  submitLoginForm = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const { userLogin, history } = this.props

    const userLoginIn = {
      email: email,
      password: password
    }
    userLogin(userLoginIn, history)
  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value,
  })

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Login to access your WYB account.</p>
              <div className="box">
                <form
                  onSubmit={(e) => this.submitLoginForm(e)}
                >
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        id='login_email-field'
                        name='email'
                        className="input"
                        type="email"
                        placeholder="Email"
                        onChange={this.onChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left">
                      <input
                        id='login_password-field'
                        name='password'
                        className="input"
                        type="password"
                        placeholder="Password"
                        onChange={this.onChange}
                        required
                      />
                      <span className="icon is-small is-left">
                      <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <input
                        id="login_submit-form"
                        type='submit'
                        className="button is-primary is-rounded"
                        value="Login"
                      />
                    </p>
                  </div>
                </form>
              </div>
              <p className="has-text-grey">
                First time? Click here to &nbsp;
                <Link to='/signup'>Signup</Link> <br/>
                Or here to &nbsp;
                <Link to='/walkersignup'>Become A Walker</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)
