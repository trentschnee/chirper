import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti/index.js";
import { TiHeartOutline } from "react-icons/ti/index.js";
import { TiHeartFullOutline } from "react-icons/ti/index.js";
import { handleToggleTweet } from "../actions/tweets";
class Tweet extends Component {
  handleLike = e => {
    e.preventDefault;
    const { dispatch, tweet, authedUser } = this.props;
    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser
      })
    );
  };
  toParent = (e, id) => {
    e.preventDefault();
    // TODO: redirect to parent tweet.
  };
  render() {
    const { tweet } = this.props;
    console.log(this.props);
    if (tweet === null) {
      return <p>Error</p>;
    }
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent
    } = tweet;
    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onclick={e => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}
// If you pass a companent that you are rendering, the prop will be the second argument.
function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  // gets the parentTweet property and because replyingTo is an id, the parent tweet is one as well
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
}
export default connect(mapStateToProps)(Tweet);
