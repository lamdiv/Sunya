import Dropdown from '../asset/Dropdown.svg'
import TranslateIcon from '../asset/TranslateIcon.svg'

function SearchFilters() {
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
            <div className='flex items-center space-x-2'>
                <img className='w-[24px] h-[24px]' src={TranslateIcon} alt="translate" />
                <p className='cursor-pointer'>Nepali</p>
            </div>
        </div>
    )
}

export default SearchFilters