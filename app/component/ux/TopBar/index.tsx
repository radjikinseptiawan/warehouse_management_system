import Hamburger from "../../ui/icon/Hamburger";

export default function TopBar(){
    return(
        <div className="p-2 h-12 z-30 shadow-xl fixed top-0 bg-green-600 w-full">
            <button>
            <Hamburger/>
            </button>
        </div>
    )
}