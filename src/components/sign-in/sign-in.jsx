import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./sign-in.style.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();

    setEmail();
    setPassword();
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setValue({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          defaultValue={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          defaultValue={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign In With Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

// import React from "react";

// import FormInput from "../form-input/form-input";
// import CustomButton from '../custom-button/custom-button';

// import "./sign-in.style.scss";

// class SignIn extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     this.setState({ email: "", password: "" });
//   };

//   handleChange = e => {
//     const { value, name } = e.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onClick={this.handleSubmit}>
//           <FormInput
//             type="email"
//             name="email"
//             value={this.state.email}
//             handleChange={this.handleChange}
//             label="email"
//             required
//           />

//           <FormInput
//             type="password"
//             name="password"
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label="password"
//             required
//           />
//           <CustomButton type="submit"> Sign In </CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignIn;
