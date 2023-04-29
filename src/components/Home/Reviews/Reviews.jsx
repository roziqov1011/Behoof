import React from 'react'
import ItemImg from '../../../assets/img/reviewsItem.png'
import { ReviewsItem, ReviewsItemInner, ReviewsList, ReviewsWrapper } from './Styled'
import { Container } from '../../../assets/style/GlobalStyled'
import { Link } from 'react-router-dom'

function Reviews() {
    const arr = [1,2,3,4]
  return (
    <ReviewsWrapper>
        <Container>
            <h2>Обзоры</h2>
            <ReviewsList>
                {
                    arr?.map((item, index)=>(
                        <ReviewsItem key={index}>
                            <img src={ItemImg} alt="" />
                            <ReviewsItemInner>
                                <b>Обзор устаревших смартфонов</b>
                                <p>Lorem ipsum dolor sit amet consectetur. Rhoncus risus  viverra enim nunc. </p>
                                <Link to='/ '>Смотреть<i className="bi bi-chevron-right"></i></Link>
                            </ReviewsItemInner>
                        </ReviewsItem>
                    ))
                }
            </ReviewsList>
        </Container>
    </ReviewsWrapper>
  )
}

export default Reviews