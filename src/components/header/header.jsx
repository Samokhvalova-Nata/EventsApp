import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <div className="header-container">
            <div className="topNav">
                <Link href='/'>
                    <Image src={'/images/logo_black.png'} width={50} height={50} alt="logo"/>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/events'>Events</Link>
                        </li>
                        <li>
                            <Link href='/about-us'>About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        </header>
    );
};