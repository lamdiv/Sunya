import SearchIcon from "../asset/SearchIcon.svg"

function Search() {
  return (
    <div class="mx-auto w-full relative">
        <img src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg" alt="" className="w-full h-[25vh] object-cover object-middle" />
        <div className="flex space-x-5 items-center justify-between bg-white w-1/2 h-[80px] shadow-lg relative -mt-10 left-1/4 rounded-[50px] px-6 py-2">
          <img src={SearchIcon} className="w-[25px] h-[25px]" alt="search"/>
          <input type="text" className="w-full placeholder:font-regular text-lg font-[500] outline-none " placeholder="Let’s do a quick search" />
          <div>
          <button className="bg-primary outline-none rounded-[36px] px-6 py-2 text-white">
            Search
          </button>
        </div>
          </div>
          
      </div>
  )
}

export default Search