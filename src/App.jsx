import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/layout/CustomCursor.jsx';
import Home from './pages/Home';
import Monitoramento from './pages/Monitoramento';

function App() {

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
      </Routes>
    </>
  )
}

export default App
