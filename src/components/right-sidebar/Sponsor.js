import React from 'react';
import styled from 'styled-components';

const Sponsor = () => {
    return (
      <SponsorWrapper className="sponsor-wrapper">
        <h1>Sponsored</h1>
        <div className="sponsored-item">
          <div className="wrap-sponsored-image">
            <img src="./images/sponsor/5.jpg" alt="" className="first-ads" />
          </div>
          <div className="wrap-sponsored-content">
            <h3 className="title">
              Divi. The Most Popular WordPress Theme In The World!
            </h3>
            <span className="url">elegantthemes.com</span>
          </div>
        </div>
        <div className="sponsored-item">
          <div className="wrap-sponsored-image">
            <img src="./images/sponsor/6.jpg" alt="" />
          </div>
          <div className="wrap-sponsored-content">
            <h3 className="title">Patrick Adair Designs</h3>
            <span className="url">patrickadairdesigns.com</span>
          </div>
        </div>
      </SponsorWrapper>
    );
}
const SponsorWrapper = styled.div`
  h1 {
    font-size: 1.0625rem;
    font-family: inherit;
    font-weight: 600;
    color: ${(props) => props.theme.titleTextColor};
    margin-bottom: 15px;
    padding-left: 8px;
  }
  .sponsored-item {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 15px;
    margin-bottom: 0px;
    padding: 5px 0px;
    transition: 0.3s ease;
    cursor: pointer;
    border-radius: 10px;
    padding-left: 8px;
    &:hover {
      background-color: ${(props) => props.theme.hoverItemBackground};
    }

    .title {
      font-size: 0.9375rem;
      font-weight: 500;
      color: ${(props) => props.theme.textColor1};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .url {
      font-size: 0.8rem;
      color: ${(props) => props.theme.textColor2};
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
  }
  .first-ads {
    width: 99.2px !important;
    height: 51.64px !important;
  }
`;
export default Sponsor
