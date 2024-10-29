import {atom,selector} from 'recoil'
import { authorizeCheck } from '../authorizedCheck';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const authorizedState = atom({
    key:'authorizedState',
    default:false
})

export const loadingState = atom({
    key: 'loadingState',
    default: true,
  });
  
  export const userState = atom({
    key: 'userState',
    default: null,
  });
  
  export const userIdState = atom({
    key: 'userIdState',
    default: null,
  });

  export const checkAuthSelector = selector({
    key:'checkAuthSelector',
    get:async()=>{
        try {
            const response = await authorizeCheck();
            if (response === -1) {
              // Not authorized
              return {
                authorized: false,
                userId: null,
              };
            } else {
              // Authorized
              return {
                authorized: true,
                userId: response,
              };
            }
          }
          catch (error) {
            console.error('Error checking authorization:', error);
            return {
              authorized: false,
              userId: null,
            };
          }
        },
      });

      export const fetchUserDetailsSelector = selector({
        key: 'fetchUserDetailsSelector',
        get: async ({ get }) => {
          const { authorized, userId } = get(checkAuthSelector);
      
          if (!authorized || !userId) {
            return null;
          }
      
          try {
            const response = await axios.get(`${BACKEND_URL}/getUser/?id=${userId}`);
            return response.data;
          } catch (error) {
            console.error("Error fetching user details:", error);
            return null;
          }
        },
      });