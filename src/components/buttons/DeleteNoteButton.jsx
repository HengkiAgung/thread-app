import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteThread } from '../../utils/network-data';

function DeleteThreadButton({ id }) {
  const navigate = useNavigate();

  const onDelete = async (id) => {
    const { error } = await deleteThread(id);
    if (!error) {
      navigate('/');
    } else {
      alert('Gagal Menghapus Threads!');
    }
  };

  return (
    <button className="text-red-500 text-2xl" type="button" title="delete" onClick={() => onDelete(id)}>
      <MdDeleteOutline />
    </button>
  );
}

DeleteThreadButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteThreadButton;
