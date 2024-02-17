import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Root } from './components/Root'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root />} />
      </Routes>
    </Router>
  )
}

export default App
