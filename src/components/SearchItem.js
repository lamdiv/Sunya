
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react';

function SearchItem({ item }) {
    let [isOpen, setIsOpen] = useState(false);

    // const authors = item.authors.map()
      let authors = [];

      if (item.authorAffiliations != undefined) {
        authors = item.authorAffiliations.map((itm) => (
          <li> {itm.meta.author.name}; </li>
        ));
      }

      let keywords = [];

      if (item.keywords != undefined) {
        const keys = item.keywords[0].split(" ");
        console.log(keys);
        keywords = keys.map((itm) => (
          <li className="bg-primary text-white px-3 py-1 rounded-full">
            {itm}
          </li>
        ));
      } 


    return (
        <div className='w-full  p-4 border-2 border-gray-300 rounded-lg'>
            <h1 className='text-xl font-[600] leading-8'>
                {item.title}
            </h1>
            <ul className='mt-2 text-sm font-[600] text-primary flex space-x-2'>
                {authors}
                {/* <li>Laura Dennis,</li>
                <li>Andrea Spaeth,</li>
                <li>Namni Goel</li> */}
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
                    <h3 className="text-sm mt-3">Published on <span className="text-md font-[600]">January 7, 2022</span></h3>
                </div>
                <h3 onClick={() => setIsOpen(true)} className="text-md font-bold mt-3 text-primary cursor-pointer">View Summary</h3>
            </div>
            <Transition show={isOpen} as={Fragment}>
                <Dialog
                    className="relative z-20"
                    onClose={() => setIsOpen(false)}
                >
                    {/* The backdrop, rendered as a fixed sibling to the panel container */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-30"
                            aria-hidden="true"
                        />
                    </Transition.Child>

                    {/* Full-screen container to center the panel */}

                    <Transition.Child
                        as={Fragment}
                        enter="ease duration-200"
                        enterFrom="translate-y-full opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="ease-out duration-200"
                        leaveFrom="translate-y-0 opacity-100"
                        leaveTo="translate-y-full opacity-0"
                    >
                        <div
                            className='fixed inset-0 flex items-end sm:items-center justify-center sm:p-4'
                        >
                            <Dialog.Panel className="sm:max-w-sm bg-white w-full sm:w-[390px] z-10 mx-auto p-4 backdrop-blur-lg  rounded-xl">
                                <div className="fixed">
                                    <div
                                        onClick={() => setIsOpen(false)}
                                        className="bg-gray-100 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer self-end"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="none"
                                                stroke="#4FA3A5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="32"
                                                d="M368 368L144 144M368 144L144 368"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <h1 className='text-lg text-primary font-[600] leading-8'>
                                        Summary
                                    </h1>
                                    <h1 className='leading-8'>
                                        This is lorem this is lorem this lThis is lorem this is lorem this lThis is lorem this is lorem this l
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

                            </Dialog.Panel>
                        </div>
                    </Transition.Child>

                    {/* The actual dialog panel  */}
                </Dialog>
            </Transition>

        </div>
    )
}

export default SearchItem