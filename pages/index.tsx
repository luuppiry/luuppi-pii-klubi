/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/layout";
import FrontpageInfo from "../components/frontpageInfo";
import styled from "styled-components";
import Link from "next/link";
import Kansikuva from "../public/images/kansikuva.jpg";

const HeaderImage = styled.img`
  height: 25rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    height: 15rem;
  }
`;

const Lift = styled.div`
  background: #8980f1;
  padding: 2rem 20%;
  color: #f8f7fe;
  font-weight: 600;
  text-align: center;
  margin-top: -0.5rem;
  @media (max-width: 600px) {
    padding: 2rem 10%;
  }
`;

const Home: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div>
      <Layout>
        <>
          <HeaderImage src={Kansikuva} alt="kansikuva" />

          <Lift>
            <h2>{t("lift.heading")}</h2>
            <p>{t("lift.text")}</p>
            <Link href="/tilat" passHref>
              <button>{t("common:buttons.exploreSpaces")}</button>
            </Link>
          </Lift>
          <FrontpageInfo />
        </>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["home", "common"])),
  },
});

export default Home;
