import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Home/Header';
import SearchBar from '../components/Home/SearchBar';
import Showcase from '../components/Home/Showcase';
import LodingAnimation from '../components/LodingAnimation';

const Home = () => {
  const isLoading = useSelector((state) => (state.loadingStatus === "loading"))
  return(
    <div>
      <Header />
      <SearchBar />
      {isLoading?(
        <LodingAnimation />
      ):(
          <Showcase />
      )}
    </div>
  )
};

export default Home;
