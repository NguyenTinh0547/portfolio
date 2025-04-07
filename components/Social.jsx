import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/NguyenTinh0547' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/tinh-nguyen-van-662b1235a/' }
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link
                    key={index} href={item.path}
                    className={iconStyles}
                    target="_blank">
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social