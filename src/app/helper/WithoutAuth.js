// WithAuth.js
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const WithoutAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token');

      if (token) {
        router.push('/profile');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default WithoutAuth;
