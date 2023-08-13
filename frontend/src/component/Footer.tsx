import React from 'react'

const Footer = () => {
  return (
    <footer>
      <img
        src="VMKS_logo.png"
        alt="Footer Image"
        style={{ width: '100px', height: '100px' , float:'left',marginRight:'100px'}} 
      />
      <p style={{ fontSize: '30px', color: '#333', float:'left' }}>Virtual MKS</p>
      
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