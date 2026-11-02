import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const SwitcherLink = styled.a`
  margin-left: 1rem;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }

  @media (max-width: 950px) {
    margin-left: 0;
    padding-top: 3rem;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    padding-top: 2rem;
    font-size: 1.1rem;
  }
`;

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { pathname, query, locale } = router;
  const targetLocale = locale === "fi" ? "en" : "fi";

  return (
    <Link href={{ pathname, query }} locale={targetLocale} passHref>
      <SwitcherLink>{t(`language.${targetLocale}`)}</SwitcherLink>
    </Link>
  );
};

export default LanguageSwitcher;
