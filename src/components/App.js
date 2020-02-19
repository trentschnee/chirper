import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
class App extends Component {
  // When this component mounts.. we want to dispatch the invocation of our
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <TweetPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
        )}
      </div>
    );
  }
}
// Render Dashboard only when the data from handleInitialData is finished.
function mapStateToProps({ authedUser }) {
  //if the authed user is null, make the looking to true.
  return { loading: authedUser === null };
}

export default connect(mapStateToProps)(App);
