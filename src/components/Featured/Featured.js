import { UserCard } from 'react-ui-cards';
import { useMediaQuery } from 'react-responsive';
import sagar1 from '../../images/sagar1.jfif';
import DAGLOGO from '../../images/DAGLOGO.png';
import study from '../../images/study.jpg';
import reason from '../../images/reason.jpg';

export const Featured = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="featured-container">
      <div className="Featuredmain">
        <div>
          <h1 className="Featuredheader"><strong>Featured Articles</strong></h1>
        </div>
        <div className={`Featured ${isMobile ? 'Featured-mobile' : ''}`}>
          <UserCard
            className="FeaturedCard"
            float
            href=""
            header={sagar1}
            name="SAGAR SRIVASTAVA AS ONE OF THE TOP 10 ICONIC LEADERS OF 2022"
          />
          <UserCard
            className="FeaturedCard"
            float
            href=""
            header={DAGLOGO}
            name="ENROLL ON YOUR DREAM COURSE OF MBA IN THE US AND UK WITH DAG"
          />
          <UserCard
            className="FeaturedCard"
            float
            href=""
            header={study}
            name="STUDY ABROAD 21-22 DAG PLATFORM HELPING STUDENTS IN PANDEMIC"
          />
          <UserCard
            className="FeaturedCard"
            float
            href=""
            header={reason}
            name="5 REASONS TO STUDY ABROAD"
          />
        </div>
      </div>
    </div>
  );
};
