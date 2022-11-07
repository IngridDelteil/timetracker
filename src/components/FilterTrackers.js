const FilterTrackers = ({onFilterTextChange}) => {
  const handleChangeFilter = (event) => {
    onFilterTextChange(event.target.value);
  };
  return (
    <div>
      <p>Recherche de Trackers</p>
      <input
        type='text'
        placeholder='libellé du tracker'
        onChange={handleChangeFilter}
      />
    </div>
  );
};

export default FilterTrackers;
