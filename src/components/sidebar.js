"use client"

function Sidebar ({ children }) {
    return (
        <div className="hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-60 xl:w-72 h-dvh left-0 sticky top-0">
             <div className="bg-zinc-50 p-3 h-full">
                { children }
            </div>
        </div>
    );
}
 
export default Sidebar;