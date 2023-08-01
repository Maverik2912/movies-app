import styles from './UserInfo.module.css';
import avatar from '../../images/avatar.jpg'
const UserInfo = () => {

    return (
        <div className={styles.flexContainer}>
            <img src={avatar} alt="Avatar"/>
            <div className={styles.userName}>Mykyta Kraskovskyi</div>
        </div>
    );
};

export {UserInfo};