import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkList from "../components/WorkList";
const projects = [
  {
    id: 1,
    name: "Travel Planner",
    url: "https://stormy-springs-60842.herokuapp.com",
    repo: "https://github.com/yenyulai/travel-planner",
    img: "./images/Let's go travel planner-p1.png",
  },
  {
    id: 2,
    name: "Quarantine-Match",
    url: "https://elogonme.github.io/quarantine-match/",
    repo: "https://github.com/yenyulai/Quarantine-Match",
    img: "./images/Quarantine-Match.jpg",
  },
  {
    id: 3,
    name: "Schadule-perfect",
    url: "https://yenyulai.github.io/Schedule-Perfect",
    repo: "https://github.com/yenyulai/Schedule-Perfect",
    img: "./images/Schedule-Perfect.png",
  },
  {
    id: 4,
    name: "Weather_Forecast",
    url: "https://yenyulai.github.io/Weather_Forecast/",
    repo: "https://github.com/yenyulai/Weather_Forecast",
    img: "./images/Weather-Forecast.png",
  },
];

function Project() {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 maincolumn">
            <header>
              <h1>Portfolio</h1>
            </header>
            <hr />
          </div>
          <WorkList projects={projects} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
