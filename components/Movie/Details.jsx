import React from 'react';
import styled from 'styled-components'

const Label = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
`
const DetailsBox = styled.div`
    width: 50%;
    font-size: 1.25rem;
    margin-left: 3.5rem;
`
const Info = styled.p`
    margin-bottom: 1rem;
`


const Details = ({data}) => {
  const { title,
          year,
          runtimeStr, 
          plot, 
          directors, 
          writers, 
          stars, 
          genres, 
          imDbRating } = data
  return(
      <DetailsBox>
          <Info><Label>Title: </Label>{title}</Info>
          <Info><Label>Year: </Label>{year}</Info>
          <Info><Label>Length: </Label>{runtimeStr}</Info>
          <Info><Label>Directors: </Label>{directors}</Info>
          <Info><Label>Writers: </Label>{writers}</Info>
          <Info><Label>Actors: </Label>{stars}</Info>
          <Info><Label>Genre: </Label>{genres}</Info>
          <Info><Label>Rating (imdb): </Label>{imDbRating}</Info>
          <Info><Label>Summary </Label></Info>
          <Info>{plot}</Info>
      </DetailsBox>
  )
};

export default Details;
