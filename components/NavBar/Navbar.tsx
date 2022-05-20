import React from "react";
import { useRouter } from "next/router";

import styles from "./Navbar.module.css";

const Navbar = (props: any) => {
  const router = useRouter();

  const { username } = props;

  const handleOnClickHome = () => {
    router.push("/");
  };

  const handleOnClickList = () => {
    router.push("/browse/my-list");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* <a className={styles.logoLink} href="/"> */}
        <div className={styles.logoWrapper}>
          {/* <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128px"
              height="34px"
            /> */}
        </div>
        {/* </a> */}

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              {/* <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24px"
                height="24px"
              /> */}
            </button>

            {/* {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )} */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
