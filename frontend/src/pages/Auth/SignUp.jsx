import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../../components/layouts/AuthLayout';
import ProfilePhotoSelector from '../../components/layouts/Inputs/ProfilePhotoselector';
import Input from '../../components/layouts/Inputs/Input';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminInviteToken, setAdminInviteToken] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName) return setError('Please enter your full name.');
    if (!validateEmail(email)) return setError('Please enter a valid email address.');
    if (!password) return setError('Please enter your password.');
    setError('');
    // navigate('/dashboard'); // your route after successful signup
 try{

 } catch (error){

 }
 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form Content */}
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
          <p className="text-sm text-gray-600 mt-2 mb-6">
            Join us today by entering your details below.
          </p>

          <div className="flex justify-center mb-6">
            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                value={fullName}
                onChange={({ target }) => setFullName(target.value)}
                label="Full Name"
                placeholder="Jack"
                type="text"
              />
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                label="Email Address"
                placeholder="jack@example.com"
                type="email"
              />
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 characters"
                type="password"
              />
              <Input
                value={adminInviteToken}
                onChange={({ target }) => setAdminInviteToken(target.value)}
                label="Admin Invite Token"
                placeholder="6 Digit Code"
                type="text"
              />
            </div>

            {error && <p className="text-sm text-red-500 -mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-200"
            >
              SIGN UP
            </button>

            <p className="text-sm text-gray-600 text-center mt-3">
              Already have an account?{' '}
              <Link className="text-blue-600 font-medium underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
        </div>
    </div>
  );
};

export default SignUp;

