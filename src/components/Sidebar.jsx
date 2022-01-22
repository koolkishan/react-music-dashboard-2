import styled from "styled-components";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BiGroup, BiBell } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiAnalogue } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
export default function Sidebar() {
  return <Aside></Aside>;
}

const Aside = styled.section`
  background-color: var(--dark-background-color);
  height: 100%;
  width: max-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
