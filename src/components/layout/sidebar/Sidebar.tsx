import { MessagesSquare, Phone, Settings, Sun, Users2 } from 'lucide-react';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" alt="social Logo" width={45} height={45} priority />
      <div>
        <Link href="/friends">
          <Users2 size={27}/>
        </Link>
        <Link href="/call">
          <Phone size={27}/>
        </Link>
        <Link href="/chats">
          <MessagesSquare size={27}/>
        </Link>
        <Link href="/settings">
          <Settings size={27} />
        </Link>
      </div>
      <Sun size={27}/>
    </aside>
  );
};
