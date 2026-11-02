import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import styled from "styled-components";
import SideImageLayout from "../../components/sideImageLayout";

const Overline = styled.span`
  text-decoration: line-through;
`;

type Tier = {
  label: string;
  weekday: string;
  weekend: string;
};

const Hinnasto: NextPage = () => {
  const { t } = useTranslation("hinnasto");
  const tiers = t("tiers", { returnObjects: true }) as Tier[];

  return (
    <SideImageLayout>
      <div>
        <h2>{t("heading")}</h2>
        {tiers.map((tier) => (
          <p key={tier.label}>
            {tier.label}: <br />
            {tier.weekday}
            <br />
            {tier.weekend}
          </p>
        ))}
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
