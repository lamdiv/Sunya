import React from 'react'
import SearchItem from './SearchItem'

function AnalyzedFile({response}) {
    let langs = []
    if(response.language_detection != undefined){

        langs = response.language_detection.map((itm) => (
            <li className="bg-primary text-white px-3 py-1 rounded-full">
       {itm.label}
      </li>
    ));
}

    let words = []

    if (response.top_frequency_words != undefined) {
      words = response.top_frequency_words.map((itm) => (
        <li className="text-primary font-bold">{itm[0]} </li>
      ));
    }
    return (
        <div>
            <h1 className="text-xl font-[600]">Analyzed Result</h1>
        
            <div className='w-full mt-5 p-4 border-2 border-gray-300 rounded-lg'>
            <h1 className='text-lg text-primary font-[600] leading-8'>
                Summary
            </h1>

            <h1 className='leading-8'>
                {response.summarize_text}
            </h1>
                {/* <ul className='mt-2 text-sm font-[600] text-primary flex space-x-2'>
                    language
                    word frequency
                    text summarize
                    
                    <li>Laura Dennis,</li>
                    <li>Andrea Spaeth,</li>
                    <li>Namni Goel</li>
                </ul> */}
                <div>
                <div className='flex items-center mt-6 text-sm'>
                    Language Detected :
                    <ul className='flex space-x-2 ml-4'>
                        {langs}
                        {/* <li className='bg-primary text-white px-3 py-1 rounded-full'>Atmospheric Science</li> */}
                    </ul>
                </div>
                <div className='flex items-center mt-6 text-sm'>
                    Word Frequency :
                    <ul className='flex space-x-2 ml-4'>
                      {words}
                    </ul>
                </div>
                </div>
               
              

            </div>

            <div className='mt-10'>
                <h1 className="text-xl font-[600]">Similar Documents</h1>

                {/* Search Items */}
                {/* <SearchItem /> */}

            </div>
        </div>
        
    )
}

export default AnalyzedFile