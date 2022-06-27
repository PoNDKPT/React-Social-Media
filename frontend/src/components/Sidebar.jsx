import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { categories } from '../utils/data';

const Sidebar = ({ user }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const isActiveStyle = `flex items-center text-gray-900 rounded-lg bg-gray-100 opacity-100 ${
    toggleSidebar && 'py-2 px-3 w-full'
  }`;
  const notActiveStyle = `flex items-center opacity-50 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
    toggleSidebar && 'py-2 px-3 w-full'
  }`;

  return (
    <>
      <div
        className={`${
          toggleSidebar ? 'w-64' : 'w-14 md:w-20'
        } duration-300  flex flex-col h-screen fixed top-0 z-20 bg-white border-r justify-between select-none`}
      >
        <div className="md:mx-4 mx-1 my-6">
          <div className="flex items-center border-b pb-4">
            <span className="block w-32 h-10 bg-gray-200 rounded-lg"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`w-6 h-6 absolute -right-3 ${
                !toggleSidebar && 'rotate-180'
              }`}
              onClick={() => setToggleSidebar(!toggleSidebar)}
            >
              <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
            </svg>
          </div>

          <nav className="flex flex-col mt-6 space-y-1 h-full">
            <Link
              to="/"
              className="flex items-center px-4 py-3 text-white bg-gray-800 hover:bg-gray-700 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
              </svg>
              <span
                className={`ml-3 text-sm font-medium whitespace-nowrap ${
                  !toggleSidebar && 'hidden'
                }`}
              >
                Home
              </span>
            </Link>

            <details className="group" open>
              <summary className="flex items-center px-4 py-3 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M232.5 5.171C247.4-1.718 264.6-1.718 279.5 5.171L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.171zM498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8L444.9 209.6L498.1 234.2zM292.9 407.8L444.9 337.6L498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8V407.8z" />
                </svg>
                <span
                  className={`ml-3 mr-2 text-sm font-medium whitespace-nowrap ${
                    !toggleSidebar && 'hidden'
                  }`}
                >
                  Discover Categories
                </span>
                <span
                  className={`ml-auto transition duration-300 shrink-0 group-open:-rotate-180 ${
                    !toggleSidebar && 'hidden'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </span>
              </summary>

              <nav
                className={`mt-1 pt-1 flex flex-col gap-2 border-t-4 border-double overflow-auto h-96 scrollbar ${
                  toggleSidebar
                    ? 'items-start ml-8 border-none'
                    : 'items-center'
                }`}
              >
                {categories.map((category) => (
                  <NavLink
                    to={`/category/${category.title}`}
                    key={category.title}
                    className={({ isActive }) =>
                      isActive ? isActiveStyle : notActiveStyle
                    }
                    onClick={() => setToggleSidebar(false)}
                  >
                    <img
                      src={category.image}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <span
                      className={`ml-3 text-sm font-medium capitalize ${
                        !toggleSidebar && 'hidden'
                      }`}
                    >
                      {category.title}
                    </span>
                    {/* <div className="hidden group-hover:block absolute left-[105%] border py-1 px-3 rounded-md text-sm font-medium bg-gray-500 text-white">
                      <span className="">{category.title}</span>
                    </div> */}
                  </NavLink>
                ))}
              </nav>
            </details>
          </nav>
        </div>
        <div className="inset-x-0 bottom-0 border-t border-gray-100">
          <Link
            to={`user-profile/${user?._id}`}
            className="flex justify-center items-center p-1 md:p-4 bg-white hover:bg-gray-50 shrink-0"
            onClick={() => setToggleSidebar(false)}
          >
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={user?.image}
            />

            <div className={`ml-1.5 ${!toggleSidebar && 'hidden'}`}>
              <p className="text-xs">
                <strong className="block font-medium">{user?.userName}</strong>

                <span>View profile</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
