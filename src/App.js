import Search from "./components/Search";
import SearchFilters from "./components/SearchFilters";
import SearchResults from "./components/SearchResults";

import {useState} from 'react'
import AnalyzedFile from "./components/AnalyzedFile";




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
          JSON.stringify(data),
        };
      }
        
        const multiPartOptions = (data) => { return {

          method: "POST",
          // mode: "no-cors",
          headers: {
            "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:105.0) Gecko/20100101 Firefox/105.0",
            // "Content-Type": "multipart/form-data",
          },
          body: data ,
        };
      }


         async function handleSearch(e) {
           e.preventDefault();
           const inpData = e.target.searchtext.value;

           fetch(
             "https://nasa-spaceapp-inference.herokuapp.com/fetch_listings",
             reqOptions({
               request_params: JSON.stringify({
                 title: inpData,
               }),
             })
           )
             .then((res) => res.json())
             .then((res) => {
               console.log(res);
               setSearchArr(res);
             });
         } 

         async function handleFileSubmission(form){
          
          fetch(
            "https://nasa-spaceapp-inference.herokuapp.com/analyze_file?keyword_label="+form[1].value,
            multiPartOptions(new FormData(form))
          )
            .then((req) =>req.json())
            .then((res) => console.log(res));
         }

//  page: {
//                  size: 25,
//                  from: 25,
//                },
//                highlight: true,

  return (
    <div className="font-inter">
      <Search handleSearch={handleSearch} />
      <SearchFilters handleFileSubmission={handleFileSubmission} />
      <hr className="mt-5" />
      <div className="container mx-auto mt-10">
        <AnalyzedFile />
        {/* <SearchResults searchArr={searchArr}/> */}
        
      </div>


    </div>
  );
}

export default App;