const Mosaic = () => {
    return (
        <div className="columns-2 sm:columns-3 gap-3 my-8">
            <div className="relative h-40 mb-3">
                <div className="w-full h-full bg-slate-200 rounded-lg"></div>
            </div>

            <div className="relative h-80 mb-4 sm:mb-0">
                <div className="w-full h-full bg-slate-500 rounded-lg"></div>
            </div>

            <div className="relative h-40 sm:h-80 sm:mb-3">
                <div className="w-full h-full bg-slate-700 rounded-lg"></div>
            </div>

            <div className="relative h-40 mb-3 sm:mb-0">
                <div className="w-full h-full bg-slate-500 rounded-lg"></div>
            </div>

            <div className="relative h-40 mb-3">
                <div className="w-full h-full bg-slate-900 rounded-lg"></div>
            </div>

            <div className="relative h-80">
                <div className="w-full h-full bg-slate-300 rounded-lg"></div>
            </div>
        </div>
    );
}
 
export default Mosaic;