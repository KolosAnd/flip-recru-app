import React from "react";
import mainClass from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={mainClass.header}>
            <div className={`${mainClass.header__container}  container`}>
                <Link to='/' className={`${mainClass.title__name} ${props.classes}`}>Star Wars</Link>
                <Link className={mainClass.header_link} to='/about'>About</Link>
            </div>
        </header>
    )
}
export default Header;