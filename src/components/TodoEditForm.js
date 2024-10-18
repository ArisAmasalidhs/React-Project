import React from 'react';

function TodoEditForm({ editValue, setEditValue, saveEdit }) {
  return (
    <div>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button onClick={saveEdit}>Save</button>
    </div>
  );
}

export default TodoEditForm;
