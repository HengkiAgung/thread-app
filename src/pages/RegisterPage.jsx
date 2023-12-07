import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import InputRegister from '../components/auth/InputRegister';

function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Aplikasi Threads    
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Masuk data akun anda
                  </h1>
                  <InputRegister register={onRegisterHandler} />
                  {/* <form className="space-y-4 md:space-y-6" action="#">
                      
                  </form> */}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Sudah punya akun? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
}

export default RegisterPage;
