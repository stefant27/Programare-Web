// src/QuickNote.jsx
import { useState } from 'react';

function QuickNote() {
  const [note, setNote] = useState('');

  return (
    <div>
      <h3>Nota rapida</h3>
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Scrie o notă rapidă..."
      />
      <p className="note-preview">Ai scris: {note}</p>
    </div>
  );
}

export default QuickNote;