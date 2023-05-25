import {signInWithGoogle} from '../firebase'

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <button
          onClick={signInWithGoogle}
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
