import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosSearch } from 'react-icons/io';

export default function App() {
  return (
    <>
        <main>
          <nav>
            <h1>Comcast</h1>
            <RxHamburgerMenu size="1.6rem" id="hamburger-menu" />
            <div className="search-icon-wrapper">
              <IoIosSearch size="1.6rem" id="search-icon" />
            </div>
          </nav>
          <div className="bottom-main-wrapper">
            <p className="bottom-main-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              atque distinctio odio illum veniam. Vitae, asperiores architecto
              deleniti ratione tempora animi sed quae non odio reiciendis ipsam
              ullam hic molestias.
            </p>
            <div className="bottom-main">
              <div>See More</div>
              <IoIosArrowRoundForward size="3rem" />
            </div>

            <div className="bottom-main-text-wrapper">
              <div>
                Comcast to Deliver Multi-Gig Symmetrical Speeds in World-First
                DOCSIS 4.0 Deployment
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur, enim.
              </div>
              <div>
                This site is responsive for mobile and desktop devices
              </div>
            </div>
          </div>
          <div className='color-wrapper'>
            <div style={{height: '5px', backgroundColor: 'yellow'}}></div>
            <div style={{height: '5px', backgroundColor: 'orange'}}></div>
            <div style={{height: '5px', backgroundColor: 'red'}}></div>
            <div style={{height: '5px', backgroundColor: 'purple'}}></div>
            <div style={{height: '5px', backgroundColor: 'blue'}}></div>
            <div style={{height: '5px', backgroundColor: 'Green'}}></div>





          </div>
        </main>
    </>
  );
}
