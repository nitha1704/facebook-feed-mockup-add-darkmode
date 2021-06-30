import React from "react";
import styled from "styled-components";

const PostNewFeed = () => {
  return (
    <PostNewFeedWrapper className="post-new-feed-wrapper">
      <div className="post-new-feed-section1">
        <div className="wrap-thumbnail">
          <img
            src="./images/story/1.jpg"
            alt="thumbnail"
            className="thumbnail"
          />
        </div>
        <div className="wrap-button">
          <span className="post-new-feed-button">
            What's on your mind, Nitha?
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="post-new-feed-section2">
        <div className="post-new-feed-section2-1 item">
          <div className="wrap-item">
            <div className="new-feed-icon">
              <div className="wrap-icon">
                <div className="icon live-video"></div>
              </div>
            </div>
            <div className="new-feed-text">Live Video</div>
          </div>
        </div>
        <div className="post-new-feed-section2-2 item">
          <div className="wrap-item">
            <div className="new-feed-icon">
              <div className="wrap-icon">
                <div className="icon photo-video"></div>
              </div>
            </div>
            <div className="new-feed-text">Photo/Video</div>
          </div>
        </div>
        <div className="post-new-feed-section2-3 item">
          <div className="wrap-item">
            <div className="new-feed-icon">
              <div className="wrap-icon">
                <div className="icon feeling-activity"></div>
              </div>
            </div>
            <div className="new-feed-text">Feeling/Activity</div>
          </div>
        </div>
      </div>
    </PostNewFeedWrapper>
  );
};
const PostNewFeedWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor2};
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 25px;

  .post-new-feed-section1 {
    display: flex;
    align-items: center;
    gap: 10px;
    .wrap-thumbnail {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .wrap-button {
      background: ${(props) => props.theme.navbarSearchBackgroundColor};
      padding: 8px 20px 8px 10px;
      width: 100%;
      border-radius: 25px;
      cursor: pointer;
      span {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        font-size: 1.0625rem;
        color: ${(props) => props.theme.navbarSearchTextColor};
      }
    }
  }

  .line {
    width: 100%;
    height: 0.5px;
    background-color: ${(props) => props.theme.lineColor};
    margin: 10px 0 7px 0;
  }

  .post-new-feed-section2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;

    .item {
      width: 100%;
      transition: 0.2s ease;
      padding: 7px 0;
      border-radius: 15px;
      &:hover {
        background-color: ${(props) => props.theme.hoverItemBackground};
      }
      .wrap-item {
        cursor: pointer;
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: center;
        gap: 7px;
      }
    }
    .wrap-icon {
      .icon {
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        display: inline-block;
        position: relative;
        top: 3px;
      }
      .icon.live-video {
        background-image: url("./images/shortcut-images/all_background4.png");
        background-position: 0 -84px;
        background-size: 50px 514px;
      }
      .icon.photo-video {
        background-image: url("./images/shortcut-images/all_background4.png");
        background-position: 0 -396px;
        background-size: 50px 514px;
      }
      .icon.feeling-activity {
        background-image: url("./images/shortcut-images/all_background4.png");
        background-position: 0 -266px;
        background-size: 50px 514px;
      }
    }
    .new-feed-text {
      font-size: 0.87rem;
      font-weight: 600;
      color: ${(props) => props.theme.titleTextColor};
    }
  }

  @media (max-width: 350px) {
    margin-top: -5px;
  }
`;
export default PostNewFeed;
