import React from "react";
import mainClass from "./Header.module.css";
import Link from 'next/link'

const Header = (props) => {
    return (
        <header className={mainClass.header}>
            <div className={`${mainClass.header__container}  container`}>
                <Link href="/" >
                    <a className={mainClass.title__name }>Star Wars Wiki App</a>
                </Link>
            </div>
        </header>
    )
}
export default Header;