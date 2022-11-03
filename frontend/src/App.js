import React, {  useState } from 'react';


import HeroSection from './components/HeroSection';
import Modal from './components/AppModal';
import QuickCardContainer from './components/QuickCardContainer';
import ProductDetail from './components/ProductDetail';
import Filter from './components/Filter';
import MenuPage from  './components/MenuPage';
import './App.css';


const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

  // const [location, setLocation] = useState(null);
  // const[places,setPlaces]= useState(null);


  const handleClick = (id) => {
    if (id === 'login') {
      setModalTitle('Login');
      setShowModal(true);
    }
    else {
      setModalTitle('Signup');
      setShowModal(true);
    }


  }
  const handleCloseModal = () => {
    setShowModal(false);

  }





  return (
    <>
      <div className='container'>
        {/* <img src="../assets/homewall.png"/> */}

        <HeroSection handleClick={handleClick} />
        <QuickCardContainer />
        <Modal showModal={showModal} handleCloseModal={handleCloseModal} title={modalTitle} />
        <>
          <div className="filter">
            <Filter />

          </div>
        </>
     
        <Modal />
        </div>
        <>
        <div className='product'>
        <ProductDetail/>
      </div>
      </>
     <>
     <div className='menu-page'>
      <MenuPage/>
     </div>
     </>
    </>
  )

}

export default App;
