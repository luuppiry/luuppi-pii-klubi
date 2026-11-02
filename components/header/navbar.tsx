import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { navLinks } from "./navLinks";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./languageSwitcher";

interface NavItemProps {
  isActive?: boolean;
}

const NavbarContainer = styled.div`
  display: flex;
  @media (max-width: 950px) {
    flex-direction: column;
    padding: 4rem;
  }
  @media (max-width: 600px) {
    padding: 3rem;
  }
`;

const NavItem = styled.a<NavItemProps>`
  margin-right: 2rem;
  :last-child {
    margin: 0;
  }
  border-bottom: ${(p) => (p.isActive ? "0.15rem #474747 solid" : "none")};

  :hover {
    color: #8980f1;
    border-bottom: ${(p) => (p.isActive ? "0.15rem #8980f1 solid" : "none")};
  }

  @media (max-width: 950px) {
    margin-right: auto;
    :last-child {
      margin-right: auto;
    }
    padding-top: 3rem;
    font-size: 2rem;
    border-bottom: ${(p) => (p.isActive ? "0.15rem #f7f7fe solid" : "none")};
  }
  @media (max-width: 600px) {
    padding-top: 2rem;
    font-size: 1.5rem;
  }
`;

const Navbar: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <NavbarContainer>
      {navLinks.map((link) => {
        return (
          <Link href={link.path} key={link.key} passHref>
            <NavItem isActive={router.pathname === link.path ? true : false}>
              {t(`nav.${link.key}`)}
            </NavItem>
          </Link>
        );
      })}
      <LanguageSwitcher />
    </NavbarContainer>
  );
};

export default Navbar;
