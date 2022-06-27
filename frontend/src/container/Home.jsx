import { useState, useRef, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, Profile, Navbar, Feed } from '../components';
import Pins from './Pins';
import { client } from '../client';
import { userQuery } from '../utils/data';

const Home = () => {
  const [user, setUser] = useState(null);

  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);
    client.fetch(query).then((data) => {
      setUser(...data);
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex flex-col w-full h-screen">
        <Routes>
          <Route path="/user-profile/:userId" element={<Profile />} />
          <Route path="/*" element={<Pins user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
