import React from 'react';
import styled from  'styled-components'
import Image from 'next/image'

const PosterContainer = styled.div`
    width: 300px;
    height: 450px;
`

const Poster = ({imgUrl}) => {
 console.log(imgUrl)
  return(
    <PosterContainer>
        <Image
            loader={(src) => imgUrl}
            src={imgUrl}
            width={300}
            height={450}
            alt="movie"
        />
    </PosterContainer>
  )
};

export default Poster;
