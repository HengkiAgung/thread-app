import { useState } from 'react';

const MentionDropdownComponent = ({ users, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (user) => {
    onSelect(user);
    setSearchTerm('');
  };

  return (
    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow">
      <input
        type="text"
        className="w-full p-2 border-b border-gray-300"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li
            key={user.id}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleUserSelect(user)}
          >
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentionDropdownComponent;
