import React from "react"
import { Link } from "react-router-dom"
// import logo from "/src/vmks_logo.png"
export const NavBar = () => {
  return(
    <nav>
      <div id="header">
        <Link to='/'><img src="/home/brianyu/VMKS-Website/frontend/src"></img></Link>
        <Link to='LoginPage' style={{float:"right"}}>Login</Link>
      </div>
      
      <div id="navbar">
        <a style={{color:"aliceblue"}}>1</a>
        <dl>
          <dt><Link to='TutorialPage'>新手教學</Link></dt>
          <dd>互動式導覽</dd>
          <dd>VMKS功能一覽</dd>
        </dl>

        <dl>
          <Link to='MapPage'>地圖導覽</Link>
        </dl>
        
        <dl>
          <dt><Link to='MaterialAndToolPage'>資源一覽</Link></dt>
          <dd>耗材</dd>
          <dd>材料</dd>
          <dd>工具</dd>
          <dd>機台</dd>
        </dl>
                
        <dl>
          <dt><Link to='IntroductionPage'>MKS介紹</Link></dt>
          <dd><Link to='IntroductionPage'>MKS簡介</Link></dd>
          <dd>管理員班表</dd>
          <dd>使用者規範</dd>
        </dl>
      </div>
      
      
      {/* <Link to='ShoppingList'>借用清單</Link> */}
      
    </nav>
  ) 
}