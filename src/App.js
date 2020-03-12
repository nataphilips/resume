import React from "react";
import styled from "styled-components";
import styles from "./styleguide";
import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import CareerOverview from "./components/CareerOverview";

export default () => {
  return (
    <Profile className="profile">
      <ProfileContainer className="profile-container">
        <Header />
        <Body className="body">
          <Main className="career-and-profile-links">
            <RightSidebar className="right-sidebar">
              <Education />
              <Profiles />
            </RightSidebar>
          </Main>

          <WorkExperience />
        </Body>
      </ProfileContainer>
    </Profile>
  );
};

const Profile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const ProfileContainer = styled.div`
  width: ${styles.dimensions.maxWidth};
  padding: ${styles.dimensions.lg} ${styles.dimensions.md};
  display: flex;
  flex-direction: column;

  ${styles.media.small`
    width: 100%;
    box-sizing: border-box;
  `}
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;

  ${styles.media.small`
    flex-direction: column;
  `}
`;
const RightSidebar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
