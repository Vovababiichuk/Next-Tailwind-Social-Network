import { headers } from 'next/headers';

import { MessagesSquare, Phone, Settings, Sun, Users2 } from 'lucide-react';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { MENU } from './sidebar.data';

export const Sidebar = () => {
  const headersList = headers();
  const headersUrl = headersList.get('referer');

  console.log(headersUrl);

  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" alt="social Logo" width={45} height={45} priority />
      <div>
        {MENU.map((item) => (
          <Link href={item.url} key={item.url}>
            <item.icon size={27} />
          </Link>
        ))}
      </div>
      <Sun size={27} />
    </aside>
  );
};
