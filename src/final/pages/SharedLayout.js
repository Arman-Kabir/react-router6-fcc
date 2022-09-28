import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';
const Home = () => {
  return (
    <>
      {/* <StyledNavbar /> */}
      <Navbar></Navbar>
      <Outlet />
    </>
  );
};
export default Home;
