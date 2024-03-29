import React, { useState } from "react";
import { Web, Asosiy, AnaMin, Analitika, Ichki, Icon, Img, BirXil, Container, ChevronRight, Main, Profil, Name, Gmail } from "./style";

const CrmMin = () => {
  const [showWeb, setShowWeb] = useState(false);
  const [showTalabalar, setShowTalabalar] = useState(false);
  const [showLidlar, setShowLidlar] = useState(false);
  const [showGuruhlar, setShowGuruhlar] = useState(false);
  const [showKurslar, setShowKurslar] = useState(false);
  const [showHr, setShowHr] = useState(false);
  const [showSozlamalar, setShowSozlamalar] = useState(false);

  const cancelHandler = () => {
    setShowWeb(false);
  };

  const saveHandler = () => {
    setShowWeb(false);
  };

  const inOpen = (type) => {
    switch (type) {
      case "talabalar":
        setShowTalabalar(!showTalabalar);
        break;
      case "lidlar":
        setShowLidlar(!showLidlar);
        break;
      case "guruhlar":
        setShowGuruhlar(!showGuruhlar);
        break;
      case "kurslar":
        setShowKurslar(!showKurslar);
        break;
      case "hr":
        setShowHr(!showHr);
        break;
      case "sozlamalar":
        setShowSozlamalar(!showSozlamalar);
        break;
      default:
        break;
    }
  };

  return (
    <div className="minContainer">
      {showWeb && (
        <div className="Modal">
          <div className={showWeb ? "minModal show" : "minModal"}>
            <div className="overlay"></div>
            <div className="brand">Brand:</div>
            <div className="brandname">WebBrain</div>
            <div className="brand">Name:</div>
            <div className="brandname"> Jasur Anorbekov</div>
            <div className="button">
              <button className="cancel" onClick={cancelHandler}>Cancel</button>
              <button className="ok" onClick={saveHandler}>Save</button>
            </div>
          </div>
        </div>
      )}
      <Container>
        <Main>
          <Web onClick={() => setShowWeb(true)}>Webbrain.crm</Web>
          <Profil>
            <Img src="https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png" alt="no img" />
            <div>
              <Name>Jasur Anorbekov</Name>
              <Gmail>j.anorbekov@gmail.com</Gmail>
            </div>
          </Profil>
          <Analitika>
            <AnaMin>
              <Icon className="fa-solid fa-chart-pie"></Icon>
              Analitika
            </AnaMin>
          </Analitika>
          <BirXil>
            <Asosiy onClick={() => inOpen("lidlar")}>
              <Icon className="fa-regular fa-pen-to-square"></Icon>
              Lidlar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showLidlar && (
              <ul>
                <li className="ichki">Barcha Lidlar</li>
                <li className="ichki">Birinchi Dars</li>
                <li className="ichki">Yangi Talabalar</li>
              </ul>
            )}
          </BirXil>
          <Analitika>
            <Asosiy>
              <Icon className="fa-solid fa-sack-dollar"></Icon>
              Moliya
            </Asosiy>
          </Analitika>
          <BirXil>
            <Asosiy onClick={() => inOpen("talabalar")}>
              <Icon className="fa-solid fa-graduation-cap"></Icon>
              Talabalar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showTalabalar && (
              <div>
                <Ichki>Barcha Talabalar</Ichki>
                <Ichki>Davomat</Ichki>
                <Ichki>Aktive</Ichki>
                <Ichki>Arxiv</Ichki>
                <Ichki>Ota-onalar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => inOpen("guruhlar")}>
              <Icon className="fa-solid fa-user-group"></Icon>
              Guruhlar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showGuruhlar && (
              <div>
                <Ichki>Guruhlar</Ichki>
                <Ichki>Dars Jadvali</Ichki>
                <Ichki>Xonalar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => inOpen("kurslar")}>
              <Icon className="fa-solid fa-book-bookmark"></Icon>
              Kurslar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showKurslar && (
              <div>
                <Ichki>Barcha Kurslar</Ichki>
                <Ichki>Yo'nalishlar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => inOpen("hr")}>
              <Icon className="fa-solid fa-briefcase"></Icon>
              HR
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showHr && (
              <div>
                <Ichki>Ro'llar</Ichki>
                <Ichki>Hodimlar</Ichki>
              </div>
            )}
          </BirXil>
          <BirXil>
            <Asosiy onClick={() => inOpen("sozlamalar")}>
              <Icon className="fa-solid fa-gear"></Icon>
              Sozlamalar
              <ChevronRight className="fa-solid fa-chevron-right"></ChevronRight>
            </Asosiy>
            {showSozlamalar && (
              <div>
                <Ichki>Umumiy Sozlamalar</Ichki>
                <Ichki>Manager</Ichki>
                <Ichki>Mentor</Ichki>
                <Ichki>Talaba</Ichki>
              </div>
            )}
          </BirXil>
        </Main>
      </Container>
    </div>
  );
};

export default CrmMin;
