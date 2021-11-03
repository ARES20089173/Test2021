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
import WalletMain from './component/Pages/Wallet/WalletMain' ;
import TranscationHistory from './component/Pages/Wallet/TranscationHistory' ;
import HistoryDetail from './component/Pages/Wallet/HistoryDetail' ; 
import SaveCards from './component/Pages/Wallet/SaveCard'
import AddNewMethod from './component/Pages/Wallet/AdNmethod'
import AddNewCards from './component/Pages/Wallet/AddNewCard'
import PuzzlePackage from './component/Pages/Wallet/PuzzlePackage'
import MissionMain from './component/Pages/Mission/MissionMain'
import SupportGuide from './component/Pages/Mission/SupportGuide'
import RewardStatus from './component/Pages/Mission/RewardStatus'
import FAQ from './component/Pages/Mission/FAQ'
import Policy from './component/Pages/Mission/Policy'
import Service from './component/Pages/Mission/TermOfService'
import MatchHistory from './component/Pages/History/MatchHistory' 
import BattleModeDetail from './component/Pages/History/BattleModeDetail' 
import BalttleOtherinfo from './component/Pages/History/BalttleOtherinfo' 
import OneVOneModeDetail from './component/Pages/History/OneVOneModeDetail' 
import Prize from './component/Pages/History/ChallengeModeDetail' 
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
      path: '/Wallet',
      render: props => <WalletMain{...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/MissionMain',
      render: props => <MissionMain{...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/MissionMain/RewardStatus',
      render: props => <RewardStatus{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MissionMain/SupportGuide',
      render: props => <SupportGuide{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MissionMain/FAQ',
      render: props => <FAQ{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MissionMain/Policy',
      render: props => <Policy{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/MissionMain/Service',
      render: props => <Service{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/Wallet/TranscationHistory',
      render: props => <TranscationHistory{...props} />,
      meta: {
        index: 2
      }
    },   
    {
      path: '/Wallet/SaveCards',
      render: props => <SaveCards{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/Wallet/SaveCards/AddNewCards',
      render: props => <AddNewCards{...props} />,
      meta: {
        index: 3
      }
    },
    {
      path: '/Wallet/SaveCards/AddNewMethod',
      render: props => <AddNewMethod{...props} />,
      meta: {
        index: 3
      }
    },
    {
      path: '/Wallet/PuzzlePackage',
      render: props => <PuzzlePackage{...props} />,
      meta: {
        index: 2
      }
    },
    {
      path: '/Wallet/TranscationHistory/:id/Detail',
      render: props => <HistoryDetail{...props} />,
      meta: {
        index: 3
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
  
