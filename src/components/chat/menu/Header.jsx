import React,{ useContext, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import {NewsList} from '../../NewsFolder/NewsList.js';
import closeIcon from '@mui/icons-material/HighlightOff';
import {Dialog} from '@mui/material';
import AboutDrawer from './aboutDrawer.jsx';
import TikTacToe from '../../Game/Tik-tac-toe/TikTacToe';
import Snake from '../../Game/Snake/Snake.js';
import StartQuiz from '../../Quiz/StartQuiz.js';
import Weather from '../../Weather/Weather.js';
import Background from '../../../constants/Background.jpg';
import Movie from '../../../components/Movies/Movie';

//Components
import { AccountContext } from '../../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/infoDrawer';
import More from '@mui/icons-material/Quiz';
import MoreBack from '../../../constants/MoreBack.png';
import QuizLogo from '../../../constants/QuizLogo.webp';
import WeatherLogo from "../../../constants/WeatherLogo.jpg";
import MovieLogo from '../../../constants/moviesLogo.webp';
import GameLogo from '../../../constants/GameLogo.jpeg';
import NewsLogo from '../../../constants/NewsLogo.jpg';
import TikTacToeLogo from '../../../constants/TikTacToeLogo.webp';
import SnakeLogo from '../../../constants/SnakeLogo.jpg';
import TikTacBack from '../../../constants/TikTacBack.jpg';
import SnakeBack from '../../../constants/SnakeBack.jpg';


const Component = styled(Box)`
    height: 50px;
    background: linear-gradient(45deg, red, blue);
     padding: 8px 16px;
     display: flex;
     align-Items: center;
`

const Wrapper = styled(Box)`
    margin-left: auto;
    $ > *{
        margin-left:2px;
        padding: 8px;
    }
    & :first-child{
        font-size:22px;
        margin-right:10px;
        margin-top:3px;
    }
`

const Close = styled(closeIcon)`
  position: absolute;
  right: 25px;
  top: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: red;
`

const CloseMore = styled(closeIcon)`
  position: absolute;
  right: 25px;
  top: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: black;
`

const CloseQuiz = styled(closeIcon)`
  position: absolute;
  right: 15px;
  top: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: black;
`

const CloseMovie = styled(closeIcon)`
  position: absolute;
  right: 15px;
  top: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: white;
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer'
})



const QuickChatTitle = styled(Typography)`
    font-family: times new roman;
    font-size: 28px;
    padding: 20px;
    font-weight:600;
    
`


const dialogStyle = {
    height: '100%',
    overflow: 'auto',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    alignItems: 'center',
    border: 'solid black 5px'
}

const MoreDialog = {
    height: '95%',
    width: "100%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    alignItems: 'center',
    border: 'solid black 5px',
    overflow: 'hidden'
}

const GamesDialog = {
    height: '50%',
    width: "50%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    alignItems: 'center',
    border: 'solid black 5px',
    overflow: 'hidden'
}

const TiktacDialog = {
    height: '90%',
    width: "50%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    alignItems: 'center',
    border: 'solid black 5px',
    overflow: 'hidden'
}

const SnakeDialog = {
    height: '90%',
    width: "50%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    alignItems: 'center',
    border: 'solid black 5px',
    overflow: 'hidden'
}
const QuizDialog = {
    height: '95%',
    width: '40%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    border: 'solid black 5px',
    overflow: 'hidden'
}

const WeatherDialog = {
    height: '95%',
    width: '40%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    border: 'solid black 5px',
    overflow: 'hidden'
}


const MovieDialog = {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    border: '5px solid black ',
}


const NewsHeader = styled(Box)`
   height: 15%;
   width: 100%;
   background: linear-gradient(15deg,  red,blue);
   display: flex;
   align-contents: center;
`
const AllNews = styled(Box)`
  height: 85%;
  width: 100%;
  background: linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%),
                    linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),
                    linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%);
  overflow-y: scroll;
`
const NewsHeaderTitle = styled(Typography)`
   align-contents: center;
   font-size: 50px;
   font-weight: 600;
   font-family: times new roman;
   text-align: center;
   margin-top: 15px;
   margin-left: 100px;
`
const Container = styled(Box)`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    margin-right: 300px

`
const IconComponent = styled(Box)`
    margin-right: 50px;
`
const IconTitle = styled(Typography)`
    text-align: center;
    font-size: 30px;

`

const ImageLogo = styled('img')({
    height: 200,
    width: 200,
    borderRadius: '10%',
    cursor: 'pointer',
    border: '5px solid black'
})

const Header = () => {


    const [openDrawer, setOpenDrawer] = useState(false);

    const [openAboutDrawer, setOpenAboutDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }


    const [open, setOpen] = React.useState(false);
    const [openMore, setOpenMore] = React.useState(false);
    const [openGames, setOpenGames] = React.useState(false);
    const [openTicTac, setOpenTicTac] = React.useState(false);
    const [openSnake, setOpenSnake] = React.useState(false);
    const [openQuiz, setOpenQuiz] = React.useState(false);
    const [openWeather, setOpenWeather] = React.useState(false);
    const [openMovie, setOpenMovie] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //////////////////////////////////

    const handleClickOpenMore = () => {
        setOpenMore(true);
    };

    const handleCloseMore = () => {
        setOpenMore(false);
    };

    ///////////////////////////////////////

    const handleClickOpenGames = () => {
        setOpenGames(true);
    };

    const handleCloseGames = () => {
        setOpenGames(false);
    };

    /////////////////////////////////////////

    const handleClickOpenTicTak = () => {
        setOpenTicTac(true);
    };

    const handleCloseTicTac = () => {
        setOpenTicTac(false);
    };

    ///////////////////////////////////////////

    const handleClickOpenSnake = () => {
        setOpenSnake(true);
    };

    const handleCloseSnake = () => {
        setOpenSnake(false);
    };

    ////////////////////////////////////////
    
    const handleClickOpenQuiz = () => {
        setOpenQuiz(true);
    };

    const handleCloseQuiz = () => {
        setOpenQuiz(false);
    };

    ////////////////////////////////////////////

    const handleClickOpenWeather = () => {
        setOpenWeather(true);
    };

    const handleCloseWeather = () => {
        setOpenWeather(false);
    };

    ////////////////////////////////////////

    const handleClickOpenMovie = () => {
        setOpenMovie(true);
    };

    const handleCloseMovie = () => {
        setOpenMovie(false);
    };

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                <QuickChatTitle>QuickAll</QuickChatTitle>
                <Wrapper>
                    <abbr title='More'> <More style={{cursor: 'pointer'}} onClick={handleClickOpenMore}/></abbr>
                    <HeaderMenu setOpenDrawer={setOpenDrawer} setOpenAboutDrawer={setOpenAboutDrawer}/>
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
            <AboutDrawer open={openAboutDrawer} setOpen={setOpenAboutDrawer} />

            <Dialog open={open} onClose={handleClose} id="news-dialog"  
              PaperProps={{sx: dialogStyle,style:{backgroundColor: '#A9A9A9'}}} hideBackdrop={false}>
                <NewsHeader>
                    <NewsHeaderTitle>
                       Today's Quick News
                    </NewsHeaderTitle>
                    <Close onClick={handleClose} color="primary"/>
                </NewsHeader>
                <AllNews>
                   <NewsList/>
                </AllNews>    
            </Dialog>
            
            <Dialog open={openMore} onClose={handleCloseMore} 
              PaperProps={{sx: MoreDialog}} hideBackdrop={true}>

                <Box style={{width: '100%', height: '15%', border: '5px solid black', backgroundColor: '#0000FF'}}>
                    <Typography style={{fontSize: '45px', textAlign: 'center', fontWeight: '600', marginTop: '15px'}}> Welcome to Quick Hub</Typography>
                    
                <CloseMore onClick={handleCloseMore} color="primary"/>
                </Box>
                <Box style={{width: '100%', height: '85%', backgroundImage : `url(${MoreBack})`, backgroundSize: 'cover'}}>
                    <Container>
                    <IconComponent>
                        <ImageLogo src={GameLogo} alt="game" onClick={handleClickOpenGames}/>
                        <IconTitle>Games</IconTitle>
                    </IconComponent>
                    <IconComponent>
                        <ImageLogo src={QuizLogo} alt="quiz" onClick={handleClickOpenQuiz} />
                        <IconTitle>Quiz</IconTitle>
                    </IconComponent>

                    </Container>
                    <Container>
                    <IconComponent>
                        <ImageLogo src={WeatherLogo} alt="weather" onClick={handleClickOpenWeather}/>
                        <IconTitle>Weather</IconTitle>
                    </IconComponent>
                    <IconComponent>
                        <ImageLogo src={MovieLogo} alt="movie" onClick={handleClickOpenMovie}/>
                        <IconTitle>Entertainment</IconTitle>
                    </IconComponent>
                    </Container>
                </Box>
                
            </Dialog>


            <Dialog open={openGames} onClose={handleCloseGames}  
              PaperProps={{sx: GamesDialog,style:{backgroundColor: '#A9A9A9'}}} hideBackdrop={false}>
                <CloseMore onClick={handleCloseGames} color="primary"/>
                <Box style={{width: '100%', height: '18%', border: '3px solid black', background: ' linear-gradient(to right,#2239bf, #cbdbf2)'}}>
                    <Typography style={{fontSize: '30px',marginTop: '10px', fontWeight: '600', textAlign: 'center'}}>Welcome to Game hub</Typography>

                </Box>
                <Box style={{width: '100%', height: '82%',justifyContent: 'center', display: 'flex', background: ' radial-gradient( circle farthest-corner at 10% 20%, #0f2959 0%, #6db4c6 90% )'}}>
                    <Box style={{width: '30%', height: '60%', marginTop: '20px', marginRight: '40px'}}>
                        <img src={TikTacToeLogo} style={{width: '230px', height: '230px', cursor: 'pointer'}} alt="tik-tac-toe" onClick={handleClickOpenTicTak}/>
                        <Typography style={{textAlign: 'center', fontSize: '25px', fontWeight: '600'}}>TIC-TAC-TOE</Typography>
                    </Box>
                    <Box style={{width: '30%', height: '60%', marginTop: '20px'}}>
                        <img src={SnakeLogo}  style={{width: '230px', height: '230px'}} alt="Snake game"  onClick={handleClickOpenSnake}/>
                        <Typography style={{textAlign: 'center', fontSize: '25px', fontWeight: '600'}}>SNAKE GAME</Typography>
                    </Box>
                </Box>
            </Dialog>

            <Dialog open={openTicTac} onClose={handleCloseTicTac}
              PaperProps={{sx: TiktacDialog,style:{backgroundImage: `url(${TikTacBack})`, backgroundSize: 'cover'}}} hideBackdrop={false}>
                <TikTacToe/>
                <CloseMore onClick={handleCloseTicTac} color="primary"/>
            </Dialog>

            <Dialog open={openSnake} onClose={handleCloseSnake}
              PaperProps={{sx: SnakeDialog, style:{backgroundImage: `url(${SnakeBack})`, backgroundSize: 'cover'}}} hideBackdrop={false}>
                <Snake/>
                <CloseMore onClick={handleCloseSnake} color="primary"/>
            </Dialog>

            <Dialog open={openQuiz} onClose={handleCloseQuiz}
              PaperProps={{sx: QuizDialog , style:{background: 'linear-gradient(145deg, rgb(195, 240, 200), rgb(80, 155, 245))'}}} hideBackdrop={false}>
                <CloseQuiz onClick={handleCloseQuiz} color="primary"/>
                <StartQuiz/>
            </Dialog>

            <Dialog open={openWeather} onClose={handleCloseWeather}
              PaperProps={{sx: WeatherDialog , style:{backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}} hideBackdrop={false}>
                <CloseQuiz onClick={handleCloseWeather} color="primary"/>
                <Weather/>
            </Dialog>

            <Dialog open={openMovie} onClose={handleCloseMovie}
              PaperProps={{sx: MovieDialog, }} hideBackdrop={false}>
                <CloseMovie onClick={handleCloseMovie} color="primary"/>
               <Movie/>
            </Dialog>


        </>
    )
}

export default Header;