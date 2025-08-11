import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getURL } from '../firebase';

export default () => {
  const location = useLocation();

  useEffect(() => {
    getURL(location.pathname.substring(1)).then(val => window.location.href = val)
  }, [])

  return (
    <>
      <h1>Redirecting: {location.pathname.substring(1)}</h1>
    </>
  )
}
