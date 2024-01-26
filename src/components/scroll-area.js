const ScrollArea = ({ children }) => {
    return (
        <div className="max-h-dvh overflow-y-scroll">
            { children }
        </div>
    );
}
 
export default ScrollArea;