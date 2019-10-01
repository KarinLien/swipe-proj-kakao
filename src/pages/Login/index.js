import React from "react";

/*------------------------ */
import Layout from "../../components/Layout";
import "./style.css";

class Login extends React.Component {
  state = { email: "", password: "", login: false };
  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = async () => {
    const { email, password } = this.state;
    const port = "2999";
    const data = await fetch(`http://127.0.0.1:${port}/api/post/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(res => res.json())
      .then(json => json);
    this.setState({
      login: data.login,
      email: "",
      password: ""
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Layout>
        <h4>Login</h4>
        <div id="formAdd">
          <form>
            <div className="form-box">
              <div className="form-div">
                <label>email:</label>
                <input
                  type="email"
                  name="email"
                  id="emailId-login"
                  value={email}
                  onChange={this.onchange}
                />
              </div>
              <div className="form-div">
                <label>password:</label>
                <input
                  type="password"
                  name="password"
                  id="passwordId-login"
                  value={password}
                  onChange={this.onchange}
                />
              </div>
              <div className="btn-submit" onClick={this.submit}>
                <span>SUBMIT</span>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}
export default Login;
