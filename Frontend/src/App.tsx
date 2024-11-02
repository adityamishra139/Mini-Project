import './index.css'
import Home from './pages/Home'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import QuizPage from './pages/QuizPage'
import PerformanceAnalytics from './pages/PerformanceAnalytics'
import QuizTest from './pages/QuizTest';
import Chemistry from './pages/Chemistry'
import Maths from './pages/Maths'
import Physics from './pages/Physics'
import ThermodynamicsQuiz from './pages/ThermodynamicsQuiz'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route> 
      <Route path='/signin' element={<Signin></Signin>}></Route> 
      <Route path='/signup' element={<Signup></Signup>}></Route> 
      <Route path='/quiz' element={<QuizPage></QuizPage>}></Route> 
      
      <Route path='/performance' element={<PerformanceAnalytics></PerformanceAnalytics>}></Route> 
      <Route path='/physics' element={<Physics></Physics>}/>
      <Route path="/physics/Thermodynamics" element={<ThermodynamicsQuiz></ThermodynamicsQuiz>} />
      <Route path='/chemistry' element={<Chemistry></Chemistry>} />
      <Route path='/maths' element={<Maths></Maths>} />
     
      
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
