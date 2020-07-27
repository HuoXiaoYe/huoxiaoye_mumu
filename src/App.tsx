import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.less';
import "@/ui/less/reset.less"
import "@/ui/assets/iconfont/iconfont.css"
import VConsole from 'vconsole';
import Home1 from "@/pages/homePage/home1"
import Home2 from "@/pages/homePage/home2"





const isDebug = true;
// 本地开发调试注入vConsole
if (isDebug) {
  new VConsole();
}
function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  function toggleActiveIndex(index:number):void{
    setActiveIndex(index)
  }
  return (
    <div className="App">
      <div className="app-main">
        <div className="first-page">
          <Home1 />
        </div>
        <div className="second-page">
          <Home2 />
        </div>
      </div>
      <ul className="app-bottom-nav">
        <li onClick={toggleActiveIndex.bind(null,0)} className={[activeIndex === 0 ? 'active' : '' ].join(" ")}>
          <i className='iconfont'>&#xe9db;</i>
          <p>mumu</p>
        </li>
        <li onClick={toggleActiveIndex.bind(null,1)} className={[activeIndex === 1 ? 'active' : '' ].join(" ")}>
          <i className='iconfont'>&#xe608;</i>
          <p>mumu</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
