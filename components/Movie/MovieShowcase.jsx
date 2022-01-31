import React from 'react';
import styled from 'styled-components'

const MovieBox = styled.div`
    width: 100%
    margin-top: 3.5rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    alignItems: flex-start;
`

const MovieShowcase = ({children}) => {
  return(
      <MovieBox>{children}</MovieBox>
  );
};

export default MovieShowcase;
