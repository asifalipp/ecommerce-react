import { useLayoutEffect } from 'react';
import { APP_NAME } from '@/constants/app';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = `${APP_NAME} - Online Shopping Site for Spices, Dry Fruits, Nuts, Dates, Coffee Powder, Pepper, &amp; More. Best Offers!`;
    }
  }, [title]);
};

export default useDocumentTitle;
