import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { client, urlFor } from '../client';
import { fetchUser } from '../utils/fetchUser';

const Pin = ({ pin }) => {
  const { postedBy, image, _id, destination, save } = pin;

  const [postHovered, setPostHovered] = useState(false);

  const navigate = useNavigate();
  const user = fetchUser();

  const alreadySaved = !!save?.filter((item) => item.postedBy._id === user.sub)
    .length;

  const savePin = (id) => {
    if (!alreadySaved) {
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert('after', 'save[-1]', [
          {
            _key: uuidv4(),
            userId: user.sub,
            postedBy: {
              _type: 'postedBy',
              _ref: user.sub,
            },
          },
        ])
        .commit()
        .then(() => {
          window.location.reload();
        });
    }
  };

  const deletePin = (id) => {
    client.delete(id).then(() => {
      window.location.reload();
    });
  };

  return (
    <div
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      onClick={() => navigate(`/pin-detail/${_id}`)}
      className="relative cursor-zoom-in w-max m-2"
    >
      <img
        className="rounded-lg -full"
        alt="user-post"
        src={urlFor(image).width(250).url()}
      />
      {postHovered && (
        <div className="absolute top-0 p-2 w-full h-full flex flex-col justify-between">
          <div className="flex text-white justify-between">
            <Link
              to={`user-profile/${postedBy?._id}`}
              className="flex items-center"
            >
              <img
                src={postedBy?.image}
                alt="user-profile"
                className="w-7 rounded-full mr-1"
              />
              <span className="font-medium text-sm">{postedBy?.userName}</span>
            </Link>
            {alreadySaved ? (
              <button className="px-4 font-medium text-sm bg-red-700 rounded-full opacity-75 hover:opacity-100">
                {save?.length} Saved
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  savePin(_id);
                }}
                className="px-4 font-medium text-sm bg-red-700 rounded-full opacity-75 hover:opacity-100"
              >
                Save
              </button>
            )}
          </div>
          <div className="flex justify-between">
            {destination && (
              <a
                href={destination}
                target="_blank"
                className="flex items-center bg-white w-max px-3 py-1 opacity-75 hover:opacity-100 rounded-full"
              >
                <BsFillArrowUpRightCircleFill className="mr-1" />
                {destination.length > 20
                  ? destination.slice(8, 20)
                  : destination.slice(8)}
              </a>
            )}
            {postedBy?._id === user.sub && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  deletePin(_id);
                }}
                className="px-3 font-medium text-sm bg-white rounded-full opacity-75 hover:opacity-100"
              >
                <AiTwotoneDelete />
              </button>
            )}
            <a
              href={`${image?.asset?.url}?dl=`}
              download
              onClick={(e) => e.stopPropagation()}
              className="text-white opacity-75 hover:opacity-100"
            >
              <MdDownloadForOffline fontSize={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pin;
