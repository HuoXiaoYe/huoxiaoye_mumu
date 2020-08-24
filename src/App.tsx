import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.less';
import "@/ui/less/reset.less"
import "@/ui/assets/iconfont/iconfont.css"
import VConsole from 'vconsole';
import Index from "@/pages/index/index"
import ButtonWrap from "@/pages/button/buttonWrap"
import MessageWrap from "@/pages/message/messageWrap"
import SwitchWrap from "@/pages/switch/switchWrap"
import UpRefreshWrap from "@/pages/upRefresh/upRefreshWrap"
import LoadingWrap from "@/pages/loading/loadingWrap"
import BubbleWrap from "@/pages/bubble/bubbleWrap"
import Superposition from "@/pages/superposition/superposition"
import ListWrap from "@/pages/list/listWrap"
import SliderWrap from "@/pages/slider/sliderWrap"
import TabWrap from "@/pages/tab/tabWrap";
import Demo from "@/pages/demo/demo"


const isDebug = false;
// 本地开发调试注入vConsole
if (isDebug) {
  new VConsole();
}
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/index" exact component={Index} />
        <Route path="/button" exact component={ButtonWrap} />
        <Route path="/message" exact component={MessageWrap} />
        <Route path="/upRefresh" exact component={UpRefreshWrap} />
        <Route path="/loading" exact component={LoadingWrap} />
        <Route path="/switch" exact component={SwitchWrap} />
        <Route path="/bubble" exact component={BubbleWrap} />
        <Route path="/superposition" exact component={Superposition} />
        <Route path="/list" exact component={ListWrap} />
        <Route path="/slider" exact component={SliderWrap} />
        <Route path="/tab" exact component={TabWrap} />
        <Route path="/demo" exact component={Demo} />
      </div>
    </Router>
  );
}

export default App;
