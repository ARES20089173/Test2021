import React from 'react';
import MainPage from './component/Pages/MainPage/MainPage'
import CenterSetting from './component/Pages/MainPage/CenterSetting'
import MultigameChooser from './component/Pages/MainPage/MultigameChooser';
import TournamentLobby from './component/Pages/MainPage/TournamentLobby';
import GameTutorial from './component/Pages/MainPage/GameTutorial';
import { RouterConfig, getMatchRouter }from './routerConfig';  
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import MessageCenter from './component/Pages/MainPage/MessageCenter';
const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: 'forward'
}
const delayReset = () => { // 延后重置控制参数
  setTimeout(() => {
    needAnimation = true
  }, 16)
}
window.addEventListener('touchstart', e => {
  needAnimation = true
})
window.addEventListener('touchmove', e => {
  needAnimation = false
})
window.addEventListener('touchend', delayReset)
let needAnimation = true // 控制滑动自带动画冲突

const getClassName = (location, oldLocation) => {
  // 根据前后两个页面的location.pathname,得到对应的配置自定义参数meta
  const currentRoute = getMatchRouter(location.pathname, RouterConfig) || {};
  const oldRoute = getMatchRouter(oldLocation.pathname, RouterConfig) || {};
  const currentIndex = currentRoute.meta && currentRoute.meta.index
  const oldIndex = oldRoute.meta && oldRoute.meta.index
  if(!needAnimation || oldIndex === currentIndex) return '' // 同级跳转，或者滑动中，不执行动画
  return oldIndex > currentIndex ? 'back' : 'forward'
}

let oldLocation = {}
  const render = ({location, history, match}) => {
    const classNames = getClassName(location, oldLocation);
    delayReset() // 防止某些浏览器不触发touchend
    // 更新旧location
    oldLocation = location;
    return <TransitionGroup
      className="router-wrapper"
      childFactory={child => React.cloneElement(
        child,
        { classNames }
      )}
    >
      <CSSTransition
        timeout={300}
        key={location.pathname}
      >
        <div>
          <Switch location={location}>
            <Route exact path="/" component={MainPage}><MainPage /></Route>
            <Route exact path="/MessageCenter" component={MessageCenter}><MessageCenter/></Route>
            <Route exact path="/MessageCenter/CenterSetting" component={CenterSetting}><CenterSetting/></Route>
            <Route exact path="/multigameChooser" component={MultigameChooser}><MultigameChooser /></Route>
            <Route exact path="/multigameChooser/tournamentLobby/:id" component={TournamentLobby} render={(props) => <TournamentLobby {...props} />} />
            <Route exact path="/gametutorial" component={GameTutorial} render={(props) => <GameTutorial {...props} />} />

            ...
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  
}
export default function App() {
  return (
    <BrowserRouter>
      <Route path='/' render={render} />
    </BrowserRouter>
  );
}

