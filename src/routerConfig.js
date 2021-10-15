import { matchPath } from "react-router-dom"
import GameTutorial from "./component/Pages/MainPage/GameTutorial";
import MainPage from './component/Pages/MainPage/MainPage'
import MessageCenter from "./component/Pages/MainPage/MessageCenter";
import CenterSetting from "./component/Pages/MainPage/CenterSetting"
import BattleModeJoin from './component/Pages/ThreeGameMode/BattleModeJoin'
import Notification from "./component/Pages/MainPage/Notification"
import MultigameChooser from './component/Pages/MainPage/MultigameChooser';
import TournamentLobby from './component/Pages/MainPage/TournamentLobby';
import EndBattleMode from './component/Pages/ThreeGameMode/EndBattleMode'
import ChallengerModeGo from './component/Pages/ThreeGameMode/ChallengerModeGo'
import OneVoneMode from './component/Pages/ThreeGameMode/OneVoneMode'
import SelectAvatar from "./component/Pages/HamburgerBar/SelectAvatar";
import Profile from "./component/Pages/HamburgerBar/Profile";
export const getMatchRouter = (pathname, configs) =>
  configs.find(config => matchPath(pathname, {
    exact: true,
    strict: false,
    ...config
  })
)
export const RouterConfig = [
    {
      path: '/',
      render: props => <MainPage {...props} />,
      meta: {
        index: 0
      }
    },
    {
      path: '/EndBattleMode',
      render: props => <EndBattleMode{...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/MessageCenter',
      render: props => <MessageCenter {...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/:id/profile',
      render: props => <Profile {...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/:id/profile/SelectAvatar',
      render: props => <SelectAvatar {...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MessageCenter/Notification',
      render: props => <Notification {...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MessageCenter/CenterSetting',
      render: props => <CenterSetting {...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MultigameChooser',
      render: props => <MultigameChooser {...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/multigameChooser/tournamentLobby/:id',
      render: props => <TournamentLobby {...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/multigameChooser/tournamentLobby/:id/:entryid/BattleModeJoin',
      render: props => <BattleModeJoin {...props} />,
      meta: {
        index: 3
      }
    },
    {
      path: '/multigameChooser/tournamentLobby/:id/:entryid/ChallengerModeGo',
      render: props => <ChallengerModeGo {...props} />,
      meta: {
        index: 3
      }
    },
    {
      path: '/multigameChooser/tournamentLobby/:id/:entryid/OneVoneMode',
      render: props => <OneVoneMode {...props} />,
      meta: {
        index: 3
      }
    },
    {
      path: '/gametutorial',
      render: props => <GameTutorial {...props} />,
      meta: {
        index: 3
      }
    }
    
  ]
  
