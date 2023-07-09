const main_items = [
  {
    "name": "RAZER COBRA PRO",
    "theme": "PERFECTED FOR PLAY",
    "background": "Assets/cobra-pro-homepage-desktop.jpg"
  },
  {
    "name": "NEW RAZER BLADE 14",
    "theme": "SMALL SIZE. BIG PERFORMENCE",
    "background": "Assets/razer-blade-14-2023-homepage-desktop.jpg"
  },
  {
    "name": "RAZER MORAY",
    "theme": "ALL DAY STREAMING. ALL DAY COMFORT",
    "background": "Assets/moray-homepage-desktop.jpg"
  }
]

for (let i = 0; i < main_items.length; i++) {
document.getElementById('display_items').innerHTML += `
   <div class="display_item" style="background-image: url(${main_items[i].background});">
      <span class="display_item_header display_item_text">${main_items[i].name}</span>
      <span class="display_item_theme display_item_text">${main_items[i].theme}</span>
      <span class="display_item_links display_item_text"><a href="#" class="shop-now">Learn More</a>>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="shop-now">Buy</a>></span>
    </div>
    `
}