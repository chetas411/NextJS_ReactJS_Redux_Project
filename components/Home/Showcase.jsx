import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    justify-items: center;
    row-gap: 2rem;
`

const Showcase = () => {
  const data = useSelector((state) => {
      return (state.showSearch)? Object.values(state.searchedResults) : Object.values(state.allItems)
  })
  const Cards = data.map((item) => {
      return <Card key={item.id} imgUrl={item.image} title={item.title} id={item.id} />
  })
  return (
      <GridBox>
          {Cards}
      </GridBox>
  )
};

export default Showcase;
