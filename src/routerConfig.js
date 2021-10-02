import { matchPath } from "react-router-dom"
import GameTutorial from "./component/Pages/MainPage/GameTutorial";
import MainPage from './component/Pages/MainPage/MainPage'
import MessageCenter from "./component/Pages/MainPage/MessageCenter";
import MultigameChooser from './component/Pages/MainPage/MultigameChooser';
import TournamentLobby from './component/Pages/MainPage/TournamentLobby';
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
      path: '/MessageCenter',
      render: props => <MessageCenter {...props} />,
      meta: {
        index: 1
      }
    },
    {
      path: '/MessageCenter/CenterSetting',
      render: props => <MessageCenter {...props} />,
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
      path: '/gametutorial',
      render: props => <GameTutorial {...props} />,
      meta: {
        index: 3
      }
    }
    
  ]
  
