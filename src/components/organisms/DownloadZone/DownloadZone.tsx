import css from './DownloadZone.module.css'
import Card from '../../molecules/card/Card'


function DownloadZone() {
    const urlChrome = '/logo-chrome.svg'
    const urlFirefox= '/logo-firefox.svg'
    const urlOpera='/logo-opera.svg'
  return (
    <div className={css.container}>
       <div>       
         <Card url={urlChrome} browser='Chrome' version='62'/>
       </div>
        <div>        
            <Card url={urlFirefox} browser='Firefox' version='55' extraStyle={css.margin1}/>
        </div>
        <div>      
              <Card url={urlOpera} browser='Opera' version='46'  extraStyle={css.margin2}/>
        </div>
       
       
    </div>
  )
}

export default DownloadZone