import * as React from 'react';
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
export default class ChatFeed extends React.Component {
    props: any;
    chat: {
        scrollHeight: number;
        clientHeight: number;
        scrollTop: number;
    };
    constructor(props: ChatFeedInterface);
    componentDidMount(): void;
    componentDidUpdate(): void;
    scrollToBottom(): void;
    renderMessages(): any;
    render(): any;
}
export {};
