import { useNavigate} from "react-router-dom"
import { MaterialType } from '../component/MaterialAndTool/MaterialType';
import { MaterialList } from '../component/MaterialAndTool/MaterialList';
import useFetchMaterialList from '../component/MaterialAndTool/UseFetchMaterialList'
import useFetchMaterial from '../component/MaterialAndTool/UseFetchMaterial';
import { colors } from '../Color';
import Icon from '@mdi/react';
import { mdiArrowLeftDropCircleOutline } from '@mdi/js';

const MaterialAndToolPage = () => {
  const navigate = useNavigate()
  const {data:materials, isPending} = useFetchMaterialList('http://localhost:8000/materials')
  return (
    <>
      {/* <div>Material & Tool Page</div>
      <p>應該要有搜尋欄、所有材料與工具，旁邊有樹狀結構的sidebar便於查詢(還需要顯示路徑在上方)</p>
      <p>每個材料的card包含photo,fullname,position,borrow_button</p>
      <p><b>Material</b></p>
      1.  <Link to={'/MaterialAndTool/Material/'+0}>Each Material</Link> +id */}
      
      {/* <p><b>Tool</b></p>
      1.  <Link to={'/MaterialAndTool/Tool/'+0}>Each Tool</Link> {/* +id */}
      {/* <br></br>
      <button onClick={() => navigate(-1)}>go back</button> */}
      <div style={{ width: '95%', marginBottom: '30px' }}>
        <div style={{
            width: '120px',
            height: '520px',
            position: 'absolute',
            backgroundColor: '#C4E4EA',
          }}
        ></div>

        <div style={{marginLeft:'180px'}}>
            <br></br> 
            <div style={{ display: 'flex',alignItems: 'center'}}>
              <button onClick={() => navigate(-1)} style={{ backgroundColor: 'transparent', border: 'none', marginLeft:'10px',cursor: 'pointer',}}>
                <Icon path={mdiArrowLeftDropCircleOutline} size={3} color={colors.DarkSlateGray} />
              </button>
              <h1 style={{margin: '0 auto'}}>|  資源一覽  |</h1>
              <br></br>
            </div>
            <div>{materials && <MaterialList materials={materials}/>}</div>
            <br></br>
        </div>
      </div>
    </> 
  )
}

export default MaterialAndToolPage