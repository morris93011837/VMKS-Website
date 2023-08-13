import React from 'react'
import vmks_footer_logo from "../images/footer_logo.png"
const Footer = () => {
  return (
    <footer>
      <img
        src={vmks_footer_logo}
        alt="Footer"
        style={{ width: '100px', height: '100px' , float:'left',marginRight:'100px'}} 
      />
      
      <a href="https://www.facebook.com/ntuee.makerspace/?locale=zh_TW">
      <img
          src={"https://cdn-icons-png.flaticon.com/512/4628/4628653.png"}
          alt="FB link"
          style={{
            width: '100px',
            height: '100px',
            /*float: 'left',
            marginRight: '10px',*/
          }}
        />
      </a>
      <a href="https://www.instagram.com/ntu.taiwan/">
      <img
          src={"https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png"}
          alt="FB link"
          style={{
            width: '100px',
            height: '100px',
            /*float: 'left',
            marginRight: '10px',*/
          }}
        />
      </a>
      </footer>

  )
}

export default Footer