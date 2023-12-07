import { useState } from 'react';
import { getUserMention, makeComment } from '../../utils/network-data';
import { MdOutlineChat } from 'react-icons/md';

const ThreadActionComponent = ({ id, comment_id = null }) => {
  const [comment, setComment] = useState('');
  const [mentions, setMentions] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [mentionInput, setMentionInput] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const onChangeMention = async (text) => {
    setMentionInput(text);
    const response = await getUserMention(text);
    setListUser(response.data);
  };

  const handleMentionClick = (user) => {
    setMentions([...mentions, user]);
    setComment(`${comment} @${user.name} `);
    setListUser([]);
    setMentionInput('');
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    setError(null);
    setResponseData(null);

    const response = await makeComment({ threads_id: id, comment: comment, comment_id: comment_id, mentions: mentions.map((mention) => mention.id) })

    setIsLoading(false);
    if (response.error) {
      setError(response.data)
    } else {
      setResponseData(response.data)
    }
  };

  return (
    <div className='px-10 py-5'>
      <div className="cursor-pointer" >
        <div className="block lg:flex items-center">
            <MdOutlineChat className='flex-none h-full content-center' onClick={toggleForm}/>
            {showForm && (<div className="block lg:flex lg:flex-1 items-center justify-center">
            <div className="mx-2 mb-6 block lg:flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">Mention</label>
              <input type="text" onChange={(e) => onChangeMention(e.target.value)} value={mentionInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="@...." required />
              <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                {listUser[0] && (<ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                  {listUser.map((user, index) => (
                    <li key={index}>
                      <a onClick={() => handleMentionClick(user)} className="block px-4 py-2 hover:bg-gray-100 ">{user.name}</a>
                    </li>
                  ))}
                </ul>)}
              </div>
            </div>
            <div className="mx-2 mb-6 block lg:flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-900">Your Comment</label>
              <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
          </div>)}
        </div>
        {showForm && (
          <button onClick={handleButtonClick} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-10">Submit</button>
        )}
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {JSON.stringify(error)}</p>}
        {responseData && (
          <div>
            {JSON.stringify(responseData, null, 2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreadActionComponent;
