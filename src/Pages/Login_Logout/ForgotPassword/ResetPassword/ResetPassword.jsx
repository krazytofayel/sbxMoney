import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const { token } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:8000/api/auth/reset-password', {
        token,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      toast.success('Password has been reset successfully.');
    } catch (error) {
      toast.error('Error resetting password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full flex items-center justify-center text-center p-6">
        <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold mb-4">Reset Password</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                {...register('password', { required: true })}
                className="block w-full p-3 border border-gray-300 rounded"
                placeholder="Enter new password"
              />
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword', { required: true })}
                className="block w-full p-3 border border-gray-300 rounded"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <p className="text-red-500">Confirm password is required</p>}
            </div>
            <button
              type="submit"
              className={`w-full p-3 text-white font-bold rounded ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
