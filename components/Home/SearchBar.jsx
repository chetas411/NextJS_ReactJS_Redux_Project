import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearhResults, RESET } from '../../store/movieSlice';
import styled from 'styled-components'

const Input = styled.input`
    width: 350px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    outline: none;
`
const Button = styled.button`
    width: 100px;
    margin-right: 1rem;
    padding: 0.25rem 0.5rem;
    background-color: black;
    border: none;
    border-radius: 0.25rem;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
`
const Wrapper = styled.div`
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SearchBar = () => {
  const [searchText,setSearchText] = useState("")
  const dispatch = useDispatch()
  const handleSearch = () => {
    dispatch(getSearhResults(searchText))
  }
  const handleReset = () => {
    dispatch({type: RESET})
    setSearchText("")
  }
  return(
      <Wrapper>
          <Input type="text" placeholder="Search Movies" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <div>
            <Button onClick={handleSearch}>Search</Button>
            <Button onClick={handleReset}>Reset</Button>
          </div>
      </Wrapper>
  )
};

export default SearchBar;
