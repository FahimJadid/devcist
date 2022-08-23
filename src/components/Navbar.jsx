import { useState } from "react";
import {AiOutlineClose, AiOutlineHome, AiOutlineMedicineBox, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsFillCartFill} from "react-icons/bs";
import {TbTruckDelivery} from 'react-icons/tb';
import {VscAccount} from 'react-icons/vsc';
import {BiWallet} from 'react-icons/bi';
import {GrArticle} from 'react-icons/gr';
import {FiPhoneCall} from 'react-icons/fi';
import {MdHelpOutline} from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <main className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* Left Section */}
        <section className="flex items-center">
            <div onClick={()=>setNav(!nav)} className="cursor-pointer">
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                <span className="font-bold text-blue-600">Devcists</span> <strong className="text-orange-600">S</strong>uper</h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                <p className="bg-black text-white rounded-full p-2">Delivery</p>
                <p className="p-2">Pickup</p>
            </div>
        </section>

        {/* Search Bar */}
        <section className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={25} />
            <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Search for Services" />
        </section>

        {/* Add to Cart */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} />
        </button>

        {/* Menu for Mobile*/}
        {/* Overlay Menu*/}
        {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
              
        {/* Sidebar Menu  */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500'}>
            <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className="text-2xl p-4">
                <span className="font-bold">Devcists</span><strong> S</strong>uper
            </h2>
            <nav>
                <ul className="flex flex-col p-4 text-gray-800">
                    <li className="text-xl py-4 flex"><AiOutlineHome size={25} className='mr-4'/>Home</li>
                    <li className="text-xl py-4 flex"><AiOutlineMedicineBox size={25} className='mr-4'/>All Medicines</li>
                    <li className="text-xl py-4 flex"><VscAccount size={25} className='mr-4'/>My Account</li>
                    <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                    <li className="text-xl py-4 flex"><BiWallet size={25} className='mr-4'/>Wallet</li>
                    <li className="text-xl py-4 flex"><GrArticle size={25} className='mr-4'/>Health Articles</li>
                    <li className="text-xl py-4 flex"><FiPhoneCall size={25} className='mr-4'/>Call to Action</li>
                    <li className="text-xl py-4 flex"><MdHelpOutline size={25} className='mr-4'/>Help</li>
                </ul>
            </nav>
        </div>
    </main>
  )
}

export default Navbar