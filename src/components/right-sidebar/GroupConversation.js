import React from "react";
import styled from "styled-components";

const GroupConversation = () => {
  return (
    <GroupConversationWrapper className="group-conversation">
      <h3>Group Conversations</h3>
      <div className="group-conversation-item1">
        <div className="wrap-icon">
          <div className="icon"></div>
        </div>
        <span className="create-new-group">Create New Group</span>
      </div>
    </GroupConversationWrapper>
  );
};

const GroupConversationWrapper = styled.div`
  h3 {
    font-size: 1.0625rem;
    font-family: inherit;
    font-weight: 600;
    color: ${(props) => props.theme.titleTextColor};
    padding-left: 8px;
  }
  .group-conversation-item1 {
    display: flex;
    align-items: center;
    transition: 0.1s ease;
    padding: 5px 8px;
    margin-top: 10px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.hoverItemBackground};
    }
    .wrap-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #303031;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      margin-right: 12px;
      .icon {
        background-image: url("./images/shortcut-images/all_background3.png");
        background-position: 1px -494px;
        background-size: 28px 800px;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        display: inline-block;
        filter: invert(89%);
      }
    }
    .create-new-group {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;
export default GroupConversation;
