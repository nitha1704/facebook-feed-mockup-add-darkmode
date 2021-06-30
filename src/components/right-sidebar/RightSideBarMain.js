import React from "react";
import styled from "styled-components";

import Sponsor from './Sponsor';
import Contacts from './Contacts';
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
  padding-left: 20px;
  .line1,
  .line2 {
    width: 100%;
    height: 0.5px;
    background-color: ${(props) => props.theme.lineColor};
    margin: 10px 0;
  }
`;
export default RightSideBarMain;
