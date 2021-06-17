import * as React from 'react';
import Message from "../Message";
interface ChatMessagesInterface {
    bubblesCentered?: boolean;
    bubbleStyles?: object;
    hasInputField?: boolean;
    isTyping?: boolean;
    maxHeight?: number;
    messages: any;
    showSenderName?: boolean;
    chatBubble?: React.Component;
    keyExtractor?: (item: Message) => string;
}
declare const ChatMessages: ({ messages, showSenderName, chatBubble, bubbleStyles, isTyping, keyExtractor }: ChatMessagesInterface) => any;
export default ChatMessages;
