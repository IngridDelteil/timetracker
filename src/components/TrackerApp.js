import {useState} from "react";
import FilterTrackers from "./FilterTrackers";
import TrackersTable from "./TrackersTable";
import database from "../data";

const TrackerApp = () => {
  const [allTrackers, setAllTrackers] = useState(database);
  const [filterText, setFilterText] = useState("");
  const [selectedTracker, setSelectedTracker] = useState({});

  const handleFilter = (text) => {
    setFilterText(text);
    const filteredTrackers = database.filter(
      (tracker) => tracker.name.toLowerCase().indexOf(text) !== -1
    );
    setAllTrackers(filteredTrackers);
  };

  return (
    <div>
      <FilterTrackers onFilterTextChange={handleFilter} />
      <TrackersTable trackers={allTrackers} />
    </div>
  );
};

export default TrackerApp;
