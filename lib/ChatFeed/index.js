"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ChatInput_1 = require("../ChatInput");
var styles_1 = require("./styles");
var ChatMessages_1 = require("../ChatMessages");
var ChatFeed = (function (_super) {
    __extends(ChatFeed, _super);
    function ChatFeed(props) {
        return _super.call(this, props) || this;
    }
    ChatFeed.prototype.componentDidMount = function () {
        this.scrollToBottom();
    };
    ChatFeed.prototype.componentDidUpdate = function () {
        this.scrollToBottom();
    };
    ChatFeed.prototype.scrollToBottom = function () {
        if (!this.props.isScrollToBottomEnabled)
            return;
        var scrollHeight = this.chat.scrollHeight;
        var height = this.chat.clientHeight;
        var maxScrollTop = scrollHeight - height;
        this.chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };
    ChatFeed.prototype.renderMessages = function () {
        var MessagesComponent = this.props.MessagesComponent;
        if (MessagesComponent) {
            return MessagesComponent;
        }
        return (React.createElement("div", { className: "chat-messages" },
            React.createElement(ChatMessages_1.default, __assign({}, this.props))));
    };
    ChatFeed.prototype.render = function () {
        var _this = this;
        var inputField = this.props.hasInputField && React.createElement(ChatInput_1.default, null);
        var maxHeight = this.props.maxHeight;
        return (React.createElement("div", { id: "chat-panel", style: styles_1.default.chatPanel },
            React.createElement("div", { ref: function (c) {
                    _this.chat = c;
                }, className: "chat-history", style: __assign({}, styles_1.default.chatHistory, { maxHeight: maxHeight }) }, this.renderMessages()),
            inputField));
    };
    return ChatFeed;
}(React.Component));
exports.default = ChatFeed;
//# sourceMappingURL=index.js.map