import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';

const Navbar = () => (
  <>
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">
          <a href="replace">
            <Image src="/header.png" width={62} height={32} />
          </a>
        </Link>
      </div>
      <nav className={styles.navbarRight}>
        <Link href="/home">Map</Link>
        <Link href="/calendar">Calendar</Link>
      </nav>
    </div>
    <div className={styles.rainbow} />
  </>
);

export default Navbar;
