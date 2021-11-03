import layoutStyles from '../../styles/Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
