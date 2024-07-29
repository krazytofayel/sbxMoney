import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useTokenValidation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = () => {
      const tokenSetTimestamp = localStorage.getItem('tokenSetTimestamp');
      if (tokenSetTimestamp) {
        const tokenSetDate = new Date(tokenSetTimestamp);
        const currentTime = new Date();
        const diffHoures = (currentTime - tokenSetDate) / (1000 *60*60);

        if (diffHoures >= 2) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('tokenSetTimestamp');
          localStorage.removeItem('user');
          toast.error('Session expired. Please log in again.');
          navigate('/sign_in'); 
        }
      }
    };

    validateToken();

    // Set up an interval to validate the token periodically in every minute it check 
    const intervalId = setInterval(validateToken, 60000); // 60000 ms = 1 minute

    // Clean up interval on component unmount to prevent memory leack(basically use memory and return those after work when the process did not return properly then happen leaks)
    return () => clearInterval(intervalId);
  }, [navigate]);
};

export default useTokenValidation;
