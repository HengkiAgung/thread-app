import PropTypes from 'prop-types';

function AddThreadInput({
  onTitleChange, onBodyChange, title, body,
}) {
  return (
    <div className='m-auto mt-20 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Judul Postingan</label>
        <input type="text" id="title" value={title} onChange={onTitleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Threads rahasia" required/>
      </div> 
      <div className="mb-6">
        <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900">Deskripsi</label>
        <textarea id="body" placeholder="Sebenarnya saya adalah ...." value={body} onChange={onBodyChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
      </div> 
    </div>
  );
}

AddThreadInput.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default AddThreadInput;
