import React from "react";
import styled from "styled-components";

const NewPost = () => {
  return (
    <NewPostWrapper className="new-post-wrapper">
      <div className="header main">
        <div className="header-item1 wrap-thumbnail">
          <img
            src="./images/user-thumbnail/12.jpg"
            alt="post-thumbnail"
            className="post-thumbnail"
          />
        </div>
        <div className="header-item2">
          <div className="publisher-name">เกมถูกบอกด้วย v.2</div>
          <span className="block"></span>
          <div className="wrap-published-date">
            <div className="published-date">Yesterday at 4:50 PM</div>
            <span className="dot">·</span>
            <span className="icon"></span>
          </div>
        </div>
        <div className="header-item3">
          <div className="wrap-icon">
            <span className="icon"></span>
          </div>
        </div>
      </div>
      <div className="description main">
        <p>
          [News] ผู้พัฒนาประกาศถอดระบบ Crossplay บน PC ของ Overcooked! 2
          เป็นการชั่วคราว เพื่อแก้ไขปัญหาต่างๆ ที่เกิดขึ้น
          <br />
          . <br />
          Ghost Town Games Ltd. และ Team17 ได้ร่วมกันประกาศว่า ด้วยปัญหาต่างๆ
          ที่เกิดขึ้นในระบบ Crossplay หรือระบบการเล่นข้ามแพลตฟอร์มระหว่าง Steam
          และ … <span className="see-more">See More</span>
        </p>
      </div>
      <div className="post-image main">
        <div className="wrap-image">
          <img src="./images/post-image/overcooked.jpg" alt="" className="" />
        </div>
      </div>
      <div className="like-section1 main">
        <div className="like-section1-1">
          <span className="like-button">
            <img src="./images/facebook-icons/like-button.svg" alt="" />
          </span>
          <span className="like-total">3.8K</span>
        </div>
        <div className="like-section1-2">
          <span className="comment">318 Comments</span>
          <span className="share">447 Shares</span>
        </div>
      </div>
      <div className="like-section2 main">
        <div className="wrapper">
          <div className="item">
            <span className="icon like"></span>
            <span className="text">Like</span>
          </div>
          <div className="item">
            <span className="icon comment"></span>
            <span className="text">Comment</span>
          </div>
          <div className="item">
            <span className="icon share"></span>
            <span className="text">Share</span>
          </div>
        </div>
      </div>
      <div className="write-comment main">
        <div className="write-comment-item1">
          <span className="text">Most Relevant</span>
          <div className="wrap-icon">
            <span className="icon"></span>
          </div>
        </div>
        <div className="write-comment-item2">
          <div className="wrap-thumbnail">
            <img
              src="./images/shortcut-images/user_thumbnail.jpg"
              alt="thumbnail"
              className="thumbnail"
            />
          </div>
          <textarea
            className="wrap-comment"
            placeholder="Write a comment..."
            noresize="true"
          ></textarea>
          <div className="icons">
            <div className="item">
              <div className="icon avatar">1</div>
            </div>
            <div className="item">
              <div className="icon emoji"></div>
            </div>
            <div className="item">
              <div className="icon photo-video"></div>
            </div>
            <div className="item">
              <div className="icon gif"></div>
            </div>
            <div className="item">
              <div className="icon sticker"></div>
            </div>
          </div>
        </div>
        <div className="comment-item3"></div>
        <div className="comment-item4"></div>
      </div>
      <div className="comment main">
        <div className="comment-item1 wrap-thumbnail">
          <img
            src="./images/user-thumbnail/mod.png"
            alt="thumbnail"
            className="thumbnail"
          />
        </div>
        <div className="comment-item2">
          <div className="comment-item2-1">
            <span className="publisher">Moddeawdie</span>
            <div className="block"></div>
            <span className="text">Sarun Petchsoongsakul นี่ๆ</span>
          </div>

          <div className="comment-item2-2">
            <span className="like">Like</span>
            <span className="dot">·</span>
            <span className="reply">Reply</span>
            <span className="dot">·</span>
            <span className="date">1d</span>
          </div>
        </div>
      </div>
      <div className="view-more-comment main">
        <div className="view-more-comment-item1">
          <span>View more comments</span>
        </div>
        <div className="view-more-comment-item2">
          <span>1 of 141</span>
        </div>
      </div>
    </NewPostWrapper>
  );
};

const NewPostWrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor2};
  border-radius: 8px;
  margin-top: 15px;
  padding: 10px 0px;
  div.main:not(.post-image) {
    padding: 0 15px;
  }

  .block {
    display: block;
  }
  .header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    .header-item1 {
      position: relative;
      top: 4px;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .header-item2 {
      .publisher-name {
        display: inline-block;
        font-family: inherit;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }

      .wrap-published-date {
        display: flex;
        align-items: center;
        .published-date {
          display: inline-block;
          font-size: 0.8125rem;
          color: ${(props) => props.theme.dateTextColor};
          line-height: 1.2308;
          font-weight: normal;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }

        .dot {
          font-size: 0.8125rem;
          margin: 0 3px;
          color: ${(props) => props.theme.dateTextColor};
        }
        .icon {
          background-image: url("./images/shortcut-images/all_background5.png");
          background-position: 0px -708px;
          background-size: 26px 848px;
          width: 12px;
          height: 12px;
          background-repeat: no-repeat;
          display: inline-block;
          filter: ${(props) => props.theme.dateIconColor};
        }
      }
    }

    .header-item3 {
      .wrap-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.2s ease;
        position: relative;
        top: 3px;

        &:hover {
          background-color: ${(props) => props.theme.hoverItemBackground};
        }
        .icon {
          background-image: url("./images/shortcut-images/all_background6.png");
          background-position: 0px -718px;
          background-size: 34px 1268px;
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          display: inline-block;
          filter: ${(props) => props.theme.contactIcon};
        }
      }
    }
  }

  .description {
    p {
      font-size: 0.875rem;
      margin-top: 5px;
    }
    .see-more {
      font-size: 0.9375rem;
      font-weight: 600;
      color: ${(props) => props.theme.seeMoreColor};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .post-image {
    margin-top: 12px;
    cursor: pointer;
    .wrap-image {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .like-section1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    .like-section1-1 {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      .like-button {
        width: 18px;
        height: 18px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .like-total {
        font-size: 0.9375rem;
        color: ${(props) => props.theme.newPostTextColor2};
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .like-section1-2 {
      .comment,
      .share {
        font-size: 0.9375rem;
        color: ${(props) => props.theme.newPostTextColor2};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .comment {
        margin-right: 10px;
      }
    }
  }

  .like-section2 {
    .wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      border-top: 1.5px solid ${(props) => props.theme.lineColor};
      border-bottom: 1.5px solid ${(props) => props.theme.lineColor};
      padding: 4px 0;
      .item {
        width: 100%;
        cursor: pointer;
        transition: 0.2s ease;
        padding: 5px 10px 7px 10px;
        border-radius: 5px;
        &:hover {
          background: ${(props) =>
            props.theme.likeAndAnswerIconColorBackgroundHover};
        }

        .text {
          font-size: 0.9375rem;
          font-weight: 600;
          color: ${(props) => props.theme.likeAndAnswerTextColor};
        }
        .icon {
          background-image: url("./images/shortcut-images/all_background5.png");
          width: 18px;
          height: 18px;
          background-repeat: no-repeat;
          display: inline-block;
          position: relative;
          top: 4px;
          filter: ${(props) => props.theme.likeAndAnswerIconColor};
          margin-right: 5px;
        }
        .icon.like {
          background-position: 0px -202px;
          background-size: 26px 848px;
        }
        .icon.comment {
          background-position: 0px -162px;
          background-size: 26px 848px;
        }
        .icon.share {
          background-position: 0px -222px;
          background-size: 26px 848px;
        }
      }
    }
  }

  .write-comment {
    .write-comment-item1 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 7px 0;
      .text {
        font-size: 0.875rem;
        font-weight: 600;
        color: ${(props) => props.theme.mostRelevantTextColor};
        cursor: pointer;
      }
      .wrap-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        .icon {
          background-image: url("./images/shortcut-images/all_background6.png");
          background-position: 0px -1248px;
          background-size: 34px 1268px;
          width: 16px;
          height: 16px;
          background-repeat: no-repeat;
          display: inline-block;
          filter: ${(props) => props.theme.mostRelevantIconColor};
        }
      }
    }

    .write-comment-item2 {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      .wrap-thumbnail {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 4px;
          right: 0;
          width: 8px;
          height: 8px;
          background-color: green;
          border-radius: 50%;
          border: 1.5px solid #000;
        }
        .thumbnail {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .wrap-comment {
        width: 100%;
        background-color: ${(props) => props.theme.commentBackgroundColor};
        padding: 8px 10px 8px 10px;
        border-radius: 15px;
        font-size: 0.9375rem;
        font-weight: 400;
        color: ${(props) => props.theme.commentTextColor};
        outline: none;
        resize: none;
        width: 430px;
        height: 36px;
        border: none;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        ::placeholder {
          font-family: inherit;
          font-size: 0.9375rem;
          font-weight: 400;
          color: ${(props) => props.theme.commentPlaceholderColor};
        }
      }

      .icons {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        gap: 0px;
        .item {
          border-radius: 50%;
          padding: 5px 8px;
          transition: 0.3s ease;
          cursor: pointer;
          &:hover {
            background: ${(props) => props.theme.emijiBackgroundColorHover};
          }
          .icon {
            background-image: url("./images/shortcut-images/all_background5.png");
            width: 16px;
            height: 16px;
            background-repeat: no-repeat;
            display: inline-block;
            filter: ${(props) => props.theme.emojiColor};
            position: relative;
            top: 2px;
          }
          .icon.avatar {
            background-position: 0px -242px;
            background-size: 26px 848px;
          }
          .icon.emoji {
            background-position: 0px -368px;
            background-size: 26px 848px;
          }
          .icon.photo-video {
            background-position: 0px -314px;
            background-size: 26px 848px;
          }
          .icon.gif {
            background-position: 0px -386px;
            background-size: 26px 848px;
          }
          .icon.sticker {
            background-position: 0px -422px;
            background-size: 26px 848px;
          }
        }
      }
    }
  }

  .comment.main {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    margin-top: 8px;
    .comment-item1 {
      img.thumbnail {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .comment-item2 {
      .comment-item2-1 {
        background-color: ${(props) => props.theme.commentBackgroundColor};
        border-radius: 15px;
        padding: 3px 10px 5px 10px;
        display: inline-block;
        .publisher {
          font-size: 0.8125rem;
          font-weight: 600;
          color: ${(props) => props.theme.textColor1};
          z-index: 1;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .text {
          font-size: 0.875rem;
        }
      }
      .comment-item2-2 {
        display: flex;
        align-items: center;
        padding-left: 10px;
        .like,
        .reply {
          font-size: 12px;
          font-weight: bold;
          color: ${(props) => props.theme.likeAndReplyTextColor};
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .date {
          font-size: 12px;
          font-weight: normal;
          color: ${(props) => props.theme.dateTextColor};
          cursor: pointer;
        }
        .dot {
          color: #8a8d91;
          margin: 0 2px;
        }
      }
    }
  }

  .view-more-comment {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    .view-more-comment-item1 {
      span {
        font-size: 0.9375rem;
        font-weight: 600;
        color: ${(props) => props.theme.viewMoreCommentTextColor};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .view-more-comment-item2 {
      span {
        font-size: 0.9375rem;
        color: ${(props) => props.theme.viewMoreCommentTextColor2};
        cursor: default;
      }
    }
  }
`;
export default NewPost;
