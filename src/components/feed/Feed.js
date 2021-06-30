import React from "react";
import styled from "styled-components";
import Story from "./Story";
import PostNewFeed from "./PostNewFeed";
import CreateRoom from "./CreateRoom";
import NewPost from "./NewPost";

const Feed = () => {
  return (
    <FeedWrapper className="feed-wrapper">
      <section className="story-section">
        <Story />
      </section>
      <section className="post-new-feed-section">
        <PostNewFeed />
      </section>
      <section className="create-room">
        <CreateRoom />
      </section>
      <section className="new-feed">
        <NewPost />
      </section>
    </FeedWrapper>
  );
};
const FeedWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 0 50px;
  .story-section {
    display: flex;
    justify-content: center;
    min-width: 470px;
    max-width: 680px;
    margin: 0 auto;
  }
  .post-new-feed-section {
    max-width: 500px;
    margin: 0 auto;
  }
  .create-room {
    max-width: 500px;
    margin: 0 auto;
  }
  .new-feed {
    max-width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 610px) {
    padding: 0;
    .story-section {
      min-width: auto;
    }
  }

  @media (min-height: 700px) {
    .post-new-feed-section {
      max-width: 680px;
    }
    .create-room {
      max-width: 680px;
    }
    .new-feed {
      max-width: 680px;
    }
  }

  @media (max-width: 350px) {
    .story-section {
      display: none;
    }
    .post-new-feed-section {
      max-width: 88vw;
      margin: 0;

      .post-new-feed-section2 {
        grid-template-columns: repeat(2, 1fr);
      }
      .post-new-feed-section2-3 {
        display: none;
      }
    }
    .create-room {
      display: none;
      max-width: 88vw;
      margin: 0;
    }
    .new-feed {
      max-width: 88vw;
      margin: 0;
    }

    .write-comment-item2 {
      .icons {
        display: none !important;
      }
    }
  }
`;
export default Feed;
