import { FaSearch } from "react-icons/fa";

function Navbar(){

    return(
        <div className="bg-orange-500 h-6/12 flex flex-col justify-evenly items-center">
            <h1 className="text-amber-100 font-extrabold font-sans text-2xl text-center">It know the atmospheric conditions on your city!</h1>
            <div className="flex w-full justify-center">
                <div className="w-2/4 flex bg-white items-center pl-2">
                    <FaSearch className="text-xl text-amber-400"/>
                    <input type="text" name="searchTown" id="searchTown" placeholder="Search for your city" className="bg-white py-3 px-4 flex-auto focus:outline-0 text-lg"/>
                </div>
            </div>
        </div>
    )

}

export default Navbar;