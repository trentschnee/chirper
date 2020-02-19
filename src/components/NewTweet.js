import React, { Component } from "react";
// Need access to dispatch so we invoke connect
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
class NewTweet extends Component {
  // Using react state because it'd be more complicated and we wouldn't getting any benefit using redux state.
  state = {
    text: ""
  };
  handleChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;
    dispatch(handleAddTweet(text, id));
    //when done submitting, set the text to an empty string.
    this.setState(() => ({ text: "" }));
  };
  render() {
    const { text } = this.state;
    {
      /* TODO: Redirect to homeview if submitted*/
    }
    const tweetLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button className="btn" type="submit" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(NewTweet);
