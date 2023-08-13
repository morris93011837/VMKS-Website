import React from "react"
import Button from '@mui/material/Button';
import '../CSS/NavBar.css'
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../images/vmks_logo.png"; //./VMKS-Website/frontend/src/vmks_logo.png
export const NavBar = () => {
  return(
    <nav>
      <div id="header" style={{ paddingLeft:'16px', paddingRight:'16px'}} className="button-container">
        <Link to='/'><img src={logo} alt="logo" height="50"/></Link>
        <Button variant="contained"  size="medium" style={{float:"right", backgroundColor:'#67b9c7ff'}}>
          <Link to="/LoginPage" style={{ textDecoration: "none", color: "white" }}>
            Login
          </Link>
        </Button>
      </div>
      <Box>
        <AppBar position="static" style={{backgroundColor:'#67B9C7'}}>
          <Toolbar style={{display: 'flex', justifyContent: 'flex-end', minHeight:'24px'}}>
            <Button variant="text" size="large" style={{backgroundColor:'#67b9c7ff',border:'3px solid #FFFFFF',borderBottomWidth: '0px',borderRightWidth: '0px',borderTopWidth:'0px',borderRadius:'0px'}}>
              <Link to="IntroductionPage" style={{ textDecoration: "none", color: "white" }}>
                  MKS介紹
              </Link>
            </Button>
            <Button variant="text" size="large" style={{backgroundColor:'#67b9c7ff',border:'3px solid #FFFFFF',borderBottomWidth: '0px',borderTopWidth:'0px',borderRadius:'0px'}}>
              <Link to="MapPage" style={{ textDecoration: "none", color: "white" }}>
                地圖導覽
              </Link>
            </Button>
            <Button variant="text" size="large" style={{backgroundColor:'#67b9c7ff'}}>
              <Link to="MaterialAndToolPage" style={{ textDecoration: "none", color: "white" }}>
                 資源一覽
              </Link>
            </Button>
            <Button variant="text" size="large" style={{backgroundColor:'#67b9c7ff',border:'3px solid #FFFFFF',borderBottomWidth: '0px',borderTopWidth:'0px',borderRadius:'0px'}}>
              <Link to="TutorialPage" style={{ textDecoration: "none", color: "white" }}>
                 新手教學
              </Link>
            </Button>
            {/* <dl>
              <dt><Link to='IntroductionPage'>MKS介紹</Link></dt>
              <dd><Link to='IntroductionPage'>MKS簡介</Link></dd>
              <dd>管理員班表</dd>
              <dd>使用者規範</dd>
            </dl> */}
            {/* <dl>
              <dt><Link to='TutorialPage'>新手教學</Link></dt>
              <dd>互動式導覽</dd>
              <dd>VMKS功能一覽</dd>
            </dl> */}

            {/* <dl>
              <Link to='MapPage'>地圖導覽</Link>
            </dl> */}
            {/* <dl>
              <dt><Link to='MaterialAndToolPage'>資源一覽</Link></dt>
              <dd>耗材</dd>
              <dd>材料</dd>
              <dd>工具</dd>
              <dd>機台</dd>
            </dl>
            <dl>
              <dt><Link to='TutorialPage'>新手教學</Link></dt>
              <dd>互動式導覽</dd>
              <dd>VMKS功能一覽</dd>
            </dl>  */}
            </Toolbar>
        </AppBar>
      </Box>
      
      
      {/* <Link to='ShoppingList'>借用清單</Link> */}
      
    </nav>
  ) 
}