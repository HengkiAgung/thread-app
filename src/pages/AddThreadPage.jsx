import { addThread } from '../utils/network-data';
import useInput from '../hooks/useInput';
import AddThreadInput from '../components/AddThreadInput';
import SubmitThreadButton from '../components/buttons/SubmitThreadButton';

function AddThread() {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const onSubmit = async () => {
    await addThread({ title, body });
  };

  return (
    <div className="add-new-page">
      <AddThreadInput
        title={title}
        body={body}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
      />
      <div className="add-new-page__action">
        <SubmitThreadButton onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default AddThread;
