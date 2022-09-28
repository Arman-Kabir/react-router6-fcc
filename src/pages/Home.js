import { Link, Outlet } from 'react-router-dom';
import Navbar from '../final/components/Navbar';

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <h3>Home</h3> */}
      <section className='section'>
        <h2>Home Page</h2>
        {/* <h2>Home Page</h2>
        <Outlet />
        <Link to="/about" className='btn'>About</Link> */}
      </section>
    </>
  );
};
export default Home;
