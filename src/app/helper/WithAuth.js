// WithAuth.js
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { callFetcher } from './fetcher';


const WithAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
      (async () => {
        const token = Cookies.get('token');
        if (!token) {
          router.push('/login');
          return;
        }
        try {
          const userData = await callFetcher('user/profile', 'get');
          // console.log('userData: ', userData);
          if (!userData) {
            console.log('!userData');
            Cookies.remove('token');
            router.push('/login');
            return;
          }
          setUser(userData);
          return;
        } catch (error) {
          console.error(error);
          Cookies.remove('token');
          router.push('/login');
          return;
        }
      })()
    }, []);

    return <WrappedComponent {...props } userData={user} />;
  };

  return Wrapper;
};

export default WithAuth;
