import { IoSearchSharp } from "react-icons/io5"
const SearchInput = () => {
    return (
        <form action="" className="flex item-center">
            <input type="text" placeholder="Serach..." className="input input-bordered rounded-full" />
            <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput