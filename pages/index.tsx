import { useState } from 'react';

export default function Home() {
  const [post, setPost] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">DreamPost ✨</h1>
      <textarea
        className="w-full p-2 text-black rounded mb-4"
        rows={5}
        placeholder="Напиши пост..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 text-black rounded mb-4"
        placeholder="Промт для зображення"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div className="flex gap-2 mb-4">
        <input
          type="date"
          className="p-2 text-black rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="p-2 text-black rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded">Опублікувати 🚀</button>
    </div>
  );
}
