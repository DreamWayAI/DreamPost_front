function cleanText(text) {
    return text.replace(/[\u200B-\u200D\uFEFF]/g, '');
}

async function generate() {
    const prompt = cleanText(document.getElementById("prompt").value);
    document.getElementById("status").innerText = "Статус: Генерується...";
    try {
        const res = await fetch("https://dreampostback-production.up.railway.app/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        document.getElementById("result").value = data.text || "⚠️ Помилка генерації";
        document.getElementById("status").innerText = "Статус: Згенеровано";
    } catch {
        document.getElementById("status").innerText = "❌ Помилка при генерації";
    }
}

async function publish() {
    const postText = cleanText(document.getElementById("result").value);
    const channel = document.getElementById("channel").value;
    const image = document.getElementById("image").value;
    const date = document.getElementById("datetime").value;
    document.getElementById("status").innerText = "Статус: Публікація...";

    try {
        const res = await fetch("https://dreampostback-production.up.railway.app/publish", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: postText, channel, image, date })
        });
        const result = await res.json();
        document.getElementById("status").innerText = result.ok ? "✅ Опубліковано!" : "❌ Помилка публікації";
    } catch {
        document.getElementById("status").innerText = "❌ Помилка при відправці";
    }
}