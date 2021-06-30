import React from "react";
import styled from "styled-components";

// Components
import LeftSideBar from "../components/left-sidebar/LeftSideBarMain";
import RightSideBar from "../components/right-sidebar/RightSideBarMain";
import Feed from "../components/feed/Feed";
import NewMessage from "../components/NewMessage";
import DarkModeButton from "../components/DarkModeButton";

const Home = () => {
  return (
    <HomeSection className="home-section">
      <WrapHome className="wrap-home-content">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </WrapHome>
      <NewMessage />
      <DarkModeButton />
    </HomeSection>
  );
};

const HomeSection = styled.section`
  display: block;
  @media (min-width: 1921px) {
    display: flex !important;
    justify-content: center !important;
  }
`;

const WrapHome = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 70px 10px 10px 10px;
`;

export default Home;
