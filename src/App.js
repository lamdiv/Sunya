import Search from "./components/Search";
import SearchFilters from "./components/SearchFilters";
import SearchResults from "./components/SearchResults";

import {useState} from 'react'

function App() {
  
        const [searchArr, setSearchArr] = useState([]);
         
        const reqOptions = (data) => { return {

          method: "POST",
          // mode: "no-cors",
          headers: {
            "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0",
            "Content-Type": "application/json",
          },
          body: 
          JSON.stringify({"request_params": JSON.stringify(data)}),
        };
      }

         async function handleSearch(e) {
           e.preventDefault();
           const inpData = e.target.searchtext.value;

           fetch(
             "https://k1eup5.deta.dev/fetch_listings",
             reqOptions({
              
               title: inpData,
             })
           )
             .then((res) => res.json())
             .then((res) => {
               console.log(res);
               setSearchArr(res);
             });
         } 


//  page: {
//                  size: 25,
//                  from: 25,
//                },
//                highlight: true,

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