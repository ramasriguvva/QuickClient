import axios from "axios";
import { useState } from "react";
import WeatherBack from '../../constants/WeatherBack.png';
import { Box, Typography } from "@mui/material";

function Weather() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <>
      <Box style={{ justifyContent: 'center', }}>
        <Typography style={{ fontSize: '50px', fontWeight: '700', textAlign: 'center', marginTop: '40px' }}><u>Quick Weather Report</u></Typography>

        <img src={WeatherBack} style={{ width: 300, height: 250, marginLeft: '150px' }} alt="weather" />
      </Box>
      <Box>
        <input type="text" style={{ borderRadius: '10px', width: '50%', marginLeft: '120px' }}
          placeholder="Enter the city name"
          value={inputCity}
          onChange={handleChangeInput} />

        <button style={{ borderRadius: '10px', width: '50%', marginLeft: '120px' }} type="button"
          onClick={handleSearch}
        >Search</button>
      </Box>
      {
        Object.keys(data).length > 0 &&
        <Box style={{ marginTop: '50px', marginLeft: '150px' }}>
          <Typography style={{ fontSize: '45px' }}> {data?.name} </Typography>
          <Typography style={{ fontSize: '20px', marginTop: '20px' }}>{((data?.main?.temp) - 273.15).toFixed(2)}°C</Typography>

        </Box>
      }

    </>
  );
}

export default Weather;