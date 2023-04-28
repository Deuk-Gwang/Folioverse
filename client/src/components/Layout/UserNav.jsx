// 정주현

import { useState } from "react";
import styles from "./Header.module.css";
import UserDownMenu from "./UserDownMenu";
import SearchInput from "./SearchInput";

import profileImg from "/profile/profile-dark.png";
import darkModeImg from "/dark-mode.png";

function UserNav() {
  const [profileView, setProfileView] = useState(false); // 프로필 드랍다운 메뉴 true/false

  function profileViewHandler() {
    return setProfileView(!profileView);
  }
  return (
    <>
      <ul className={styles.uNavRight}>
        <SearchInput login={true} />
        <li>
          <img
            src={darkModeImg}
            alt="darkModeImg"
            className={styles.uDarkModeImg}
          ></img>
        </li>
        <li>
          <img
            className={styles.userProfileImg}
            onClick={profileViewHandler}
            src={profileImg}
            alt="profileImg"
          />
        </li>
      </ul>
      {profileView && <UserDownMenu />}
    </>
  );
}

export default UserNav;
