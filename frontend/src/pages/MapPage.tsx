import { useNavigate } from "react-router-dom"
import mapImg from "../images/interior2D_1.jpg"

const MapPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Map Page</div>
      <p>應該要有2D地圖，並連結3D地圖</p>
        <img src={mapImg} alt="Interior2D" useMap="#interior2d"></img>
        <map name="interior2d">
        
          <area shape="rect" coords="1288,0,1465,102" alt="Laser1" href="/button"></area>
          <area shape="rect" coords="1465,0,1643,102" alt="Laser2" href="/button"></area>
          <area shape="rect" coords="616,0,803,102" alt="3DP" href="/button"></area>
          <area shape="rect" coords="878,0,957,254" alt="ChipsAndComponents" href="/button"></area>
          <area shape="rect" coords="616,185,825,447" alt="Solder" href="/button"></area>
          <area shape="rect" coords="1131,196,1581,377" alt="DrillsAndSaws" href="/button"></area>
          <area shape="rect" coords="1064,491,1467,593" alt="tools1" href="/button"></area>
          <area shape="rect" coords="1482,474,1682,590" alt="tools2" href="/button"></area>
        </map>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default MapPage
