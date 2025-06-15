
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('');
  const [channel, setChannel] = useState('@dreamway_ai');
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    const res = await fetch('https://dreampostback-production.up.railway.app/generate_post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel }),
    });
    const data = await res.json();
    setText(data.text || data.error || 'Помилка генерації');
  };

  const handleSchedule = async () => {
    const res = await fetch('https://dreampostback-production.up.railway.app/schedule_post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel, text, publishAt: datetime }),
    });
    const data = await res.json();
    setStatus(data.status || data.error || 'Помилка');
  };

  return (
    <div className="container">
      <Head>
        <title>DreamPost</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <h1>DreamPost ✨</h1>
        <label>Канал:
          <select value={channel} onChange={(e) => setChannel(e.target.value)}>
            <option value="@dreamway_ai">@dreamway_ai</option>
            <option value="@dreamtech_news">@dreamtech_news</option>
            <option value="@business_tools">@business_tools</option>
          </select>
        </label>
        <label>Дата і час публікації:
          <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        </label>
        <label>Текст поста:
          <textarea rows="6" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <div className="buttons">
          <button onClick={handleGenerate}>✨ Згенерувати</button>
          <button onClick={handleSchedule}>🚀 Запланувати</button>
        </div>
        <p style={{ marginTop: '10px' }}>{status}</p>
      </main>
    </div>
  )
}
