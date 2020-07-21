import React from 'react';
import './App.css';
import "@/ui/less/reset.less"
import "@/ui/assets/iconfont/iconfont.css"

// import ButtonWrap from "@/pages/button/buttonWrap"
// import MessageWrap from "@/pages/message/messageWrap"
// import SwitchWrap from "@/pages/switch/switchWrap"
import UpRefreshWrap from "@/pages/upRefresh/upRefreshWrap"
// import LoadingWrap from "@/pages/loading/loadingWrap"
function App() {
  return (
    <div className="App">
      {/* <ButtonWrap /> */}
      {/* <MessageWrap /> */}
      {/* <SwitchWrap /> */}
      <UpRefreshWrap />
      {/* <LoadingWrap /> */}
    </div>
  );
}

export default App;
