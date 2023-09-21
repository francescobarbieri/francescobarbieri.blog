import Circle from "@/assets/circle.svg";
import Archive from "@/assets/archive.svg"; 
import At from "@/assets/at.svg"; 
import Book from "@/assets/book.svg"; 
import Person from "@/assets/person.svg";
import ArrowBarRight from "@/assets/arrow-bar-right.svg";
import Finance from '@/assets/coin.svg';
import Trophy from '@/assets/trophy.svg';
import Feather from '@/assets/feather.svg';

const iconTypes = {
    circle: Circle,
    archive: Archive,
    at: At,
    book: Book,
    person: Person,
    arrowBarRight: ArrowBarRight,
    finance: Finance,
    trophy: Trophy,
    thoughts: Feather
};

const Icon = ({ name, ...props }) => {
    
    let Icon = iconTypes[name];
    return <Icon {...props} />
};

export default Icon;