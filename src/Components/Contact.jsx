import React, { useState } from 'react'
import styles from '../styles/contact.module.scss'
import {BsFacebook,BsGithub,BsLinkedin} from 'react-icons/bs'

const Contact = ({isOpen,setisOpen}) => {
    return ( 
        isOpen && 
        <div className={styles.cardpt}>
            <div className={styles.cardch}>
                <div className={styles.cardhead}>
                    <div className={styles.lefthead}>
                        <button onClick={() => setisOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.righthead}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.cardbody}>
                    <div className={styles.cardphoto}>
                    </div>
                    <span className={styles.spanpt}>Juan Manuel</span>
                    <span className={styles.spanch}>JUNIOR FRONT-END DEVELOPER</span>
                    <span className={styles.spanft}>Creative interfaces and designs</span>
                    <div className={styles.description}></div>
                </div>
                <div className={styles.cardfooter}>
                    <ul>
                        <li>
                            <a href='https://www.facebook.com/profile.php?id=100041961425722'><BsFacebook/></a>
                        </li>
                        <li>
                            <a href='https://github.com/jmslasso'><BsGithub/></a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/juan-manuel-l-0560bb140/'><BsLinkedin/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact