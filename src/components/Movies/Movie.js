import React, { useState } from "react";
import Axios from "axios";
import { styled, Box } from '@mui/material';
import MovieComponent from "./Components/MovieComponent";
import MovieInfoComponent from "./Components/MovieInfoComponent";
import MovieIcon from '../../constants/MovieIcon.png';
import SearchIcon from '@mui/icons-material/Search';


export const API_KEY = "a9118a3a";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const AppName = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled(Box)`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled(Box)`
  display: flex;
  border-radius: 10px;
  margin-right: 60px;
  width: 50%;
  height: 60px;
  background-color: white;
`
const Search = styled(SearchIcon)`
  width: 32px;
  height: 32px;
  color: blue;
  margin-top: 20px;
  margin-left: 10px;
`
 

const MovieImage = styled('img')({
  width: '48px',
  height: '48px',
  margin: '15px'
})
 

const SearchInput = styled('input')({
  color: 'black',
  marginBottom: '30px',
  fontSize: '20px',
  fontWeight: 'bold',
  border: 'none',
  outline: 'none',
  marginLeft: '5px',
  height: '30px',
  borderRadius: '10px'
 
})
  

const MovieListContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled('img')({
  width: '150px',
  height: '150px',
  margin: '150px',
  opacity: '50%'
})
 


function Movie() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src={MovieIcon} />
          Quick Movie App
        </AppName>
        <SearchBox>
          <Search />
          <SearchInput
            placeholder="Search movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src={MovieIcon} />
        )}
      </MovieListContainer>
    </Container>
  );
}

export default Movie;