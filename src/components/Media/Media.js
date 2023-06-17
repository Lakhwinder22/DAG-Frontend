import React from 'react';
import BS from '../../images/BS.jpg';
import TodayIndia from '../../images/TodayIndia.png';
import ThePrint from '../../images/ThePrint.webp';
import CNBC from '../../images/CNBC.png';


const Media = () => {
  return (
    <div className="MediaMain">
      <div>
      <h1 className="Mediaheading">Media Coverage</h1>
      </div>
      
      <div className="News">
        <div>
          <a 
            target="_self"
            href="https://www.business-standard.com/content/press-releases-ani/study-abroad-2021-22-direct-admission-platform-helping-students-in-pandemic-121071700755_1.html">
            <img
              src={BS}
              height={130} alt='MBA fresher packages'
            />
          </a>
        </div>
        <div>
          <a
            target="_self"
            href="https://www.indiatoday.in/impact-feature/story/top-10-iconic-leaders-of-2022-2297516-2022-11-15">
            <img
              src={TodayIndia}
              height={130} alt='MBA fresher packages'
            />
          </a>
        </div>
        <div>
          <a
            target="_self"
            href="https://www.edudag.com/wp-content/uploads/2022/09/the-print.jpg">
            <img
              src={ThePrint}
              height={130} alt='MBA fresher packages'
            />
          </a>

        </div>
        <div>
          <a target="_self" href="https://www.youtube.com/watch?v=oP9BEDDNqL4">
            <img
              src={CNBC}
              height={130} alt='MBA fresher packages'
            />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Media;
