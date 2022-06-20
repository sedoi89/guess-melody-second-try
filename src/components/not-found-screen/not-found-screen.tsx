import Logo from '../logo/Logo';
function NotFoundScreen () {
  return (
    <div className={'not-found'}>
      <Logo/>
      <h1>Error 404</h1>
      <h2>Page not Found</h2>
    </div>
  );
}

export default NotFoundScreen;
