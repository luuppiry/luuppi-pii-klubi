/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import Layout from "../../components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Kansikuva from "../../public/images/kansikuva.jpg";
import Sauna from "../../public/images/sauna-min.jpg";
import Sali from "../../public/images/sali-min.jpg";
import Parvi1 from "../../public/images/parvi1-min.jpg";
import Parvi2 from "../../public/images/parvi2-min.jpg";
import Pesutilat1 from "../../public/images/pesutilat1-min.jpg";
import Pesutilat2 from "../../public/images/pesutilat2-min.jpg";
import Pukuhuone from "../../public/images/pukuhuone-min.jpg";

const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25rem 33rem 33rem;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeaderImage = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
  @media (max-width: 600px) {
    height: 15rem;
  }
`;

const CarouselImage = styled.img`
  height: 33rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 950px) {
    height: 25rem;
  }
  @media (max-width: 600px) {
    height: 20rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
  .thumbs-wrapper,
  .carousel-status {
    display: none;
  }
  .control-arrow {
    height: 100%;
  }
  .dot {
    box-shadow: 2px 2px 3px rgb(0 0 0 / 50%) !important;
  }
`;

const FirstCarousel = styled(StyledCarousel)`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
`;
const SecondCarousel = styled(StyledCarousel)`
  grid-column: 2 / span 2;
  grid-row: 3 / span 1;
`;

const FirstText = styled.div`
  background: #8980f1;
  padding: 2rem;
  color: #f8f7fe;
  font-weight: 600;
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
`;

const SecondText = styled.div`
  padding: 2rem;
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
`;

const Tilat: NextPage = () => {
  const { t } = useTranslation(["tilat", "common"]);

  return (
    <Layout>
      <BaseGrid>
        <HeaderImage src={Kansikuva} alt="kansikuva" />
        <FirstCarousel>
          <div>
            <CarouselImage src={Sali} alt="Sali" />
          </div>
          <div>
            <CarouselImage src={Parvi1} alt="Parvi" />
          </div>
          <div>
            <CarouselImage src={Parvi2} alt="Parvi" />
          </div>
        </FirstCarousel>
        <FirstText>
          <p>{t("intro")}</p>
          <p>{t("noLicense")}</p>
          <Link href="/varaus" passHref>
            <button>{t("common:buttons.bookSpace")}</button>
          </Link>
        </FirstText>
        <SecondCarousel>
          <div>
            <CarouselImage src={Sauna} alt="keittiö" />
          </div>
          <div>
            <CarouselImage src={Pesutilat1} alt="Pesutilat" />
          </div>
          <div>
            <CarouselImage src={Pesutilat2} alt="Pesutilat" />
          </div>
          <div>
            <CarouselImage src={Pukuhuone} alt="Pukuhuone" />
          </div>
        </SecondCarousel>
        <SecondText>
          <h2>{t("equipment.heading")}</h2>
          <p>{t("equipment.intro")}</p>
          <ul>
            {(t("equipment.items", { returnObjects: true }) as string[]).map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
        </SecondText>
      </BaseGrid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["tilat", "common"])),
  },
});

export default Tilat;
