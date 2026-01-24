import React from 'react';
import NavBar from '../Components/NavBar & Footer/NavBar';
import Footer from '../Components/NavBar & Footer/Footer';

const ErrorPage = () => {
    return (
      <div>
        <NavBar></NavBar>
        <div className='text-center my-20 items-center'>
          <h1>404 ERROR</h1>
          <h1>Page Not Found</h1>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ErrorPage;