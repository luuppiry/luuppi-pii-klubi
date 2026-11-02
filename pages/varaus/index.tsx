import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SideImageLayout from "../../components/sideImageLayout";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  max-width: 50%;
  height: 100%;
  margin-left: 1rem;
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Varaus: NextPage = () => {
  const { t } = useTranslation("varaus");
  const { locale } = useRouter();

  return (
    <SideImageLayout>
      <>
        <h2>{t("heading")}</h2>
        <ContentWrapper>
          <div>
            <p>
              <Trans
                t={t}
                i18nKey="intro"
                components={{
                  1: (
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScoZGF-itX2lWG6HJFpD33blNMHZCCeC3GtM6LWs9FCUpsT_Q/viewform" />
                  ),
                  2: <a href="mailto: toimitila@luuppi.fi" />,
                }}
              />
            </p>
            <p>
              <Trans
                t={t}
                i18nKey="cleaning"
                components={{ 1: <a href="mailto: info@juniperlux.fi" /> }}
              />
            </p>
            <p>{t("legend")}</p>
          </div>
          {process.browser && (
            <CalendarWrapper>
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  googleCalendarPlugin,
                  interactionPlugin,
                ]}
                initialView="dayGridMonth"
                googleCalendarApiKey="AIzaSyCdZG-_vkWwYv-jB_yHQmZyM76l-EATdmo"
                locale={locale}
                firstDay={1}
                events={{
                  googleCalendarId:
                    "c_aerqhho5i105mtqsm2lcv4oaac@group.calendar.google.com",
                  color: "#8980F1",
                  textColor: "#8980F1",
                  defaultAllDay: true,
                }}
                height={"auto"}
                headerToolbar={{
                  end: "prev,next",
                }}
              />
            </CalendarWrapper>
          )}
        </ContentWrapper>
      </>
    </SideImageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ["varaus", "common"])),
  },
});

export default Varaus;
