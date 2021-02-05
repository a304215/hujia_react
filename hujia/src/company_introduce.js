import './company_introduce.css';
function company_introduce(){
    return(
        <div>
            <div className = "introduce_div">
                <div className = "introduce_article">
                    <div className = 'each_article'>
                        <h1>手游端游技術開發</h1>
                        <p>皇家輔助工作室為您提供最優質的腳本外掛，讓人工智能為您提升帳號實力，征服遊戲世界變得簡單</p>
                    </div>
                    <div className = 'split_line'></div>
                    <div className = 'each_article'>
                        <h1>全球海內外銷售</h1>
                        <p>皇家輔助工作室提供台港澳在地推廣與全球海外項目推廣，與作者及開發團隊承接任何項目銷售服務。</p>
                    </div>
                    <div className = 'split_line'></div>  
                    <div className = 'each_article'>
                        <h1>7 X 24全天候​服務</h1>
                        <p>皇家輔助工作室提供7X24客服為您服務，以及及時自動發卡系統，讓您使用放心，遊戲順心。</p>
                    </div>              
                </div>
            </div>
            <div className = 'company_service'>
                <div className = 'each_row'>
                    <div className = 'each_service'>
                        <h2>服務項目</h2>
                        <ul>
                            <li>端游手游各式外掛販售</li>
                            <li>工作室外掛開發訂製項目、流量承接、工作室內部項目開發</li>
                            <li>加盟工作室教學指導及供貨</li>
                            <li>廣告宣傳、版面宣傳、各類廣告建置</li>
                        </ul>
                    </div>
                    <div className = 'each_service'>
                        <h2>皇家輔助工作室</h2>
                        <ul>
                            <li>端游開發、手游開發、網遊開發、FPS射擊遊戲開發、冷門項目</li>
                            <li>按鍵技術、圖色辨識、脫機開發、內存開發</li>
                            <li>小程序，小軟件，手機APP、軟件協議、註冊機、掃號器、逆向工程</li>
                            <li>玩家版本、工作室版、內部訂製版</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default company_introduce;