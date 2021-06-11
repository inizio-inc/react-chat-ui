import React, { FC } from 'react';
import DefaultChatBubble from "../ChatBubble";
import BubbleGroup from "../BubbleGroup";
import styles from "./styles";
import Message from "../Message";

// Model for ChatMessages props.
interface ChatMessagesInterface {
  bubblesCentered?: boolean;
  bubbleStyles?: object;
  hasInputField?: boolean;
  isTyping?: boolean;
  maxHeight?: number;
  messages: any;
  showSenderName?: boolean;
  chatBubble?: React.Component;
}

const ChatMessages: FC<ChatMessagesInterface> = ({
  messages,
  showSenderName,
  chatBubble,
  bubbleStyles,
  isTyping
}) => {
  const ChatBubble = chatBubble || DefaultChatBubble;

  let group = [];

  const messageNodes = messages.map((message, index) => {
    group.push(message);
    // Find diff in message type or no more messages
    if (index === messages.length - 1 || messages[index + 1].id !== message.id) {
      const messageGroup = group;
      group = [];
      return (
        <BubbleGroup
          key={index}
          messages={messageGroup}
          id={message.id}
          showSenderName={showSenderName}
          chatBubble={ChatBubble}
          bubbleStyles={bubbleStyles}
        />
      );
    }

    return null;
  });

  // Other end is typing...
  if (isTyping) {
    messageNodes.push(
      <div key="isTyping" style={{ ...styles.chatbubbleWrapper }}>
        <ChatBubble
          message={new Message({ id: 1, message: '...', senderName: '' })}
          bubbleStyles={bubbleStyles}
        />
      </div>
    );
  }

  // return nodes
  return messageNodes;
};

export default ChatMessages;
