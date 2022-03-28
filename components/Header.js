import Image from "next/image"
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
 
} from "@heroicons/react/solid"
import HeaderIcon from "./HeaderIcon"

function Header() {
  return (
    <div className="flex p-2 sticky top-0 z-50 bg-white items-center lg:px-5 shadow-md">
      {/* Left */}
       <div className="flex">
         <Image 
            src="https://links.papareact.com/5me" 
            width={40} 
            height={40} 
            layout="fixed"
         />
         <div className="flex bg-gray-200 p-2 rounded-full ml-4 items-center">
          <SearchIcon className="w-6 text-gray-600"/>
          <input type="text" className="bg-transparent placeholder-gray-400 outline-none" placeholder="Search Facebook"/>
         </div>
       </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-20">
          <HeaderIcon Icon={HomeIcon}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* Right */}
    </div>
  )
}

export default Header