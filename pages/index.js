
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')
  const [generated, setGenerated] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [status, setStatus] = useState('Очікує')
  const [theme, setTheme] = useState('Цікаве про штучний інтелект')

  const handleGenerate = async () => {
    setStatus('Генерація...')
    try {
      const res = await fetch('https://dreampostback-production.up.railway.app/generate_post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme })
      })
      const data = await res.json()
      setGenerated(data.text || 'Помилка генерації')
      setStatus('Згенеровано')
    } catch (e) {
      setGenerated('')
      setStatus('❌ Помилка генерації')
    }
  }

  const handlePublish = async () => {
    setStatus('Публікація...')
    try {
      const res = await fetch('https://dreampostback-production.up.railway.app/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, image_url: imageUrl, date: dateTime })
      })
      const data = await res.json()
      setStatus(data.status || '✅ Успішно')
    } catch {
      setStatus('❌ Помилка при відправці')
    }
  }

  return (
    <>
      <Head>
        <title>DreamWay AI</title>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <h1>DreamWay AI ✨</h1>
        <input type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        <input placeholder="Тема" value={theme} onChange={(e) => setTheme(e.target.value)} />
        <input placeholder="Посилання на зображення" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <textarea placeholder="Згенеруй пост у стилі DreamWay AI" value={text} onChange={(e) => setText(e.target.value)} />
        <textarea placeholder="Текст поста" value={generated} onChange={(e) => setGenerated(e.target.value)} />
        <p>Статус: <b>{status}</b></p>
        <div className="row">
          <button onClick={handleGenerate}>GPT ✨ Згенерувати</button>
          <button onClick={handlePublish}>Опублікувати 🚀</button>
        </div>
      </main>
    </>
  )
}
