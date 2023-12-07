import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function LogoutButton({ name, logout }) {
  return (
    <div className="flex">
      <div className="text-white m-auto">
        <FiLogOut />
      </div>
      <button className="block ml-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={logout} type="button">
        {' '}
        {name}
      </button>
    </div>
  );
}

LogoutButton.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;
