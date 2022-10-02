import Dropdown from '../asset/Dropdown.svg'
import SearchItem from './SearchItem'
import {useEffect, useState} from 'react'

function SearchResults({term, searchArr}) {


     
     const searchItems = searchArr.map(itm => <SearchItem item={itm} /> )
    
     return (
        <>
            <div className="flex w-2/3 justify-between">
                <div>
                    <h1 className="text-xl font-[600]">Search Results</h1>
                    <h3 className="text-sm font-medium mt-3">Processed phrase <span className=" text-primary">{term}</span></h3>
                </div>
                <div className='flex rounded-[50px] w-max h-min px-3 py-2 space-x-3'>
                    {/* <p>Sort by</p> */}
                    <select className='cursor-pointer text-primary  appearance-none outline-none'>
                        <option selected>Sort by</option>
                        <option value="1">Latest</option>
                        <option value="2">Oldest</option>
                        <option value="3">Citations</option>
                    </select>
                    <img src={Dropdown} alt="polygon" />
                </div>

            </div>
            <div className='flex gap-5 mt-5 mb-5 w-full'>
                <div className="w-full space-y-5">
                    {/* <SearchItem item={debugObj}/> */}
                    {searchItems}
                </div>
                {/* <div className='w-1/3 h-min p-4 border-2 border-gray-300 rounded-lg'>
                    <p className='text-xl font-medium'>Summary</p></div> */}
            </div>


        </>


    )
}

export default SearchResults