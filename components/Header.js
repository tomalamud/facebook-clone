import Image from "next/image"
import {
  SearchIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  ChevronDownIcon,
  BellIcon,
 
} from "@heroicons/react/solid"
import HeaderIcon from "./HeaderIcon"

function Header() {
  return (
    <div className="flex p-3 sticky top-0 z-50 bg-white items-center md:px-5 shadow-md">
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
          <input type="text" className="hidden md:inline-flex bg-transparent placeholder-gray-400 outline-none" placeholder="Search Facebook"/>
         </div>
       </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-1 md:space-x-10">
          <HeaderIcon active Icon={HomeIcon}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Image Profile */}

        <p className="whitespace-nowrap font-semibold xl:pr-3">Tomás Elizondo</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header