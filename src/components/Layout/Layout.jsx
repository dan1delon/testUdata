import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.content}>
        <Toaster
          position="top-right"
          toastOptions={{ duration: 4000, style: { padding: '16px' } }}
        />
        {children}
      </main>
    </div>
  );
};

export default Layout;
