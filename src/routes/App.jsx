import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "../containers/Home";
import { Information } from "../containers/Information";
import { Checkout } from "../containers/Checkout";
import { Payment } from "../containers/Payment";
import { Sucess } from "../containers/Sucess";
import { NotFound } from '../containers/NotFound'
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {

  const initialState = useInitialState();

    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='/checkout/information' element={<Information/>} />
              <Route path='/checkout/payment' element={<Payment/>} />
              <Route path='/checkout/success' element={<Sucess/>} />
              <Route path='*' element={<NotFound/>} /> 
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    );
}

export default App;