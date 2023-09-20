import Circle from "@/components/icons/circle.svg";
import Archive from "@/components/icons/archive.svg"; 
import At from "@/components/icons/at.svg"; 
import Book from "@/components/icons/book.svg"; 
import Person from "@/components/icons/person.svg";
import ArrowBarRight from "@/components/icons/arrow-bar-right.svg";
import Finance from '@/components/icons/coin.svg';
import Trophy from '@/components/icons/trophy.svg';

const iconTypes = {
    circle: Circle,
    archive: Archive,
    at: At,
    book: Book,
    person: Person,
    arrowBarRight: ArrowBarRight,
    finance: Finance,
    trophy: Trophy
};

const IconComponent = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />
};

export default IconComponent;