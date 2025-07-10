import { Item } from "@radix-ui/react-select";
import { icons } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: ''},
    {icon: <FaLinkedin />, path: ''},
    {icon: <FaYoutube />, path: ''},
    {icon: <FaTwitter />, path: ''},
]


const Socials = ({containerStyles, iconsStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) =>{
            return ( 
            <Link key={index} href={item.path} className={iconsStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
};

export default Socials