import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    let userObject = jwt_decode(response.credential);
    localStorage.setItem('user', JSON.stringify(userObject));
    const { sub, name, picture } = userObject;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
      callback: responseGoogle,
    });
    google.accounts.id.renderButton(document.getElementById('signInGoogle'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-800">
      <div id="signInGoogle"></div>
    </div>
  );
};

export default Login;
