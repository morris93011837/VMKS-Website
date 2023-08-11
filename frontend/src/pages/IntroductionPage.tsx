import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const IntroductionPage = () => {
  const navigate = useNavigate()
  const sessionA = useRef(null);
  const sessionB = useRef(null);
  const sessionC = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div style={{ width: '95%', marginBottom: '30px' }}>
        <div style={{
            width: '120px',
            height: '100vh',
            position: 'absolute',
            backgroundColor: '#C4E4EA',
          }}
        >
            <List style={{paddingTop:'0'}}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => scrollToSection(sessionA)} style={{
                  border: '3px solid #3D96A5', 
                  borderBottomWidth: '0px',
                  borderRadius: '0px', 
                  textAlign: 'center',
                  marginTop: '0'
                }}>
                  <ListItemText style={{color:'#3D96A5'}}>MKS簡介</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => scrollToSection(sessionB)} style={{
                  border: '3px solid #3D96A5', 
                  borderBottomWidth: '0px',
                  borderRadius: '0px', 
                  textAlign: 'center',
                }}>
                  <ListItemText style={{color:'#3D96A5'}}>管理員班表</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => scrollToSection(sessionB)} style={{
                    border: '3px solid #3D96A5', 
                    borderRadius: '0px', 
                    textAlign: 'center',
                  }}>
                    <ListItemText style={{color:'#3D96A5'}}>使用者規範</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
            {/* <li onClick={() => scrollToSection(sessionA)}>簡介</li>
            <li onClick={() => scrollToSection(sessionB)}>班表</li>
            <li onClick={() => scrollToSection(sessionC)}>規範</li> */}
        </div >
        
        <div style={{marginLeft:'150px'}}>
          {/* <div>IntroductionPage Page</div>
          <p>這裡需要有簡介、管理員班表、使用者規範</p>
          <br></br> */}
          <br></br>
          <h2 ref={sessionA}>簡介</h2>
          <div>
            <p>歡迎來到 Virtual MKS — 台大電機系創客空間的虛擬 Maker Space！這裡是一個豐富多彩、充滿創意火花的地方，讓您的創意和想像力得以自由發揮，並與其他創作者共同探索無盡的可能性。</p>
            <p>Virtual MKS 是一個網上的創客平台，專為台大電機系學生而設。無論您是對創客全新的新手，還是已經經驗豐富的老手，這個空間都將為您帶來令人興奮的挑戰和成就。</p>
            <p>在 Virtual MKS，您可以在網絡世界中與其他創作者連繫，共同協作、交流意見、並共同實現各自的創意。這裡提供了豐富的專案資源，從軟體開發到硬體製作，您都可以找到相應的工具和資源來支援您的創作。</p>
            <p>透過虛擬的空間，您可以隨時隨地進行創客活動，不再受到時間和地點的限制。不僅如此，Virtual MKS 還為您提供了各種精彩的創客活動，如線上工作坊、競賽、講座等，讓您擴展視野、獲得新知識。</p>
            <p>想要實現創意，必然少不了工具和器材的支援。在 Virtual MKS，我們為您提供了豐富的工具和器材，您可以輕鬆借用所需的設備，讓您的創作更加順利。</p>
            <p>不論您是學生、老師，或是熱愛創意的校友，Virtual MKS 都歡迎您的加入。在這個充滿活力和創造力的社群中，您將與來自不同領域的人們共同學習、成長，一同挑戰各種創客項目。</p>
            <p>謝謝您加入 Virtual MKS，讓我們一同點燃創意的火花，為創客的世界帶來更多革新和驚喜！我們期待在這個充滿無限可能的空間中見證您的創造力！</p>
          </div>
          <br></br>
          <h2 ref={sessionB}>班表</h2>
          <table style={{ width: '100%', textAlign: 'left' }}>
            <tr>
              <th style={{ border: '1px solid #dddddd', width: '25%' }}>日期</th>
              <th style={{ border: '1px solid #dddddd', width: '50%' }}>值班人員</th>
              <th style={{ border: '1px solid #dddddd' }}>備註</th>
            </tr>
            <tr>
              <td style={{ border: '1px solid #dddddd' }}>MM/DD</td>
              <td style={{ border: '1px solid #dddddd' }}>xxx</td>
              <td style={{ border: '1px solid #dddddd' }}>...</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #dddddd' }}>MM/DD</td>
              <td style={{ border: '1px solid #dddddd' }}>xxx</td>
              <td style={{ border: '1px solid #dddddd' }}>...</td>
            </tr>
          </table>
          <div>
          </div>
          <br></br>
          <h2 ref={sessionC}>規範</h2>
          <div>
            <h3>網站使用者注意事項</h3>
            <li>註冊和登入：使用真實且可靠的資訊註冊帳號，妥善保管帳號和密碼，避免洩露個人資料。</li>
            <li>安全連線：在使用敏感資訊時，確保網站使用安全的HTTPS連線。</li>
            <li>網站政策：了解網站的隱私政策和使用條款，以瞭解資料收集和使用方式。</li>
            <li>網站內容：警覺不實資訊或詐騙內容，避免因此受騙或違反法律法規。</li>
            <li>附件下載：下載附件前，先掃描檔案是否有惡意軟體，確保電腦安全。</li>
            <li>網路詐騙：警惕釣魚網站和詐騙郵件，不提供個人或金融資料。</li>
            <h3>工具與借用器材注意事項</h3>
            <li>安全指引：熟悉工具的操作手冊和安全指引，避免不當使用導致意外傷害。</li>
            <li>借用程序：遵循借用器材的程序和規則，保持訂約期限，避免影響其他使用者。</li>
            <li>安全保護：使用器材時，穿戴適當的安全裝備，如護目鏡、手套等。</li>
            <li>維護和保養：保持工具清潔，適時進行保養，以確保其正常運作和延長使用壽命。</li>
            <li>不熟悉勿用：避免使用不熟悉或未經培訓的工具，以防止意外事故。</li>
            <li>防塵防火：對於易燃、易爆或產生大量粉塵的工具，遵循防火和安全處理措施。</li>
            <p>這些注意事項將有助於使用者在網站和使用工具、借用器材時保持安全，避免潛在的風險和問題。經過謹慎和負責任的使用，可以確保使用者和他人的安全和利益。</p>
          </div>
          <div style={{ height: '100px' }}></div>
        </div >
      </div >
      <center>
        <button onClick={() => navigate(-1)}>go back</button>
      </center>
      <br></br>

    </>
  )
}

export default IntroductionPage