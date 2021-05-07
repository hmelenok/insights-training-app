import * as React from 'react';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {getToken, redirectToAuthWithReturn, setToken} from '../src/helpers/routing';

function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const {shelf_auth_token} = router.query;

    const authToken = (shelf_auth_token as string) || getToken();

    if (authToken) {
      setToken(authToken);

      router.push('/');
    } else {
      redirectToAuthWithReturn();
    }
  }, []);

  return (
    <div
      role={'img'}
      style={{
        backgroundImage: `url('${process.env.STATIC_URL}/images/backgrounds/login-page-image.jpg')`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
      }}
    />
  );
}
LoginPage.displayName = 'LoginPage';
export default LoginPage;
