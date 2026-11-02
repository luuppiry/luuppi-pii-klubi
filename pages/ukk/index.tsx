import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import styled from "styled-components";
import Layout from "../../components/layout";

const Section = styled.div`
  margin-bottom: 2rem;
`;
const Text = styled.div`
  margin: 3rem;
  @media (max-width: 750px) {
    margin: 3rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 2rem 1rem;
  }
`;

const Ukk: NextPage = () => {
  const { t } = useTranslation("ukk");

  return (
    <Layout>
      <Text>
      <div>
        <h2>{t("heading")}</h2>

        <Section>
          <h3>{t("lostItems.heading")}</h3>
          <p>
            <Trans
              t={t}
              i18nKey="lostItems.text"
              components={{ 1: <a href="mailto:toimitila@luuppi.fi" /> }}
            />
          </p>
        </Section>

        <Section>
          <h3>{t("keys.heading")}</h3>
          <p>
            <strong>{t("keys.when.question")}</strong>
            <br />
            {t("keys.when.answer")}
          </p>
          <p>
            <strong>{t("keys.delegate.question")}</strong>
            <br />
            <Trans
              t={t}
              i18nKey="keys.delegate.answer"
              components={{ 1: <a href="mailto:toimitila@luuppi.fi" /> }}
            />
          </p>
          <p>
            <strong>{t("keys.return.question")}</strong>
            <br />
            {t("keys.return.answer")}
          </p>
          <p>
            <strong>{t("keys.viewing.question")}</strong>
            <br />
            <Trans
              t={t}
              i18nKey="keys.viewing.answer"
              components={{ 1: <a href="mailto:toimitila@luuppi.fi" /> }}
            />
          </p>
        </Section>

        <Section>
          <h3>{t("billing.heading")}</h3>
          <p>
            <strong>{t("billing.where.question")}</strong>
            <br />
            {t("billing.where.answer")}
          </p>
          <p>
            <strong>{t("billing.when.question")}</strong>
            <br />
            {t("billing.when.answer")}
          </p>
        </Section>

        <Section>
          <h3>{t("cleaning.heading")}</h3>
          <p>
            <strong>{t("cleaning.supplies.question")}</strong>
            <br />
            {t("cleaning.supplies.answer")}
          </p>
          <p>
            <strong>{t("cleaning.booking.question")}</strong>
            <br />
            <Trans
              t={t}
              i18nKey="cleaning.booking.answer"
              components={{ 1: <a href="mailto:info@juniperlux.fi" /> }}
            />
          </p>
          <p>
            <strong>{t("cleaning.mandatory.question")}</strong>
            <br />
            {t("cleaning.mandatory.answer")}
          </p>
          <p>
            <strong>{t("cleaning.price.question")}</strong>
            <br />
            {t("cleaning.price.answer")}
          </p>
          <p>
            <strong>{t("cleaning.confirmed.question")}</strong>
            <br />
            <Trans
              t={t}
              i18nKey="cleaning.confirmed.answer"
              components={{ 1: <a href="mailto:info@juniperlux.fi" /> }}
            />
          </p>
        </Section>

        <Section>
          <h3>{t("allowed.heading")}</h3>
          <p>
            <strong>{t("allowed.smokeMachines.question")}</strong>
            <br />
            {t("allowed.smokeMachines.answer")}
          </p>
          <p>
            <strong>{t("allowed.animals.question")}</strong>
            <br />
            <Trans
              t={t}
              i18nKey="allowed.animals.answer"
              components={{ 1: <a href="mailto:toimitila@luuppi.fi" /> }}
            />
          </p>
          <p>
            <strong>{t("allowed.smoking.question")}</strong>
            <br />
            {t("allowed.smoking.answer")}
          </p>
        </Section>

        <Section>
          <h3>{t("available.heading")}</h3>
          <p>
            <strong>{t("available.wifi.question")}</strong>
            <br />
            {t("available.wifi.answer")}
          </p>
          <p>
            <strong>{t("available.soundSystem.question")}</strong>
            <br />
            {t("available.soundSystem.answer")}
          </p>
          <p>
            <strong>{t("available.microphones.question")}</strong>
            <br />
            {t("available.microphones.answer")}
          </p>
        </Section>
      </div>
      </Text>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["ukk", "common"])),
  },
});

export default Ukk;
