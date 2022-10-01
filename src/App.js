import Search from "./components/Search";
import SearchFilters from "./components/SearchFilters";
import SearchResults from "./components/SearchResults";


function App() {
  return (
    <div className="font-inter">
      <Search />
      <SearchFilters />
      <hr className="mt-5" />
      <div className="container mx-auto mt-10">
        <SearchResults />
        
      </div>


    </div>
  );
}

export default App;