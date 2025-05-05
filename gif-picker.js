const controlsSection = document.querySelector('.controls-section');

const newButton = document.createElement("button");
newButton.innerHTML = `<i class="bx bx-refresh"></i>`;
newButton.onclick = () => {
  toggleGifCard();
};

controlsSection.insertBefore(newButton, controlsSection.querySelector('button[onclick="sendMessage()"]'));

controlsSection.insertAdjacentHTML('beforeend', `
<div id="gif_card" style="width: 400px; position: fixed; max-height: 400px; background: var(--darker-secondary-color); padding: 10px;" class="card">
  <div style="display: flex; align-items: center; justify-content: flex-end; position: relative;">
    <button onclick="toggleGifCard()"><i class="bx bx-x-circle"></i></button>
    <p class="text" style="text-align: center; position: absolute; left: 50%; transform: translateX(-50%);">GIFs</p>
  </div>
  <input id="gif_input" type="text" style="margin: 10px 0;">
  <div id="gif_grid" class="grid" style="background: var(--secondary-color); border-radius: 5px; padding: 10px; overflow: auto; justify-content: center; max-height: 275px;display: flex;flex-wrap: wrap;flex-direction: row;align-items: stretch;">
  </div>
</div>`);

function toggleGifCard() {
  const card = document.getElementById('gif_card');
  if (card) { card.classList.toggle('open'); }
}

document.getElementById('gif_input').addEventListener('keydown', async function (e) {
  if (e.key === 'Enter') {
    const query = this.value.trim();
    if (!query) return;

    const grid = document.getElementById('gif_grid');
    grid.innerHTML = "Loading...";

    try {
      const response = await fetch(`https://g.tenor.com/v1/search?q=${encodeURIComponent(query)}&key=LIVDSRZULELA`);
      const data = await response.json();
      grid.innerHTML = "";
      for (const result of data.results) {
        const media = result.media[0];
        const gifUrl = media?.tinygif?.url || media?.gif?.url;
        if (gifUrl) {
          const img = document.createElement('img');
          img.src = gifUrl;
          img.alt = query;
          img.style.width = "150px";
          img.style.height = "auto";
          grid.appendChild(img);
        }
      }

      if (!grid.hasChildNodes()) {
        grid.innerHTML = "No GIFs found.";
      }

    } catch (error) {
      console.error("GIF fetch error:", error);
      grid.innerHTML = "Failed to load GIFs.";
    }
  }
});
