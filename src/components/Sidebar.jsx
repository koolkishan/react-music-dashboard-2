import React from "react";
import styled from "styled-components";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BiGroup, BiBell } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiAnalogue } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
function Sidebar() {
  return (
    <Aside id="sidebar">
      <div className="brand">
        <RiNeteaseCloudMusicLine />
      </div>
      <ul className="links">
        <li className="selected">
          <SiAnalogue />
        </li>
        <li>
          <HiOutlineMusicNote />
        </li>
        <li>
          <BiBell />
        </li>
        <li>
          <AiOutlineDollarCircle />
        </li>
        <li>
          <BiGroup />
        </li>
      </ul>
      <div className="help">
        <FiHelpCircle />
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: var(--dark-background-color);
  height: 100%;
  width: max-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .help {
    svg {
      transition: 0.5s ease-in-out;
      cursor: pointer;
      color: white;
    }
    &:hover {
      svg {
        color: var(--primary-color);
      }
    }
  }
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
  .brand {
    svg {
      font-size: 2.5rem;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    li {
      border-radius: 1rem;
      padding: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: white;
      }
      &:hover {
        box-shadow: 0 0 60px 8px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 60px 8px var(--primary-color);
      svg {
        color: var(--primary-color);
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }
  }
`;

export default Sidebar;
