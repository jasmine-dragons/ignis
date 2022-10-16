import Image from 'next/image';
import Link from 'next/link';

import style from './style.module.scss';
const Navbar = () => (
  <div className={style.navbar}>
    <div className={style.navbarLeft}>
      <Link href="/">
        <a href="replace">
          <Image src="/header.png" width={62} height={32} />
        </a>
      </Link>
    </div>
    <nav className={style.navbarRight}>
      <Link href="/home">Map</Link>
    </nav>
  </div>
);

export default Navbar;
