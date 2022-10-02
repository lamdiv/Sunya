import Search from "./components/Search";
import SearchFilters from "./components/SearchFilters";
import SearchResults from "./components/SearchResults";

import {useState} from 'react'

function App() {
  
        const [searchArr, setSearchArr] = useState([]);
         
        const reqOptions = (data) => { return {

          method: "POST",
          headers: {
            "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0",
            Accept: "application/json",
            "Accept-Language": "en-US,en;q=0.5",
            Referer: "https://ntrs.nasa.gov/search",
            Origin: "https://ntrs.nasa.gov",
            Connection: "keep-alive",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
          },
          body: JSON.stringify(data),
        };
      }

         async function handleSearch(e) {
           e.preventDefault();
           const inpData = e.target.searchtext.value;

           fetch("https://ntrs.nasa.gov/api/citations/search", reqOptions({
             page: {
               size: 25,
               from: 25,
             },
             highlight: true,
           }))
             .then((res) => res.json())
             .then((res) => {
               console.log(res);
               return ([{ title: "Hello" }]);
             });
         } 




  return (
    <div className="font-inter">
      <Search handleSearch={handleSearch} />
      <SearchFilters />
      <hr className="mt-5" />
      <div className="container mx-auto mt-10">
        <SearchResults searchArr={searchArr}/>
        
      </div>


    </div>
  );
}

export default App;