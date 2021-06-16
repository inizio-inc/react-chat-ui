// Copyright 2017 Brandon Mowat
// Written, developed, and designed by Brandon Mowat for the purpose of helping
// other developers make chat interfaces.

import * as React from 'react';
import ChatInput from '../ChatInput';
import styles from './styles';
import ChatMessages from "../ChatMessages";

// Model for ChatFeed props.
interface ChatFeedInterface {
  props: {
    bubblesCentered?: boolean;
    bubbleStyles?: object;
    hasInputField?: boolean;
    isTyping?: boolean;
    maxHeight?: number;
    messages: any;
    showSenderName?: boolean;
    chatBubble?: React.Component;
    MessagesComponent?: React.Component;
    isScrollToBottomEnabled?: boolean;
  };
}

// React component to render a complete chat feed
export default class ChatFeed extends React.Component {
  props;
  chat: {
    scrollHeight: number;
    clientHeight: number;
    scrollTop: number;
  };

  constructor(props: ChatFeedInterface) {
    super(props);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    // Dont scroll to bottom when for example we fetching info by scrolling in reverse order
    if (!this.props.isScrollToBottomEnabled) return;

    const scrollHeight = this.chat.scrollHeight;
    const height = this.chat.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  /**
   * Determines what type of message/messages to render.
   */
  renderMessages() {
    const { MessagesComponent } = this.props;

    if (MessagesComponent) {

      return MessagesComponent;
    }

    return (
      <div className="chat-messages">
        <ChatMessages
          {...this.props}
        />
      </div>
    )
  }

  /**
   * render : renders our chatfeed
   */
  render() {
    const inputField = this.props.hasInputField && <ChatInput />;
    const { maxHeight } = this.props;

    return (
      <div id="chat-panel" style={styles.chatPanel}>
        <div
          ref={c => {
            this.chat = c;
          }}
          className="chat-history"
          style={{ ...styles.chatHistory, maxHeight }}
        >
          {this.renderMessages()}
        </div>
        {inputField}
      </div>
    );
  }
}
