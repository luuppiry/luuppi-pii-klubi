import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import SideImageLayout from "../../components/sideImageLayout";

const Yhteystiedot: NextPage = () => {
  const { t } = useTranslation("yhteystiedot");
  const [mapWidth, getDimension] = useState(0);

  const setDimension = () => {
    const width = window.innerWidth;
    if (width < 500) {
      getDimension(width - 50);
    } else if (width < 950) {
      getDimension(width - 100);
    } else {
      getDimension((width / 3) * 2 - 100);
    }
  };

  useEffect(() => {
    setDimension();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [mapWidth]);

  return (
    <SideImageLayout>
      <div>
        <h2>{t("heading")}</h2>
        <p>
          {t("hours.label")} <br />
          <Trans
            t={t}
            i18nKey="hours.text"
            components={{ 1: <a href="https://t.me/LuupinTiedotus" /> }}
          />
        </p>
        <p>
          {t("team")}{" "}
          <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi</a>
          <br />
          {t("address")}
          <br />
          <a href="https://www.luuppi.fi" target="_blank" rel="noreferrer">
            www.luuppi.fi
          </a>
        </p>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1udxC-9jUfnpF5-bZyxiT3SlEcPMRnAh9&ehbc=2E312F"
          width={mapWidth}
          height="500"
        ></iframe>
      </div>
    </SideImageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["yhteystiedot", "common"])),
  },
});

export default Yhteystiedot;
