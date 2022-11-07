const TrackersTable = ({trackers}) => {
  return (
    <div>
      <p>Liste des Trackers</p>
      <table>
        <thead>
          <tr>
            <th>Nom du Tracker</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          {trackers.map((tracker) => (
            <tr>
              <td>{tracker.name}</td>
              <td>{tracker.starttime}</td>
              <td>{tracker.endtime}</td>
              <td>durée</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackersTable;
