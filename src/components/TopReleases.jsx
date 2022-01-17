import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { BsChevronRight } from "react-icons/bs";
import music1 from "assets/music1.jpeg";
import music2 from "assets/music2.jpeg";
import music3 from "assets/music3.jpeg";
import music4 from "assets/music4.jpeg";
import music5 from "assets/music5.jpeg";
import music6 from "assets/music6.jpeg";

function TopReleases() {
  const music = [
    {
      title: "Sucker",
      plays: 64,
      image: music2,
    },
    {
      title: "New Rules",
      plays: 124,
      image: music1,
    },
    {
      title: "F.R.I.E.N.D.S",
      plays: 500,
      image: music3,
    },
    {
      title: "A year without rain",
      plays: 238,
      image: music4,
    },
    {
      title: "Stay",
      plays: 334,
      image: music5,
    },
    {
      title: "Echo",
      plays: 25,
      image: music6,
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Top Releases</h4>
        </div>
        <div className="filters">
          <span>All Releases</span>
          <button>New Release</button>
        </div>
      </div>
      <div className="musics">
        {music.map(({ title, plays, image }) => {
          return (
            <div className="music" key={title}>
              <div className="details">
                <div className="image">
                  <img src={image} alt="title" />
                </div>
                <div className="info">
                  <h5>{title}</h5>
                  <h6>{plays}K Plays</h6>
                </div>
              </div>
              <BsChevronRight />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}
  color:white;
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .title {
    }
    .filters {
      display: flex;
      align-items: center;
      gap: 3rem;
      color: var(--primary-color);
      button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        font-weight: bolder;
      }
    }
  }
  .musics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .music {
      border-bottom: 0.1rem solid #242424;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .details {
        display: flex;
        gap: 1rem;
        .image {
          img {
            height: 2.5rem;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h6 {
            font-weight: 100;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .filters {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    .musics {
      grid-template-columns: 1fr;
    }
  }
`;

export default TopReleases;
