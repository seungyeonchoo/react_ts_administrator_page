import { useEffect } from 'react';
import useFetch from './hooks/useFetch';
import ApiService from './service/api';

function App() {
  const { data } = useFetch('users', ['users']);
  return <div>app</div>;
}

export default App;
