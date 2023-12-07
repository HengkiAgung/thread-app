import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMention } from 'react-icons/md';
import { MentionThread, unMentionThread } from '../../utils/network-data';

function MentionThreadButton({ Mention, id }) {
  const navigate = useNavigate();

  const MentionHandler = async (Mention, id) => {
    if (Mention) {
      const { error } = await unMentionThread(id);
      return error;
    }
    const { error } = await MentionThread(id);
    return error;
  };

  const onMention = async (id) => {
    const error = await MentionHandler(Mention, id);
    if (!error) {
      navigate('/');
    } else {
      alert('Gagal Mengarsip Threads!');
    }
  };

  return (
    <button className="text-amber-500 text-2xl" type="button" title="arsip" onClick={() => onMention(id)}>
      <MdOutlineMention />
    </button>
  );
}

MentionThreadButton.propTypes = {
  Mention: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default MentionThreadButton;
