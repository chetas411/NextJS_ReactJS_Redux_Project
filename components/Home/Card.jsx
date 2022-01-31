import React from 'react';
import styled from 'styled-components'
import Link from 'next/link';
import Image from 'next/image';

const CardBox = styled.div`
  width: 200px;
  margin: 0;
`
const CardTitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin: 0;
`

const Card = ({imgUrl,title,id}) => {
  return(
    <Link href={`/movie/${id}`}>
      <a>
        <CardBox>
          <Image
            loader={(src) => imgUrl}
            src={imgUrl}
            width={200}
            height={300}
            alt="movie"
          />
          <CardTitle>{title}</CardTitle>
        </CardBox>
      </a>
    </Link>
  )
};

export default Card;
