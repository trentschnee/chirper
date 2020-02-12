import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIds.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// Going to take the state of our store
function mapStatetoProps({ tweets }) {
  // Return an object that has a tweetsIds property on it and sort it by timestamps
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
}
export default connect(mapStatetoProps)(Dashboard);
