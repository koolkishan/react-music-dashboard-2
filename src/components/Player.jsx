import React, { useState } from "react";
import styled from "styled-components";
import mainMusic from "assets/mainMusic.jpeg";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
export default function Player() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <Section>
      <div className="background">
        <img src={mainMusic} alt="Main Music" />
      </div>
      <div className="player">
        <div className="details">
          <h6 className="track">Sucker</h6>
          <input type="range" className="range" />
          <div className="controls">
            <BiSkipPrevious />
            {isPlaying ? (
              <BsFillPauseFill onClick={() => setIsPlaying(!isPlaying)} />
            ) : (
              <BsFillPlayFill onClick={() => setIsPlaying(!isPlaying)} />
            )}
            <BiSkipNext />
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 1.3rem;
  .background {
    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }
  .player {
    background: linear-gradient(to bottom, transparent 0%, black 100%);
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    .details {
      position: absolute;
      bottom: 1rem;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      width: 100%;
      .track {
        font-weight: 100;
        font-size: 1rem;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
      }
      .range {
        width: 80%;
        -webkit-appearance: none;
        appearance: none;
        background-color: #ffffff76;
        border-radius: 1rem;
        height: 0.3rem;
      }
      .controls {
        margin-top: 0.3rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        svg {
          font-size: 1.8rem;
          cursor: pointer;
        }
      }
    }
  }
`;
