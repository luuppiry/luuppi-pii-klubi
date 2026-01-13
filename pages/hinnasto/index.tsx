import type { NextPage } from "next";
import styled from "styled-components";
import SideImageLayout from "../../components/sideImageLayout";

const Overline = styled.span`
  text-decoration: line-through;
`;

const Hinnasto: NextPage = () => {
  return (
    <SideImageLayout>
      <div>
        <h2>Hinnasto</h2>
        <p>
          Yritykset, yksityishenkilöt: <br />
          Su-To: 700€
          <br />
          Pe-La: 790€
        </p>
        <p>
		  Ainejärjestöt/killat, korkeakouluopiskelijat ja Luuppi-alumnit:
          <br />
          Su-To: 560€
          <br />
          Pe-La: 650€
        </p>
        <p>
          Luuppi-opiskelijat*:
          <br />
          Su-To: 420€
		  <br />
          Pe-La: 510€
        </p>
        <p>
		  Mikäli olet saanut varausvahvistuksen ennen 13.1.2026, käytetään vuokrauksessa vanhaa hinnastoa. <br />
		  <br />
		  HUOM! Maanantaisin, tiistaisin ja keskiviikkoisin tila ei ole oletusarvoisesti varattavissa. 
		  Voit kuitenkin kysellä mahdollisuuksia <a href="mailto: toimitila@luuppi.fi">toimitila@luuppi.fi!</a> <br />
		  Wapun aikana (13.4. - 1.5.) tila on varattavissa viikon jokaisena päivänä. <br />
		  <br />
		  Hintoihin lisätään sesonkilisä 100€ marras- ja joulukuussa. <br />
		  Vuokraus sisältää 12h vuokra-aikaa, jonka jälkeen lisätunteja on mahdollista ostaa hintaan 50€/alkava 4h. <br />
		  <br />
		  *Luupin jäsenet, joilla on aktiivinen opiskeluoikeus.
        </p>
      </div>
    </SideImageLayout>
  );
};

export default Hinnasto;
