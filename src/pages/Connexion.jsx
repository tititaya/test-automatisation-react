import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Connexion() {
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logs pour vérifier les valeurs
    console.log("Nom:", nomUtilisateur);
    console.log("Mot de passe:", motDePasse);

    if (nomUtilisateur === 'admin' && motDePasse === 'password') {
      navigate('/tableau');
    } else {
      navigate('/erreur');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={nomUtilisateur}
            onChange={(e) => setNomUtilisateur(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
