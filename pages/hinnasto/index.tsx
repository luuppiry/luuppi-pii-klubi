import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import styled from "styled-components";
import SideImageLayout from "../../components/sideImageLayout";

const Overline = styled.span`
  text-decoration: line-through;
`;

const Hinnasto: NextPage = () => {
  const { t } = useTranslation("hinnasto");

  return (
    <SideImageLayout>
      <div>
        <h2>{t("heading")}</h2>
        <p>
          {t("tiers.companies.label")}: <br />
          {t("tiers.companies.weekday")}
          <br />
          {t("tiers.companies.weekend")}
        </p>
        <p>
          {t("tiers.associations.label")}:
          <br />
          {t("tiers.associations.weekday")}
          <br />
          {t("tiers.associations.weekend")}
        </p>
        <p>
          {t("tiers.luuppiStudents.label")}:
          <br />
          {t("tiers.luuppiStudents.weekday")}
          <br />
          {t("tiers.luuppiStudents.weekend")}
        </p>
        <p>
          <Trans
            t={t}
            i18nKey="notes.availabilityPre"
            components={{ 1: <a href="mailto: toimitila@luuppi.fi" /> }}
          />{" "}
          <br />
          {t("notes.wappu")} <br />
          <br />
          {t("notes.seasonalFee")} <br />
          <br />
          {t("notes.membership")}
        </p>
      </div>
    </SideImageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["hinnasto", "common"])),
  },
});

export default Hinnasto;
