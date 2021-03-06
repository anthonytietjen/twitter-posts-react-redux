import { memo } from 'react';
import { SearchPage } from './pages/SearchPage/SearchPage';

export const App = memo(() => {
  // If more pages get added in the future, add a Router here
  return (
    <SearchPage />
  );
});
