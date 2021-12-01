import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.greeting);
  const greeting = entities[0];

  useEffect(() => {
    if (entities.length === 0) {
      dispatch(fetchGreeting());
    }
  }, [dispatch, entities]);

  return (
    <div>
      <p>{greeting}</p>
      <p>Hello component</p>
    </div>
  );
};

export default Greeting;
