import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import Layout from "../../components/layout";

const Text = styled.div`
  margin: 3rem;
  @media (max-width: 750px) {
    margin: 3rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 2rem 1rem;
  }
`;

type Section = {
  heading: string;
  text?: string;
  items?: string[];
};

const Hinnasto: NextPage = () => {
  const { t } = useTranslation("varausehdot");
  const sections = t("sections", { returnObjects: true }) as Section[];

  return (
    <Layout>
      <Text>
        <h2>{t("heading")}</h2>

        <p>{t("disclaimer")}</p>

        {sections.map((section) => (
          <div key={section.heading}>
            <h3>{section.heading}</h3>
            {section.text && <p>{section.text}</p>}
            {section.items && (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Text>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["varausehdot", "common"])),
  },
});

export default Hinnasto;
