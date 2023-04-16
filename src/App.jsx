//React Router
import {Routes, Route} from 'react-router-dom'

//Pages
import Intro from './Pages/Intro/Intro'
import Napp from './Pages/N-App/Napp/Napp'

import Home from './Pages/N-App/Napp/pages/Home';
import Saved from './Pages/N-App/Napp/pages/Saved';
import Sounds from './Pages/N-App/Napp/pages/Sounds';

//Components


//Styles
import './App.css'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="App" element={<Napp/>}>
                <Route path="home" element={<Home/>} />
                <Route path="sounds" element={<Sounds/>} />
                <Route path="saved" element={<Saved/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
