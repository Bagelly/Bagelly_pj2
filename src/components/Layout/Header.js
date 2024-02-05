import React from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
//import Home from './pages/Home';


const Header =() => {
    return(
        <header className={styles.header}>

            <div className={styles.contents}>
                
                    <Link className={styles.link} to="/">Bagelly </Link> 
                    

                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <Link className={styles.link} to="/Order">주문 </Link>
                        </li>
                        <li>
                            마이페이지
                        </li>
                    </ul>
                </nav>
                
            </div>
        </header>
    )
}

export default Header;