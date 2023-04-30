import React from 'react'
import { Container } from '../../../assets/style/GlobalStyled'

import { OurGoalItem, OurGoalList, OurGoalWrapper } from './Styled'

function OurGoal() {
    const arr = [5,30,300,8]
  return (
    <OurGoalWrapper >
        <Container>
        <h2>Наша цель - создать фантастический
            <br />
            сервис для всех потребителей</h2>
            <OurGoalList>
                {
                    arr?.map((item, index)=>(
                        <OurGoalItem key={index}>
                        <span>{item}</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc. </p>
                        </OurGoalItem>
                    ))
                }
            </OurGoalList> 
        </Container>
    </OurGoalWrapper>
  )
}

export default OurGoal