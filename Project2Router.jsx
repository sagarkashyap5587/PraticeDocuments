import React, { createContext, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

const HomePage = React.lazy(() => import('./HomePage'));
const LoginPage = React.lazy(() => import('./LoginPage'));
const Layout = React.lazy(() => import('./Layout'));
const Everything = React.lazy(() => import('./Everything'));
const Cart = React.lazy(() => import('./Cart'));
const Bucket = React.lazy(() => import('./Bucket'));

function ErrorFallback({error, onReset}) {
  return (
    <div role='alert'>
      <p>Something wrong:-</p>
      <pre>{error}</pre>
      <button onClick={onReset}>Try Again</button>
    </div>
  );
}


export const data2 = createContext();
const Project2Router = () => {
  const [item, setItem] = useState([]);
  return (
    <data2.Provider value={{ item, setItem }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Layout /></ErrorBoundary></Suspense>}>
            <Route index element={
              <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                <HomePage /></ErrorBoundary></Suspense>}></Route>
            <Route exact path='/shop' element={
              <Suspense fallback={<div>Loading...</div>}>
                 <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Everything /></ErrorBoundary></Suspense>}></Route>

            <Route exact path='/groceries' element={
              <Suspense fallback={<div>Loading ...</div>}>
                 <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Everything /></ErrorBoundary></Suspense>}></Route>

            <Route exact path='/juice' element={
              <Suspense fallback={<div>Loading...</div>}>
                 <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Everything /></ErrorBoundary></Suspense>}></Route>

            <Route exact path='/cart/:id' element={
              <Suspense fallback={<div>Loading...</div>}>
                 <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Cart /></ErrorBoundary></Suspense>}></Route>

            <Route path='/bucket' element={
              <Suspense fallback={<div>Loading...</div>}>
                 <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Bucket /></ErrorBoundary></Suspense>}></Route>
          </Route>
          <Route path='/loginpage' element={
            <Suspense fallback={<div>Loading...</div>}>
               <ErrorBoundary FallbackComponent={ErrorFallback}>
              <LoginPage /></ErrorBoundary></Suspense>}></Route>

        </Routes>
      </BrowserRouter>
    </data2.Provider>
  )
}

export default Project2Router