import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  //   Prevent Default acctions of the form
  handleSubmit = (event) => {
    event.preventDefeult();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    // pull the value and name of the target element
    const { value, name } = event.target;
    // Dynamically set state of the name. If name == password
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>

        </form>
      </div>
    );
  }
}

export default SignIn;
