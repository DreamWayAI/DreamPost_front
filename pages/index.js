import { useState } from 'react';

export default function Home() {
  const [post, setPost] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="bg-gray-950 text-white min-h-screen p-6 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-400">DreamPost ✨</h1>
        <textarea
          className="w-full p-4 text-black rounded-lg mb-4"
          rows={5}
          placeholder="Напиши пост..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-3 text-black rounded-lg mb-4"
          placeholder="Промт для зображення"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="flex gap-2 mb-6">
          <input
            type="date"
            className="p-3 text-black rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="p-3 text-black rounded-lg"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button className="bg-purple-600 hover:bg-purple-800 transition px-6 py-3 rounded-xl text-white font-medium">
          Опублікувати 🚀
        </button>
      </div>
    </div>
  );
}
