import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/homepage";
import ShopPage from "./pages/Shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// function App() {
//   const [currentUser, setCurrentUser] = React.useState('');

//   const componentDidMount = () => {
//     auth.onAuthStateChanged(user => {
//       setCurrentUser({ currentUser: user });

//       console.log(user);
//     });
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/signin" component={SignInAndSignUp} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
