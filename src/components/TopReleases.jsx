import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { BsChevronRight } from "react-icons/bs";
import music1 from "assets/music1.jpeg";
import music2 from "assets/music2.jpeg";
import music3 from "assets/music3.jpeg";
import music4 from "assets/music4.jpeg";
import music5 from "assets/music5.jpeg";
import music6 from "assets/music6.jpeg";

export default function TopReleases() {
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
  return <Section></Section>;
}

const Section = styled.section``;
