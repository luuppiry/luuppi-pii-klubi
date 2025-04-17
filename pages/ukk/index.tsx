import type { NextPage } from "next";
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
  return (
    <Layout>
      <Text>
      <div>
        <h2>Usein Kysytyt Kysymykset</h2>

        <Section>
          <h3>Löytötavarat</h3>
          <p>
            Löytötavaroita voi tulla kysymään Pii-Klubilta Luupin toimiston
            aukioloaikoina tiistaista torstaihin klo 12.00-14.00. Mikäli et
            pääse paikalle, voit myös laittaa sähköpostia{" "}
            <a href="mailto:toimitila@luuppi.fi">toimitila@luuppi.fi</a>.
          </p>
        </Section>

        <Section>
          <h3>Avainten luovutus</h3>
          <p>
            <strong>Kuinka/koska saan avaimet?</strong>
            <br />
            Avainten luovutus tapahtuu oletuksena vuokrauksen aloitusaikaan
            Pii-Klubilla.
          </p>
          <p>
            <strong>Voinko valtuuttaa toisen ihmisen noutamaan avaimet?</strong>
            <br />
            Kyllä, ilmoita tästä{" "}
            <a href="mailto:toimitila@luuppi.fi">toimitila@luuppi.fi</a>.
          </p>
          <p>
            <strong>Kuinka/koska palautan avaimet?</strong>
            <br />
            Avaimet jätetään palautelaatikkoon, joka osoitetaan avainten
            luovutuksen yhteydessä.
          </p>
          <p>
            <strong>Pääseekö tilaa katsomaan?</strong>
            <br />
            Tilaa pääsee katsomaan Luupin toimiston aukioloaikoina tiistaista
            torstaihin klo 12.00-14.00. Ilmoitathan tulostasi etukäteen{" "}
            <a href="mailto:hallitus@luuppi.fi">hallitus@luuppi.fi</a>. Mikäli
            et pääse annettuina aukioloaikoina, laita sähköpostia{" "}
            <a href="mailto:toimitila@luuppi.fi">toimitila@luuppi.fi</a>{" "}
            erillisen esittelyajan varaamiseksi.
          </p>
        </Section>

        <Section>
          <h3>Laskutus</h3>
          <p>
            <strong>Mihin saan laskun?</strong>
            <br />
            Lasku toimitetaan varauksen yhteydessä ilmoitettuun sähköpostiin tai
            verkkolaskutusosoitteeseen.
          </p>
          <p>
            <strong>Milloin saan laskun?</strong>
            <br />
            Laskut lähetetään noin kahden viikon kuluessa vuokrauksesta.
          </p>
        </Section>

        <Section>
          <h3>Siivous</h3>
          <p>
            <strong>Löytyykö tilasta siivoustarvikkeita?</strong>
            <br />
            Kyllä. Tilasta löytyy yleis- ja loppusiivoukseen sopivat tarvikkeet.
          </p>
          <p>
            <strong>Kuinka tilaan loppusiivouksen vuokraukselleni?</strong>
            <br />
            Siivouksen voi varata sähköpostilla{" "}
            <a href="mailto:info@juniperlux.fi">info@juniperlux.fi</a>.
          </p>
          <p>
            <strong>Onko loppusiivousta pakko tilata?</strong>
            <br />
            Ei ole. Loppusiivous on mahdollista tehdä myös itse Pii-Klubilta
            löytyvillä tarvikkeilla.
          </p>
          <p>
            <strong>Mitä loppusiivous maksaa?</strong>
            <br />
            Loppusiivous maksaa 135€ (sis. ALV).
          </p>
          <p>
            <strong>Onko loppusiivoukseni vahvistettu?</strong>
            <br />
            Emme vastaa siivouksesta, joten kyselyt loppusiivouksista
            osoitteeseen{" "}
            <a href="mailto:info@juniperlux.fi">info@juniperlux.fi</a>.
          </p>
        </Section>

        <Section>
          <h3>Saako tilassa…</h3>
          <p>
            <strong>Käyttää savukoneita?</strong>
            <br />
            Ei.
          </p>
          <p>
            <strong>Tuoda eläimiä?</strong>
            <br />
            Lemmikkejä ei Pii-Klubille saa tuoda, mutta viralliset
            avustajakoirat ovat sallittuja. Poikkeustapauksissa ota yhteyttä{" "}
            <a href="mailto:toimitila@luuppi.fi">toimitila@luuppi.fi</a>.
          </p>
          <p>
            <strong>Tupakoida?</strong>
            <br />
            Ei. Tupakoida saa vain ulkona sille merkityllä paikalla.
          </p>
        </Section>

        <Section>
          <h3>Löytyykö tilasta…</h3>
          <p>
            <strong>Wifi?</strong>
            <br />
            Kyllä. Wifin tiedot löytyvät vaaleanpunaisesta vuokraajan kansiosta
            Pii-Klubilla.
          </p>
          <p>
            <strong>Äänentoistolaitteet?</strong>
            <br />
            Kyllä. Pii-Klubilta löytyy kaksi RCF Art 412A -diskantti + RCF Sub
            705-AS -subwoofer -yhdistelmää, joilla saa musiikin kuulumaan
            laadukkaasti ja selkeästi koko juhlasaliin. Äänentoistoon voi
            yhdistää AUX:n tai Bluetoothin kautta.
          </p>
          <p>
            <strong>Mikrofonit?</strong>
            <br />
            Kyllä, Pii-Klubilta löytyy kaksi mikrofonia, jotka ovat
            yhdistettynä äänentoistojärjestelmään.
          </p>
        </Section>
      </div>
      </Text>
    </Layout>
  );
};

export default Ukk;
