import React, { useState } from 'react'

function FileUpload({ handleFileSubmission }) {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  var pdfjsLib = window["pdfjs-dist/build/pdf"];
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "//mozilla.github.io/pdf.js/build/pdf.worker.js";

  const handleFile = () => {
    // Convert the file to Binary
    var reader = new FileReader();

    reader.onload = function (e) {
      // binary data is recieved here once they are loaded
      console.log(e.target.result);

      // Reads the binary
      var loadingTask = pdfjsLib.getDocument({ data: e.target.result });

      loadingTask.promise
        .then(async function (pdf) {
          console.log(pdf);

          let text = "";
          let i;
          for (i = 0; i <= pdf.numPages; i++) {
            await pdf.getPage(i).then((pg) => {
              pg.getTextContent().then((r) => {
                r.items.forEach((itm) => {
                  text += itm.str;
                });
              }); // r is TextContent has .items that has [{str:}] but some items dont have str
            });
          }
          return text;
        })
        .then((txt) =>{

			console.log(txt)
			handleFileSubmission(txt, document.getElementById("keywords").value)
		}
        );
    };

    reader.onerror = function (e) {
      // error occurred
      console.log("Error : " + e.type);
    };
    reader.readAsBinaryString(selectedFile);
  };

  const keywords = [
    "computer science applications",
    "aquatic science",
    "NASA Center ARC",
    "condensed matter physics",
    "atomic and molecular physics, and optics",
    "Non-NASA Center",
    "global and planetary change",
    "nuclear and high energy physics",
    "oceanography",
    "general environmental science",
    "water science and technology",
    "ecology, evolution, behavior and systematics",
    "electrical and electronic engineering",
    "general physics and astronomy",
    "geochemistry and petrology",
    "earth and planetary sciences (miscellaneous)",
    "atmospheric science",
    "general earth and planetary sciences",
    "astronomy and astrophysics",
    "space and planetary science",
  ];
  const optionsMapping = keywords.map((itm) => (
    <option value={itm}>{itm}</option>
  ));
  return (
    <form
      className="flex flex-col spacey-2 items-center mt-10 "
      onSubmit={(e) => {e.preventDefault(); handleFileSubmission(e.target)}}
    >
      <input
        className="mt-4 w-full block text-transparent outline-none border-none"
        type="file"
        name="in_file"
        onChange={changeHandler}
      />

      {isSelected ? (
        <div className="w-full h-min border-2 p-4 mt-4 mb-4">
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
        </div>
      ) : (
        <p className="w-full h-min border-2 p-4 mt-4 mb-4">No File Selected</p>
      )}
      <div className='mb-5'>
		Select Keyword
        <select className='mt-2 outline-none border-2 border-primary p-1 rounded text-primary' id="keywords">
          {optionsMapping}
        </select>
      </div>
      <div>
        <button
          className="bg-primary outline-none rounded-[36px] px-6 py-2 text-white"
          type='submit'
        >
          Analyze this file
        </button>
      </div>
    </form>
  );
}

export default FileUpload