import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useTokenValidation = () => {
  const navigate = useNavigate();
  const TOKEN_EXPIRY_HOURS = 2;
  const VALIDATION_INTERVAL_MS = 60000; // 1 minute

  useEffect(() => {
    const validateToken = () => {
      const tokenSetTimestamp = localStorage.getItem('tokenSetTimestamp');
      if (tokenSetTimestamp) {
        const tokenSetDate = new Date(tokenSetTimestamp);
        const currentTime = new Date();
        const diffHours = (currentTime - tokenSetDate) / (1000 * 60 * 60);

        if (diffHours >= TOKEN_EXPIRY_HOURS) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('tokenSetTimestamp');
          localStorage.removeItem('user');
          toast.error('Session expired. Please log in again.');
          navigate('/sign_in');
        }
      }
    };

    validateToken();

    // Set up an interval to validate the token periodically every minute
    const intervalId = setInterval(validateToken, VALIDATION_INTERVAL_MS);

    // Clean up interval on component unmount to prevent memory leack(basically use memory and return those after work when the process did not return properly then happen leaks)
    return () => clearInterval(intervalId);
  }, [navigate]);
};

export default useTokenValidation;
