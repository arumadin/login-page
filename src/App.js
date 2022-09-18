import React from 'react';
import {CoverContent} from './components/CoverContent';
import {SignInForm} from './components/SignInForm';
import {SignUpForm} from './components/SignUpForm';
import './App.css';

function App() {
  return (
    <>
      <div className='tickerMessage'>
        <p>This page is currently optimized for desktop browser only 👩🏻‍💻🌻</p>
      </div>

      <div className="container">
        <input className="hidden" type="checkbox" id='to-cover'></input>
        <div className='form__container'>
          <SignInForm />
          <SignUpForm />
        </div>
        <div className='cover'>
          <CoverContent
            className='cover--signin'
            title='Hello There'
            subtitle="Don't have an account? Sign up with us today!"
          />
          <CoverContent
            className='cover--signup'
            title="Let's get you started"
            subtitle="Be part of our awesome team and have fun with us"
          />
        </div>
      </div>
    </>
  );
}

export default App;
