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

type FaqItem = {
  question?: string;
  answer: string;
  link?: string;
};

type FaqSection = {
  heading: string;
  items: FaqItem[];
};

const Ukk: NextPage = () => {
  const { t } = useTranslation("ukk");
  const sections = t("sections", { returnObjects: true }) as FaqSection[];

  return (
    <Layout>
      <Text>
      <div>
        <h2>{t("heading")}</h2>

        {sections.map((section) => (
          <Section key={section.heading}>
            <h3>{section.heading}</h3>
            {section.items.map((item) => (
              <p key={item.question ?? item.answer}>
                {item.question && (
                  <>
                    <strong>{item.question}</strong>
                    <br />
                  </>
                )}
                {item.link ? (
                  <Trans
                    defaults={item.answer}
                    components={{ 1: <a href={item.link} /> }}
                  />
                ) : (
                  item.answer
                )}
              </p>
            ))}
          </Section>
        ))}
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
