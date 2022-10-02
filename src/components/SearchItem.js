import React, { useEffect, useState} from 'react'

function SearchItem({item}) {

    
    let authors = []
    
    if(item.authorAffiliations != undefined){

        authors = item.authorAffiliations.map(itm => <li> {itm.meta.author.name}; </li>)
    }
    
    let keywords = []

    if(item.keywords != undefined) {
    
        const keys = item.keywords[0].split(" ")
        console.log(keys)
    keywords =  keys.map((itm) => (
            <li className="bg-primary text-white px-3 py-1 rounded-full">
          {itm}
        </li>
      )) ;
    } 
    
    return (
        <div className='w-full  p-4 border-2 border-gray-300 rounded-lg'>
            <h1 className='text-xl font-[600] leading-8'>
                {item.title}
            </h1>
            <ul className='mt-2 text-sm font-[600] text-primary flex space-x-2'>
            {authors}
            </ul>
            <div className='flex items-center mt-6 text-sm'>
                Keywords :
                <ul className='flex space-x-2 ml-4'>
                    {keywords}
                    {/* <li className='bg-primary text-white px-3 py-1 rounded-full'>Atmospheric Science</li>
                    <li className='bg-primary text-white px-3 py-1 rounded-full'>Geography</li> */}
                </ul>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center mt-6 text-sm'>
                    DOI :
                    <a href="10.1016/j.jsmc.2017.03.005" className="ml-4 text-[#5E66EA]">
                        10.1016/j.jsmc.2017.03.005
                    </a>
                </div>
                <div>
                    <h3 className="text-sm mt-3">Published on <span className="text-md font-[600] text-primary">January 7, 2022</span></h3>
                </div>
            </div>

        </div>
    )
}

export default SearchItem