import React, { useRef } from 'react';
import '../css/homepage.scss';
import { categories } from '../data';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  return (
        <section className="hero home">
        <div>
          <p>ESTB</p>
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="10.326 50.3 180.129 101.208"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="10.326 50.3 180.129 101.208"
            role="presentation"
            aria-hidden="true"
          >
            <g>
              <path
                d="M105.6 52.7c-1.8-1.5-3.5-2.4-5.1-2.4-1.6.1-3.3 1-5.1 2.4-11.2 9.2-16.3 21-17 35.2-.4 7.5-1.3 14.8 10.2 12.6 1.3-.2 3.1-.2 4.3.6 1 .6 1.9 1.4 2.6 2.4 3 4.3 2.2 9.1 1 13.9-1.8 7-2.5 14.2-1.6 21.3.6 4.9-.6 13.1 5.6 12.8 6.3.3 5-7.9 5.6-12.8.9-7.2.2-14.3-1.6-21.3-1.2-4.8-2.1-9.7 1-13.9.7-.9 1.6-1.7 2.6-2.4 1.2-.8 3-.8 4.3-.6 11.5 2.1 10.6-5.2 10.2-12.6-.7-14.2-5.8-26-17-35.2z"
              ></path>
              <path
                d="M57.6 128.4c1.5-2.3 3.7-6.5 3.6-11.2-.2-5.8-4-10.6-5.4-12.2-.3-.3-.7-.3-1 0-1.2 1.5-4.4 6.1-4.2 11.8.1 3.7 3 8.4 4.8 10.8-.2 2-.2 4 0 5.5v.2c-4.4-2.4-8.9-5.5-12.9-9.7-.1-.2-.2-.3-.4-.4-1.5-1.6-2.9-3.2-4.1-5.1-.3-.4-.5-.8-.8-1.2-.8-2.6-.5-5.5.9-7.9 2.7-.7 6.4-2.2 9.1-5.2 4-4.3 4.6-10.5 4.7-12.5 0-.4-.3-.6-.7-.6-2 .3-8 1.5-12 5.8-2.6 2.7-3.4 8.2-3.2 11.6-.7 1.3-1.2 2.8-1.4 4.2-2.5-5-4.2-10.6-4.9-16.6.1-3 1.7-5.7 3.9-6.9 2.1-.1 5.5-.6 8.1-2.7 3.2-2.6 4.2-6.9 4.5-8.7.1-.4-.2-.8-.7-.8-1.7 0-6.2.1-9.3 2.7-2.8 2.3-3.9 5.9-4.3 8-1 .7-1.9 1.6-2.5 2.6-.2-5.6.4-11.7 1.6-18.1 1.8-.5 5.6-2.1 8.1-5 3.2-3.6 3.8-8.4 3.8-10.3 0-.4-.4-.7-.8-.7-1.9.4-5.9 1.8-9.4 5.2-2.6 2.6-3.4 6.4-3.6 8.5-2 9.5-2.6 18.2-1.6 26.1v.2c-1.1-1.4-2.3-2.7-3.4-3.8-.1-2.4-.7-6.2-3.1-9.2-3.1-3.9-8.2-5.1-9.9-5.4-.3-.1-.6.2-.7.5-.1 1.7 0 6.6 3 10.4 1.8 2.3 5.7 3.9 8.3 4.6 2.5 1.7 6 6.4 6.9 9.1 1.3 5.7 3.5 10.9 6.6 15.6v.1c.3.5.6 1 .9 1.4l.9 1.2c-1.3-.4-2.7-.8-4.1-.8-.1-.2-.1-.4-.3-.6-1.9-2.3-5.4-5.6-9.1-6.2-5.6-1-10.9 1.6-12.8 2.7-.4.2-.5.8-.2 1.2 1.5 1.7 5.6 5.8 11.2 6.8 3.8.6 7.5-.4 10.1-1.4.1-.1.2-.2.3-.2 3.2-.3 7.5 2 8.4 2.7 5.5 5.9 11.9 9.8 17.6 12.4-.6.4-1.6.8-3.1 1.1-5-3.4-12.7-4-16.4-3.2-7.8 1.8-12.9 7.4-14.5 9.6-.3.4-.2.9.3 1.1 2.4 1.2 10.2 4.6 18 2.8 5.8-1.4 10.3-5.2 12.9-8.1v-.1c1.2-.2 2.3-.5 3.2-.9.9-.4 1.5-.9 1.9-1.3 7.5 3.1 13.4 4 13.9 4l.3-2.2c-.1 0-7.7-1.1-16.5-5.4-.2 0-.8-2.1-.5-5.9z"
              ></path>
              <path
                d="M190.1 115.9c-1.9-1.1-7.3-3.7-12.8-2.7-3.7.7-7.2 3.9-9.1 6.2l-.3.6c-1.4 0-2.8.3-4.1.8l.9-1.2c.3-.5.6-1 .9-1.4v-.1c3-4.7 5.2-9.9 6.6-15.6.9-2.6 4.4-7.4 6.9-9.1 2.5-.7 6.4-2.3 8.3-4.6 3-3.8 3.1-8.7 3-10.4 0-.3-.3-.6-.7-.5-1.7.3-6.8 1.5-9.9 5.4-2.4 3-3 6.8-3.1 9.2-1.2 1-2.4 2.3-3.4 3.8v-.2c.9-7.9.4-16.6-1.6-26.1-.2-2.1-1-5.9-3.6-8.5-3.5-3.4-7.5-4.9-9.4-5.2-.4-.1-.8.2-.8.7 0 1.9.6 6.7 3.8 10.3 2.6 2.9 6.3 4.4 8.1 5 1.3 6.4 1.8 12.4 1.6 18.1-.7-1.1-1.5-2-2.5-2.6-.4-2-1.5-5.6-4.3-8-3.2-2.6-7.6-2.8-9.3-2.7-.4 0-.7.4-.7.8.3 1.7 1.3 6 4.5 8.7 2.6 2.1 6 2.6 8.1 2.7 2.2 1.2 3.7 3.9 3.9 6.9-.7 6.1-2.4 11.6-4.9 16.6-.2-1.5-.7-2.9-1.4-4.2.2-3.4-.6-8.9-3.2-11.6-4-4.2-10-5.5-12-5.8-.4-.1-.7.2-.7.6.1 2 .7 8.2 4.7 12.5 2.7 3 6.4 4.4 9.1 5.2 1.4 2.4 1.7 5.2.9 7.9-.3.4-.5.8-.8 1.2-1.3 1.8-2.7 3.5-4.1 5.1l-.4.4c-4 4.2-8.5 7.4-12.9 9.7v-.2c.2-1.6.2-3.5 0-5.5 1.8-2.4 4.7-7 4.8-10.8.2-5.7-3-10.3-4.2-11.8-.2-.3-.7-.3-1 0-1.4 1.6-5.2 6.3-5.4 12.2-.2 4.7 2.1 8.9 3.6 11.2.3 3.7-.2 5.8-.5 6.4-8.9 4.3-16.5 5.4-16.6 5.4l.3 2.2c.5-.1 6.4-.9 13.9-4 .4.4.9.9 1.9 1.3.9.4 2 .7 3.2.9v.1c2.6 2.8 7.1 6.7 12.9 8.1 7.8 1.8 15.6-1.6 18-2.8.4-.2.5-.7.3-1.1-1.6-2.2-6.7-7.8-14.5-9.6-3.7-.8-11.3-.2-16.4 3.2-1.5-.3-2.5-.7-3.1-1.1 5.7-2.6 12.1-6.6 17.6-12.4.9-.8 5.1-3 8.4-2.7.1.1.2.2.3.2 2.6 1.1 6.3 2.1 10.1 1.4 5.6-.9 9.8-5.1 11.2-6.8.4-.9.3-1.4-.1-1.7z"
              ></path>
            </g>
          </svg>
          <p>2023</p>
        </div>
        <h1>PRICKLES & CO.</h1>
        <h3>
          Bring Nature
          <br />
          Indoors
        </h3>
        <Link className="button" to="/shop">Shop Now</Link>
      </section> 
  );
};

const HomeCategories: React.FC = () => {
  return (
        <section className="featured">
            {categories.map(e=><div className="category" key={e.name}>
                <img src={require(`../img/${e.thumbnail}`)} alt={`Shop ${e.name}`} />
                <a href={`./shop/${e.name}`} className="category-name"><h4>{e.name}</h4></a>
                <span className="underline">_</span>
                <a className="button" href={`./shop/${e.name}`}>Shop Collection</a>
            </div>)}
      </section>
  );
};

const HomeAbout: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  return (
        <section className="about-us" id="about" ref={elementRef}>
        <div className="about-text">
          <h2>About us</h2>
          <span className="underline">_</span>
          <br />
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <br />
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide.
          </p>
        </div>
        <div className="one-column img-container">
          <img
            src={require('../img/plants_in_bathroom.png')}
            alt="Plants in your bathroom"
          />
        </div>
        <div className="one-column img-container">
          <img src={require('../img/holding_a_leaf.png')} alt="Green leaf" />
        </div>
        <div className="img-container">
          <img src={require('../img/girl-in-garden.png')} alt="Lady in green garden" />
        </div>
        <div className="special-offer">
          <h2>BUY ONLINE NOW & GET 10% OFF !</h2>
          <Link className="button" to="./shop">Shop Now</Link>
        </div>
      </section>
  );
};

const Home: React.FC = () => {
  return (
          <main>
              <HomeHero /> 
              <HomeCategories />      
              <HomeAbout />
              <ContactUs />
          </main>
  );
};

export default Home;

