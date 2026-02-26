import Link from "./Link.jsx";
import Image from "./Image.jsx";
import logo from "../img/logo.jpg";

export default function Logo() {
    return (
        <Link>
            <Image src={logo} alt="Logo" />
        </Link>
    );
}
