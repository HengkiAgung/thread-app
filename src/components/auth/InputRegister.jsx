import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function InputRegister({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      return register({ name, email, password });
    }

    alert('Password and password confirm must be same!');
    return null;
  };

  return (
    <div>
      <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" id="name" value={name} onChange={onNameChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="...."/>
      </div>
      <div>
          <label htmlFor="email" className="mt-10 block text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" value={email} onChange={onEmailChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
      </div>
      <div>
          <label htmlFor="password" className="mt-10 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" value={password} onChange={onPasswordChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div>
          <label htmlFor="confirmPassword" className="mt-10 block text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <button type="button"  onClick={onSubmit} className="mt-10 w-full text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
    </div>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
