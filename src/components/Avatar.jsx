import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import avatar from "assets/avatar.png";
export default function Avatar() {
  return (
    <Section>
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <span>Kishan Sheth</span>
        <BiChevronDown />
      </div>
    </Section>
  );
}

const Section = styled.section`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 0.1rem solid #242424;
  padding-bottom: 1rem;
  .image {
    img {
      height: 3rem;
      border-radius: 2rem;
    }
  }
  .name {
    display: flex;
    align-content: center;
    gap: 0.5rem;
    svg {
      color: var(--primary-color);
      font-size: 1.3rem;
    }
  }
`;
