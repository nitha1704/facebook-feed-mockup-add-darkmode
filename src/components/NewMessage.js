import React from 'react';
import styled from 'styled-components';

const NewMessage = () => {
    return (
      <NewMessageWrapper className="new-message">
        <div className="wrap-icon">
          <div className="icon"></div>
          <div className="tooltip-box">New Message</div>
        </div>
        
      </NewMessageWrapper>
    );
}

const NewMessageWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  right: 25px;
  cursor: pointer;
  .wrap-icon {
    background: #4b4c4f;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease;
    &:hover {
      background: #5d5e61;
      .tooltip-box {
        opacity: 1;
        visibility: visible;
      }
    }
    .icon {
      background-image: url("./images/shortcut-images/all_background4.png");
      background-position: -26px -216px;
      background-size: 50px 514px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
      filter: invert(89%);
    }
  }
  .tooltip-box {
    position: absolute;
    bottom: 8px;
    left: -107%;
    transform: translateX(-50%);
    font-size: 13px;
    color: #2e2e2e;
    background-color: #c8c8c8;
    padding: 5px 10px;
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease;
    /* transition-delay: 0.2s;
    transition-property: opacity; */
    white-space: nowrap;
  }
`;
export default NewMessage
