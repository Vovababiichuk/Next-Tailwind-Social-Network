'use client';

import { Sun } from 'lucide-react';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { MENU } from './sidebar.data';
import cn from 'clsx';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathname = usePathname()  ;

  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" alt="social Logo" width={45} height={45} priority />
      <div>
        {MENU.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={cn({
              [styles.active]: pathname === item.url,
            })}
            >
            <item.icon size={27} />
          </Link>
        ))}
      </div>
      <Sun size={27} />
    </aside>
  );
};
