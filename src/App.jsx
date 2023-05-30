// import React from 'react'
import { useState } from 'react';
import './App.css'
import { Footer } from './Components/Footer'
import { Form } from './Components/Form'
import { Header } from './Components/Header'
import { Modal } from './Components/Modal';

function App() {

  const myHeader = new Headers();
  myHeader.append("apikey", "T5C7rviqlOMzHvSVC9LBmTHHpkHzG0sG");

  const [keywords, setKeywords] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const extract = async (text) => {
    
    setLoading(true);
    setModal(true);

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeader,
      body: text
    };

    try {

      fetch("https://api.apilayer.com/keyword", requestOptions)
      .then(response => response.json())
      .then(result => {
        setKeywords(result.result.map((x, i) => (x.text)));
      })
      setLoading(false);

    } catch (error) {
      console.error(error);
    }
    
  };

  const closeModal = () => {setModal(false);}

  return (
    <>
      <div className="w-screen h-screen">
        <Header/>
        <div className="max-w-[1000vw] p-3 min-h-[50vh] my-10">
            <Form extract={extract}/>
        </div>
        {
          modal && (
            <Modal keywords={keywords} loading={loading} modal={modal} closeModal={closeModal}/>
          )

        }
        <Footer/>
      </div>
    </>
  )
}
export default App;
