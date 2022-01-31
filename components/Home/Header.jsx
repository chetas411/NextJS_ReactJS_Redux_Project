import React from 'react';
import styled from 'styled-components'

const Heading = styled.h3`
    margin-bottom: 1rem;
    font-size: 2.5rem;
    text-align: center;
    color: #34D399;
`

const Header = () => {
  return <Heading>The MovieBrary</Heading>;
};

export default Header;
