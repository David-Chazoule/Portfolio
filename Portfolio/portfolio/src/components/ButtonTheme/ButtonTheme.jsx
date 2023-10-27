import {useContext} from 'react'
import { ThemeContext } from "../../context/ThemeContext";
import sunDark from '../../styles/img/sunDark.png';
import moonDark from '../../styles/img/MoonDark.png';
import SunLight from '../../styles/img/sunLight.png';
import moonLight from '../../styles/img/moonLight.png';
;
export default function ButtonTheme({translate}) {
  const {theme, setTheme} = useContext(ThemeContext)



  return (
    <div className='button_container' onClick={()=> setTheme(theme==='light'?'dark':'light')} title={theme==='light'?'light theme':'dark theme'}>
    
   {theme==='light'? <img className='logoBtn' src={SunLight} alt=""/> : <img className='logoBtn' src={moonLight} alt=""/>}

 
    </div>
  )
}
