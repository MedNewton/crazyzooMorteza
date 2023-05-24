import Home03 from "./Home03";
import PresalePage from "./Presale";
import RoadmapPage from "./Roadmap";

const routes = [
  { path: '/', component: <Home03 />},
  { path: '/home-03', component: <Home03 />},
  { path: '/presale', component: <PresalePage />},
  { path: '/roadmap', component: <RoadmapPage />},
]

export default routes;