import {useState} from "react";
import database from "../data";

const TrackerApp = () => {
  const [allTrackers, setAllTrackers] = useState(database);
  const [filterText, setFilterText] = useState("");
  const [selectedTracker, setSelectedTracker] = useState({});

  return (
    <div>
      <p>Il y a {allTrackers.length} trackers</p>
      {allTrackers.map((tracker) => (
        <p>{tracker.name}</p>
      ))}
    </div>
  );
};

export default TrackerApp;
