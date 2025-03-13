import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Tableau from './pages/Tableau';
import Erreur from './pages/Erreur';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/tableau" element={<Tableau />} />
        <Route path="/erreur" element={<Erreur />} />
      </Routes>
    </Router>
  );
}

export default App;
