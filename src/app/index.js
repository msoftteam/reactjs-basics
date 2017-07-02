import React from "react";
import { render } from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {

  render() {
    return (
      // <Root>
      //   <Home></Home>
      // </Root>

      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"user/:id"} component={User} />
          <Route path={"home"} component={Home} />
        </Route>
        <Route path={"home-single"} component={Home} />
      </Router>
    );
  }

  /*
  constructor() {
      super();
      this.state = {
        homeLink: "Home",
        homeMounted: true
      };
  }

  onGreet() {
    alert("Hello@");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = (
        <Home
          name={"Max"}
          initialAge={25}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1nn0 col-xs-offset-1">
            {homeCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1nn0 col-xs-offset-1">
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
  */
}

render(<App />, window.document.getElementById("app"));
