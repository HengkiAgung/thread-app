import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiCheckLine } from 'react-icons/ri';

function SubmitThreadButton({ onSubmit }) {
  return (
    <Link to="/" onClick={() => onSubmit()} className='fixed z-90 bottom-10 right-8 justify-center items-center text-white flex text-2xl p-0 w-16 h-12 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
      <RiCheckLine />
    </Link>
  );
}

SubmitThreadButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitThreadButton;
