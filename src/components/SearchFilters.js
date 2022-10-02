import Dropdown from '../asset/Dropdown.svg'
import TranslateIcon from '../asset/TranslateIcon.svg'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from 'react';
import FileUpload from './FileUpload';


function SearchFilters() {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div className='container flex items-center justify-between mx-auto mt-5'>
            <div className='flex border-2 border-primary  rounded-[50px] w-max px-3 py-2 space-x-3'>
                <select className='cursor-pointer text-primary w-full rounded-[50px] appearance-none outline-none'>
                    <option selected>Select Center</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <img src={Dropdown} alt="polygon" />
            </div>
            <ul className='flex w-1/2 justify-around'>
                <li className='cursor-pointer'>All</li>
                <li className='font-bold text-primary'>Thesis</li>
                <li className='cursor-pointer'>Images</li>
                <li className='cursor-pointer'>Videos</li>
                <li className='cursor-pointer'>Documents</li>
            </ul>
            <div onClick={() => setIsOpen(true)} className='cursor-poitner flex text-[#5E66EA] items-center space-x-2'>
                <img className='w-[24px] h-[24px]' src={TranslateIcon} alt="translate" />
                <p className='font-bold text-lg'>Analyze File</p>

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
                               <FileUpload />
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>

                    {/* The actual dialog panel  */}
                </Dialog>
            </Transition>
        </div>
    )
}

export default SearchFilters