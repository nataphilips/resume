import React from 'react'
import styled from 'styled-components'
import styles from '../styleguide'
import resume from '../resume.json'
import { year } from '../utils/dates'

export default () => {
  return (
    <Container className="education-container">
      <Header>Education</Header>

      {resume.education.map(x => {
        return (
          <EducationItem>
            <div className="education-degree">
              {x.studyType} in {x.area}
            </div>

            <Instituition className="education-institution">
              @ {x.institution} ({year(x.startDate)} - {year(x.endDate)})
            </Instituition>
          </EducationItem>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: ${styles.dimensions.lg};
`
const Header = styled.div`
  ${styles.typography.header};
`
const EducationItem = styled.div`
  margin-bottom: ${styles.dimensions.md};
`
const Instituition = styled.div`
  ${styles.typography.label};
  margin-top: ${styles.dimensions.xs};
`
