import WelcomeScreen from '../welcome-screen/welcome-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import WinScreen from '../win-screen/win-screen';
import {AppRoute, AuthorizationStatus} from '../../types/const';
import PrivateRoute from '../private-route/private-route';
import {Questions} from '../../types/question';
import GameScreen from '../game-screen';

type AppScreenProps = {
  errorsCount: number;
  questions: Questions;
}

function App({errorsCount, questions}: AppScreenProps): JSX.Element {

  return (

    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <WelcomeScreen errorsCount={errorsCount}/>
        }
        />
        <Route path={AppRoute.Login} element={<AuthScreen/>}/>
        <Route
          path={AppRoute.Result}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <WinScreen/>
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Lose} element={<GameOverScreen/>}/>
        <Route path={AppRoute.Game}
          element={<GameScreen questions={questions}/>}
        />
        <Route path={'*'} element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
