import styled from "styled-components";
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Streams from "./Streams";
import TargetAudeince from "./TargetAudeince";
import TopReleases from "./TopReleases";
export default function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row">
          <Streams />
          <Earnings />
        </div>
        <div className="row2">
          <TargetAudeince />
          <TopReleases />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 27, 0.7);
`;
