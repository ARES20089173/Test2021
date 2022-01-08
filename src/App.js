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
import OneVoneMode from './component/Pages/ThreeGameMode/OneVoneMode';
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
import MyCollection from './component/Pages/Wallet/MyCollection'
import MissionMain from './component/Pages/Mission/MissionMain'
import RewardStatus from './component/Pages/Mission/RewardStatus'
import SupportGuide from './component/Pages/Mission/SupportGuide'
import FAQ from './component/Pages/Mission/FAQ'
import Policy from './component/Pages/Mission/Policy'
import Service from './component/Pages/Mission/TermOfService'
import MatchHistory from './component/Pages/History/MatchHistory' 
import BattleModeDetail from './component/Pages/History/BattleModeDetail' 
import BalttleOtherinfo from './component/Pages/History/BalttleOtherinfo' 
import OneVOneModeDetail from './component/Pages/History/OneVOneModeDetail' 
import ChallengeModeDetail from './component/Pages/History/ChallengeModeDetail' 

import ShopMain from './component/Pages/Shop/ShopMain'
import Shopcar from './component/Pages/Shop/Shopcar'
import MyWishList from './component/Pages/Shop/Wishlist/MyWishList'
import ProductDetail from './component/Pages/Shop/Wishlist/ProductDetail'
import RedeemRecords from './component/Pages/Shop/ReedRecord/RedeemRecords'
import CategoryMain from './component/Pages/Shop/Category/Main'

import SignIn from './component/Pages/UserlogPage/SignIn'
import Forgot from './component/Pages/UserlogPage/ForgotPassword'
import Register from './component/Pages/UserlogPage/Register'
import RegisterInfo from './component/Pages/UserlogPage/InfoRegister'
import FiniRegister from './component/Pages/UserlogPage/FiniRegister'
import LandingPage from './component/Pages/UserlogPage/LandingPage'
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
          <Route exact path="/:id/Profile" render={(props) => <Profile {...props} />}/>
          <Route exact path="/:id/Profile/SelectAvatar" render={(props) => <SelectAvatar {...props} />}/>
          <Route exact path="/:id/Setting"render={(props) => <Setting {...props} />}/>
          <Route exact path="/EndBattleMode" component={EndBattleMode}><EndBattleMode /></Route> 
          <Route exact path="/EndChallengeMode" component={EndChallengeMode}><EndChallengeMode /></Route>
          <Route exact path="/EndOneVoneMode" component={EndOneVoneMode}><EndOneVoneMode /></Route>
          <Route exact path="/MessageCenter" component={MessageCenter}><MessageCenter /></Route>
          <Route exact path="/MessageCenter/Notification" component={Notification}><Notification /></Route>
          <Route exact path="/MessageCenter/CenterSetting" component={CenterSetting}><CenterSetting /></Route>
          <Route exact path="/multigameChooser" component={MultigameChooser}><MultigameChooser /></Route>
          <Route exact path="/multigameChooser/tournamentLobby/:id"  render={(props) => <TournamentLobby {...props} />} />
          <Route exact path="/multigameChooser/tournamentLobby/:id/:entryid/BattleModeJoin" render={(props) => <BattleModeJoin {...props} />} />
          <Route exact path="/multigameChooser/tournamentLobby/:id/:entryid/ChallengerModeGo" render={(props) => <ChallengerModeGo {...props} />} />
          <Route exact path="/multigameChooser/tournamentLobby/:id/:entryid/OneVoneMode"  render={(props) => <OneVoneMode {...props} />} />
          <Route exact path="/gametutorial" render={(props) => <GameTutorial {...props} />} />

          <Route exact path="/Shop"  render={(props) => <ShopMain {...props} />}/>
          <Route exact path="/Shop/Shopcar"  render={(props) => <Shopcar {...props} />}/>
          <Route exact path="/Shop/MyWishList"  render={(props) => <MyWishList {...props} />}/>
          <Route exact path="/Shop/MyWishList/:id/ProductDetail"  render={(props) => <ProductDetail {...props} />}/>
          <Route exact path="/Shop/RedeemRecords"  render={(props) => <RedeemRecords {...props} />}/>
          <Route exact path="/Shop/Category/:type"  render={(props) => <CategoryMain {...props} />}/>

          <Route exact path="/Wallet" render={(props) => <WalletMain {...props} />}/>  
          <Route exact path="/Wallet/TranscationHistory" render={(props) => <TranscationHistory {...props} />}/>  
          <Route exact path="/Wallet/TranscationHistory/:id/Detail" render={(props) => <HistoryDetail {...props} />}/>  
          <Route exact path="/Wallet/SaveCards"render={(props) => <SaveCards {...props} />}/>  
          <Route exact path="/Wallet/SaveCards/AddNewCards" render={(props) => <AddNewCards {...props} />}/>
          <Route exact path="/Wallet/PuzzlePackage"render={(props) => <PuzzlePackage {...props} />}/>  
          <Route exact path="/Wallet/MyCollection" render={(props) => <MyCollection {...props} />}/>  
          <Route exact path="/Wallet/SaveCards/AddNewMethod" render={(props) => <AddNewMethod {...props} />}/>  
        
          <Route exact path="/History" render={(props) => <MatchHistory {...props} />}/>
          <Route exact path="/History/:id/BattleModeDetail"  render={(props) => <BattleModeDetail {...props} />}/>
          <Route exact path="/History/:id/BattleModeDetail/:id/otherinfo" render={(props) => <BalttleOtherinfo {...props} />}/>
          <Route exact path="/History/:id/OneVOneModeDetail" render={(props) => <OneVOneModeDetail {...props} />}/>
          <Route exact path="/History/:id/ChallengeModeDetail"  render={(props) => <ChallengeModeDetail {...props} />}/>

          <Route exact path="/MissionMain" render={(props) => <MissionMain {...props} />}/>
          <Route exact path="/MissionMain/RewardStatus" render={(props) => <RewardStatus {...props} />}/>
          <Route exact path="/MissionMain/SupportGuide"render={(props) => <SupportGuide {...props} />}/>
          <Route exact path="/MissionMain/FAQ"  render={(props) => <FAQ {...props} />}/>
          <Route exact path="/MissionMain/Policy"  render={(props) => <Policy {...props} />}/>
          <Route exact path="/MissionMain/Service" render={(props) => <Service {...props} />}/>
         

          <Route exact path="/login"render={(props) => <SignIn {...props} />}/>  
          <Route exact path="/login/ForgotPW" render={(props) => <Forgot {...props} />}/> 
          <Route exact path="/Register" render={(props) => <Register {...props} />}/>  
          <Route exact path="/Register/Info" render={(props) => <RegisterInfo {...props} />}/>  
          <Route exact path="/Register/Info/Finish" render={(props) => <FiniRegister {...props} />}/>  
          <Route exact path="/LandingPage" render={(props) => <LandingPage {...props} />}/>  
       
       
        
          MatchHistory
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

