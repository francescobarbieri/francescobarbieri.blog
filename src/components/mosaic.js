const Mosaic = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
            <div className="h-40 col-span-2">
                <div className="w-full h-full rounded-lg bg-[url('/img/mosaic-pagani.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>
            <div className="h-40">
                <div className="w-full h-full rounded-lg bg-[url('/img/mosaic-macbook.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>
            <div className="h-40">
                <div className="w-full h-full rounded-lg bg-[url('/img/mosaic-tree.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>
            <div className="h-40 col-span-2">
                <div className="w-full h-full rounded-lg bg-[url('/img/mosaic-bellagio.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>
        </div>
    );
}
 
export default Mosaic;