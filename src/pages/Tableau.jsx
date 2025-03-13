function Tableau() {
    const utilisateurs = [
      { id: 1, nom: 'Jean Dupont', age: 25, email: 'jean.dupont@email.com' },
      { id: 2, nom: 'Marie Curie', age: 30, email: 'marie.curie@email.com' },
      { id: 3, nom: 'Albert Einstein', age: 40, email: 'albert.einstein@email.com' },
    ];
  
    return (
      <div className="container">
        <div className="table-box">
          <h2>Tableau des utilisateurs</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Âge</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {utilisateurs.map((utilisateur) => (
                <tr key={utilisateur.id}>
                  <td>{utilisateur.id}</td>
                  <td>{utilisateur.nom}</td>
                  <td>{utilisateur.age}</td>
                  <td>{utilisateur.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Tableau;
  