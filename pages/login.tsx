import * as React from 'react';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function LoginPage() {
  useEffect(() => {
    const {query} = useRouter();

    console.log(query);
  }, []);

  return (
    <div
      role={'img'}
      style={{
        backgroundImage: `url('${process.env.STATIC_URL}/images/backgrounds/login-page-image.jpg')`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'left center'
      }}
    />
  );
}
LoginPage.displayName = 'LoginPage';
