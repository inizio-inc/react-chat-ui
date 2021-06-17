"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BubbleGroup_1 = require("../BubbleGroup");
var ChatBubble_1 = require("../ChatBubble");
var styles_1 = require("./styles");
var Message_1 = require("../Message");
var ChatMessages = function (_a) {
    var _b = _a.messages, messages = _b === void 0 ? [] : _b, showSenderName = _a.showSenderName, chatBubble = _a.chatBubble, bubbleStyles = _a.bubbleStyles, isTyping = _a.isTyping, keyExtractor = _a.keyExtractor;
    var ChatBubble = chatBubble || ChatBubble_1.default;
    var group = [];
    var messageNodes = messages.map(function (message, index) {
        group.push(message);
        if (index === messages.length - 1 || messages[index + 1].id !== message.id) {
            var messageGroup = group;
            group = [];
            return (React.createElement(BubbleGroup_1.default, { key: keyExtractor ? keyExtractor(message) : message.id, messages: messageGroup, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, bubbleStyles: bubbleStyles }));
        }
        return null;
    });
    if (isTyping) {
        messageNodes.push(React.createElement("div", { key: "isTyping", style: __assign({}, styles_1.default.chatbubbleWrapper) },
            React.createElement(ChatBubble, { message: new Message_1.default({ id: 1, message: '...', senderName: '' }), bubbleStyles: bubbleStyles })));
    }
    return messageNodes;
};
exports.default = ChatMessages;
//# sourceMappingURL=index.js.map