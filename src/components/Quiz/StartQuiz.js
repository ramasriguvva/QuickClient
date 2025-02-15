
import Quiz from './Quiz'
import Reducer from './Reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(Reducer)
const StartQuiz = () => {
  return(
    <Provider store={store}>
      <Quiz />
    </Provider>
  )
}
export default StartQuiz;
