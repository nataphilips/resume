import React from 'react'
import styled from 'styled-components'
import styles from '../styleguide'
import resume from '../resume.json'

export default () => {
  return (
    <Container className="profile-links">
      <Header>Find me Online</Header>

      {resume.basics.profiles.map(x => {
        return (
          <Profile href={x.url} target="_blank">
            <Icon src={x.icon} color={x.iconColor} />
            <Network>{x.username}</Network>
          </Profile>
        )
      })}
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0 {styles.dimensions.md};
`
const Header = styled.div`
  ${styles.typography.header};
`
const Profile = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  ${styles.typography.regular};

  &:visited {
    ${styles.typography.regular};
  }
`
const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin: ${styles.dimensions.xs} ${styles.dimensions.sm} ${styles.dimensions.xs} 0;
`
const Network = styled.div`
  ${styles.typography.small};
`
