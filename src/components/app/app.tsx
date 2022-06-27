import {Route, Routes} from 'react-router-dom';
import {AppRoute, MAX_MISTAKE_COUNT} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import GameScreen from '../game-screen/game-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckAuth} from '../../game';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../rowser-history';


function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  if (isCheckAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen errorsCount={MAX_MISTAKE_COUNT} />}
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.Result}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <WinScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Lose}
          element={<GameOverScreen />}
        />
        <Route
          path={AppRoute.Game}
          element={
            <GameScreen />
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
