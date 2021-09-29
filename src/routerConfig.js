import { matchPath } from "react-router-dom"
import MainPage from './component/Pages/MainPage/MainPage'
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
    }
    
  ]
  
