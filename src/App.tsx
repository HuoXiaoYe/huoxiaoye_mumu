import React from 'react';
import './App.css';
import "@/ui/less/reset.less"
import "@/ui/assets/iconfont/iconfont.css"

// import ButtonWrap from "@/pages/button/buttonWrap"
// import MessageWrap from "@/pages/message/messageWrap"
import SwitchWrap from "@/pages/switch/switchWrap"

function App() {
  return (
    <div className="App">
      {/* <ButtonWrap /> */}
      {/* <MessageWrap /> */}
      <SwitchWrap />
    </div>
  );
}

export default App;
