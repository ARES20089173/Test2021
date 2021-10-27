import React from 'react';
import MainPage from './component/Pages/MainPage/MainPage'
import CenterSetting from './component/Pages/MainPage/CenterSetting'
import MultigameChooser from './component/Pages/MainPage/MultigameChooser';
import TournamentLobby from './component/Pages/MainPage/TournamentLobby';
import GameTutorial from './component/Pages/MainPage/GameTutorial';
import Notification from './component/Pages/MainPage/Notification'
import EndBattleMode from './component/Pages/ThreeGameMode/EndBattleMode'
import EndChallengeMode from './component/Pages/ThreeGameMode/EndChallengeMode';
import EndOneVoneMode from './component/Pages/ThreeGameMode/EndOneVoneMode';
import BattleModeJoin from './component/Pages/ThreeGameMode/BattleModeJoin'
import ChallengerModeGo from './component/Pages/ThreeGameMode/ChallengerModeGo';
import oneVoneMode from './component/Pages/ThreeGameMode/OneVoneMode';
import Profile  from './component/Pages/HamburgerBar/Profile';
import Setting from'./component/Pages/HamburgerBar/Setting'
import Events from'./component/Pages/HamburgerBar/Events'
import WalletMain from './component/Pages/Wallet/WalletMain'
import TranscationHistory from './component/Pages/Wallet/TranscationHistory';
import HistoryDetail from './component/Pages/Wallet/HistoryDetail';
import SaveCards from './component/Pages/Wallet/SaveCard'
import AddNewMethod from './component/Pages/Wallet/AdNmethod'
import AddNewCards from './component/Pages/Wallet/AddNewCard'
import PuzzlePackage from './component/Pages/Wallet/PuzzlePackage'
import { RouterConfig, getMatchRouter } from './routerConfig';
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import MessageCenter from './component/Pages/MainPage/MessageCenter';
import SelectAvatar from './component/Pages/HamburgerBar/SelectAvatar';
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
  if (!needAnimation || oldIndex === currentIndex) return '' // 同级跳转，或者滑动中，不执行动画
  return oldIndex > currentIndex ? 'back' : 'forward'
}

let oldLocation = {}
const render = ({ location, history, match }) => {
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
          <Route exact path="/Events" component={Events}><Events/></Route>    
          <Route exact path="/:id/Profile" component={Profile} render={(props) => <Profile {...props} />}/>
          <Route exact path="/:id/Profile/SelectAvatar" component={SelectAvatar} render={(props) => <SelectAvatar {...props} />}/>
          <Route exact path="/:id/Setting" component={Setting} render={(props) => <Setting {...props} />}/>
          <Route exact path="/EndBattleMode" component={EndBattleMode}><EndBattleMode /></Route> 
          <Route exact path="/EndChallengeMode" component={EndChallengeMode}><EndChallengeMode /></Route>
          <Route exact path="/EndOneVoneMode" component={EndOneVoneMode}><EndOneVoneMode /></Route>
          <Route exact path="/MessageCenter" component={MessageCenter}><MessageCenter /></Route>
          <Route exact path="/MessageCenter/Notification" component={Notification}><Notification /></Route>
          <Route exact path="/MessageCenter/CenterSetting" component={CenterSetting}><CenterSetting /></Route>
          <Route exact path="/multigameChooser" component={MultigameChooser}><MultigameChooser /></Route>
          <Route exact path="/multigameChooser/tournamentLobby/:id" component={TournamentLobby} render={(props) => <TournamentLobby {...props} />} />
          <Route exact path="/multigameChooser/tournamentLobby/:id/:entryid/BattleModeJoin" component={BattleModeJoin} render={(props) => <BattleModeJoin {...props} />} />
          <Route exact path="/multigameChooser/tournamentLobby/:id/:entryid/ChallengerModeGo" component={ChallengerModeGo} render={(props) => <ChallengerModeGo{...props} />} />
          <Route exact path="/multigameChooser/tournamentLobby/:id/:entryid/OneVoneMode" component={oneVoneMode} render={(props) => <oneVoneMode{...props} />} />
          <Route exact path="/gametutorial" component={GameTutorial} render={(props) => <GameTutorial {...props} />} />

          <Route exact path="/wallet" component={WalletMain} render={(props) => <WalletMain {...props} />}/>
          <Route exact path="/Wallet/TranscationHistory" component={TranscationHistory}render={(props) => <TranscationHistory {...props} />}/>  
          <Route exact path="/Wallet/SaveCards" component={SaveCards}render={(props) => <SaveCards {...props} />}/>  
          <Route exact path="/Wallet/SaveCards/AddNewCards" component={AddNewCards}render={(props) => <AddNewCards {...props} />}/>
          <Route exact path="/Wallet/PuzzlePackage" component={PuzzlePackage}render={(props) => <PuzzlePackage {...props} />}/>  
          <Route exact path="/Wallet/SaveCards/AddNewMethod" component={AddNewMethod}render={(props) => <AddNewMethod {...props} />}/>  
        
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

