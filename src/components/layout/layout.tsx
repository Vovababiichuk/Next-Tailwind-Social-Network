import { Sidebar } from './sidebar/Sidebar';
import { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

export default function LayoutClient({ children }: PropsWithChildren<unknown>) {
  return (
    <main className={styles.layout}>
      {/* це ліва частина */}
      <Sidebar />
      {/* це все інше */}
      <section>{children}</section>
    </main>
  );
}
