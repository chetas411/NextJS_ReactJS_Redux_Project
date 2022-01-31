import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { ITEMS_LOADING, ITEMS_LOADED } from '../../store/movieSlice';
import { GET_INFO } from '../api/imdb';
import Header from '../../components/Home/Header';
import Poster from '../../components/Movie/Poster';
import LodingAnimation from '../../components/LodingAnimation';
import MovieShowcase from '../../components/Movie/MovieShowcase';
import Details from '../../components/Movie/Details';

const MoviePage = () => {
    const router = useRouter()
    const {id} = router.query
    const [data,setData] = useState(null)
    useEffect(() => {
        console.log(1)
        const getData = async () => {
            const res = await axios.get(`${GET_INFO}${router.query.id}`)
            setData(res.data)
        }
        getData()
    },[id])
    // const { title,
    //         year,
    //         image, 
    //         runtimeStr, 
    //         plot, 
    //         directors, 
    //         writers, 
    //         stars, 
    //         genres, 
    //         imDbRating } = data
  return(
      <div>
          <Header />
          {(data === null)?(
              <LodingAnimation />
          ):(
            <MovieShowcase>
                <Poster imgUrl={data.image} />
                <Details data={data} />
            </MovieShowcase>
          )}
      </div>
  )
};

export default MoviePage;
