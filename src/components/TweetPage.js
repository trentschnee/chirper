import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import { TiArrowRepeatOutline } from "react-icons/ti";
class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map(replyId => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// 1st argument will be authed user, tweets, and users,
// 2nd argument will be props that will be passed to components
function mapStateToProps({ authedUser, tweets, users }, props) {
  const { id } = props.match.params;
  return {
    id,
    // if the replies property doesn't exist, we want an empty array
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
  };
}
export default connect(mapStateToProps)(TweetPage);
