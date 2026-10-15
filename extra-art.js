// One-based guide step to cartoon illustration; actual UI remains below for comparison.
const EXTRA_ART={
5:['register','開啟電腦網站，準備按按鈕'],
6:['readcard','先確認讀卡機與本人健保卡'],
7:['register','用滑鼠按一下「註冊」'],
8:['scroll','把滑鼠移到小視窗，往下捲'],
9:['agree','本人了解並同意後，勾選小方框'],
10:['agree','勾選完畢，再按確認'],
11:['scroll','讀完規定，往下找到長按鈕'],
12:['readcard','卡片插著，按「讀取」'],
13:['household-entry','看戶口名簿，把戶號填到電腦'],
14:['household-entry','對照戶籍資料，選縣市'],
15:['household-entry','對照戶籍資料，選鄉鎮市區'],
16:['household-entry','對照戶籍資料，選村里、填鄰'],
17:['register','資料檢查好了，再按下一步'],
20:['email','到電子信箱，找認證通知信'],
21:['email','打開認證信，再按裡面的認證連結'],
22:['readcard','本人健保卡插著，再填註冊密碼'],
23:['register','回到真正的登入頁，按登入'],
25:['register','在電腦按「產生裝置認證碼」'],
26:['scan','電腦上的認證碼畫面留著'],
27:['app-choice','拿起要使用的手機，開啟 App'],
28:['app-choice','在真正的 App 找「裝置碼認證」'],
29:['scan','使用 App 掃描，需要時允許相機'],
32:['success','在真正的 App 確認登入成功'],
33:['success','電腦登出，把健保卡與文件收好']
};
function extraArt(s,i){const a=EXTRA_ART[i+1];if(!a)return '';return `<details class="cartoon-help"><summary>需要動作示範？點開卡通輔助圖</summary><figure class="extra-art"><div class="visual-label"><span>卡通輔助・實際按鈕請看上方截圖</span><button data-art="${a[0]}-cartoon.png">放大卡通圖 ⤢</button></div><img src="assets/${a[0]}-cartoon.png" alt="${esc(a[1])}的卡通示意圖" loading="lazy"><figcaption><strong>${esc(a[1])}</strong><br><small>卡通只示意動作；按鈕位置、文字與資料請以上方實機截圖及真正的官方畫面為準。</small></figcaption></figure></details>`;}
