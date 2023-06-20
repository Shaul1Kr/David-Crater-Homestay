import { useEffect, useState } from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import img1 from "../assets/Pictures/IMG1.jpg";
import img2 from "../assets/Pictures/IMG2.jpg";
import img3 from "../assets/Pictures/IMG3.jpg";
import img4 from "../assets/Pictures/IMG4.jpg";

const images = [img1, img2, img3, img4];

const Page = styled.div`
  background-color: blue;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff; /* Text color */
  font-size: 10rem; /* Text font size */
`;
const ExploreOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #a79f9f; /* Text color */
  font-size: 1.5rem; /* Text font size */
  text-decoration-line: underline;
  cursor: pointer;
`;

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <Page>
      <Header />
      <ImageContainer>
        <Image src={images[currentIndex]} alt="img" />
        <TextOverlay>David Crater Homestay</TextOverlay>
        <ExploreOverlay>Explore the BEST hostel in Lushoto</ExploreOverlay>
      </ImageContainer>
    </Page>
  );
};

export default HomePage;
