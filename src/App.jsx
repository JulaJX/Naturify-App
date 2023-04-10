//React Router
import {Routes, Route} from 'react-router-dom'

//Pages
import Intro from './Pages/Intro/Intro'
import Home from './Pages/N-App/Home/Home'
import Saved from './Pages/N-App/Saved/Saved'
import Sounds from './Pages/N-App/Sounds/Sounds'
//Components


//Styles
import './App.css'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/App-home" element={<Home/>} />
          <Route path="/App-sounds" element={<Sounds/>} />
          <Route path="/App-saved" element={<Saved/>} />
        </Routes>
    </div>
  )
}

export default App
