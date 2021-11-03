import React from "react";
import styled from "styled-components";

import Sponsor from "./Sponsor";
import Contacts from "./Contacts";
import GroupConversation from "./GroupConversation";

const RightSideBarMain = () => {
  return (
    <RightSidebar className="sidebar right-sidebar">
      <div className="right-sidebar-wrapper">
        <Sponsor />
        <div className="line1"></div>
        <Contacts />
        <div className="line2"></div>
        <GroupConversation />
      </div>
    </RightSidebar>
  );
};

const RightSidebar = styled.div`
  text-align: left;
  .line1,
  .line2 {
    width: 100%;
    height: 0.5px;
    background-color: ${(props) => props.theme.lineColor};
    margin: 10px 0;
  }

  .right-sidebar-wrapper {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    width: 100%;
    height: 97vh;
    padding-top: 75px;
    overflow-y: auto;
    overflow-x: hidden;
    border-color: transparent;
    transition: 0.3s linear;

    &:hover {
      border-color: #5e5e5f;
    }

    ::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
      border-right-style: inset;
      border-right-color: inherit;
      border-right-width: 100vh;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      margin-top:70px;
    }
  }
`;
export default RightSideBarMain;
