import Navbar from "../../components/navbar/Navbar";
import HomeBannar from "../../components/home_bannar/HomeBannar";
import Destination from "../../components/destination/DestinationSections";
import LayoutContainer from "../../components/layout/LayoutContainer";
import VideoSection from "../../components/video_section/VideoSection";
import Branding from "../../components/banding_section/Branding";
import TripsSection from "../../components/trips_section/TripsSection";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBannar />
      <LayoutContainer>
        <Destination />
      </LayoutContainer>
      <VideoSection />
      <Branding />
      <LayoutContainer>
        <TripsSection />
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default Home;
