import { useSelector } from 'react-redux';
import Settings from './Settings';
import Question from './Question';
import FinalScreen from './FinalScreen';
import { Box } from '@mui/material';
import './Quiz.css'

function Quiz() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  return (
    <Box style={{border: '5px solid black', width: '85%', height: '93%', margin: '30px', marginTop: '40px', background: 'linear-gradient(to right,#afaaff, #f7ccff)'}}>
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
    </Box>
  )
}

export default Quiz;