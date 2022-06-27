import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
      console.log('Pins Category:', pins);
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
      console.log('Pins All:', pins);
    }
  }, [categoryId]);
  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  if (!pins?.length)
    return <h2 className="text-center mt-10">No pins available</h2>;

  return <>{pins && <MasonryLayout pins={pins} />}</>;
};

export default Feed;