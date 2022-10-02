import React from 'react'
import SearchItem from './SearchItem'


function AnalyzedFile() {
    return (
        <div>
            <h1 className="text-xl font-[600]">Analyzed Result</h1>
        
            <div className='w-full mt-5 p-4 border-2 border-gray-300 rounded-lg'>
            <h1 className='text-lg text-primary font-[600] leading-8'>
                Summary
            </h1>

            <h1 className='leading-8'>
                This is lorem epsum
            </h1>
                <div>
                <div className='flex items-center mt-6 text-sm'>
                    Language Detected :
                    <ul className='flex space-x-2 ml-4'>
                        <li className='bg-primary text-white px-3 py-1 rounded-full'>Atmospheric Science</li>
                    </ul>
                </div>
                <div className='flex items-center mt-6 text-sm'>
                    Word Frequency :
                    <ul className='flex space-x-2 ml-4'>
                        <li className='text-primary font-bold'>10</li>
                    </ul>
                </div>
                </div>
               
              

            </div>

            <div className='mt-10'>
                <h1 className="text-xl font-[600]">Similar Documents</h1>

                {/* Similar Items */}
                {/* <SearchItem /> */}

            </div>
        </div>
        
    )
}

export default AnalyzedFile