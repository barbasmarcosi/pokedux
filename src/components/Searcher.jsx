const Searcher = ({ searching, onSearch }) => {
  
  return (
    <>
      <input
        value={searching}
        onChange={onSearch}
        placeholder="Search"
        type="text"
        className="Searcher"
      />
    </>
  );
};

export default Searcher;
