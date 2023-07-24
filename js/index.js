const main_items = [
  {
    "name": "RAZER VIPER MINI SIGNATURE EDITION",
    "theme": "THE BEST LIGHTWEIGHT PERFORMANCE GAMING MOUSE",
    "background": "Assets/backgrounds/viper-mini-signature.png",
    "links":["Learn More","Buy"]
  },
  {
    "name": "PRIME DOMINATION UNLEASHED",
    "theme": "EXCLUSIVE OFFERS AWAIT",
    "background": "Assets/backgrounds/prime-day-2023.png",
    "links":["Shop Now"]
  },
  {
    "name": "NEW RAZER BLADE 14",
    "theme": "SMALL SIZE. BIG PERFORMENCE",
    "background": "Assets/backgrounds/razer-blade-14-2023-homepage-desktop.jpg",
    "links":["Learn More","Buy"]
  },
  {
    "name": "RAZER MORAY",
    "theme": "ALL DAY STREAMING. ALL DAY COMFORT",
    "background": "Assets/backgrounds/moray-homepage-desktop.jpg",
    "links":["Learn More","Buy"]
  }
]
const side_items = [
  {
    "name": "RAZER COBRA PRO",
    "theme": "PERFECTED FOR PLAY",
    "background": "Assets/backgrounds/cobra-pro-homepage-desktop.jpg",
    "links":["Learn More","Buy"]
  },
  {
    "name":"RAZER DEATHSTALKER V2 PRO TENKEYLESS",
    "theme":"LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS.",
    "background":'Assets/backgrounds/deathstalker-pro-tkl.png',
    "links":["Learn More","Buy"]
  },
  {
    "name":"DECIMATE DINO HORDES IN EXOPRIMAL",
    "theme":"BE READY WITH OUR BEST GEAR",
    "background":'Assets/backgrounds/exoprimal-b.png',
    "links":["Learn More"]
  },
    {
    "name":"RAZER | PUBG: BATTLEGROUNDS",
    "theme":"SECURE YOUR SURVIVAL",
    "background":'Assets/backgrounds/razer-pubg.png',
    "links" : ["Learn More"]
  },
    {
    "name":"NEW RAZER BLADE 16 & 18 MERCURY",
    "theme":"PERFORMANCE REIMAGINED",
    "background":'Assets/backgrounds/mercury-blade16-blade18.png',
    "links":["Razer Blade 16", "Razer Blade 18"]
  },
    {
    "name":"RAZER ENKI PRO",
    "theme":"AUTOMOBILI LAMBORGHINI EDITION",
    "background":'Assets/backgrounds/enkipro-lamborghini.png',
    "links" : ["Learn More", "Buy"]
  }
]


for (let i = 0; i < main_items.length; i++) {
  document.getElementById('main_display_items').innerHTML += `
   <div class="main_display_item" style="background-image: url(${main_items[i].background});">
      <span class="main_display_item_header display_item_text">${main_items[i].name}</span>
      <span class="main_display_item_theme display_item_text">${main_items[i].theme}</span>
      <span class="main_display_item_links display_item_text">
      <div class="link-flex" id="main-link-flex${i}"></div>
      </span>
    </div>
    `

  for (let j = 0; j < main_items[i].links.length; j++) {
  document.getElementById(`main-link-flex${i}`).innerHTML += ` 
      <div><a href="#" class="links">${main_items[i].links[j]}</a>
      >
      </div>
      `
    
  }
}

for (let i = 0; i < side_items.length; i++) {
  document.getElementById('side_display_items').innerHTML += `
   <div class="side_display_item" style="background-image: url(${side_items[i].background});">
      <span class="side_display_item_header display_item_text">${side_items[i].name}</span>
      <span class="side_display_item_theme display_item_text">${side_items[i].theme}</span>
      <span class="side_display_item_links display_item_text">
      <div class="link-flex" id="side-link-flex${i}"></div>
      </span>
    </div>
    `
  for (let j = 0; j < side_items[i].links.length; j++) {
  document.getElementById(`side-link-flex${i}`).innerHTML += ` 
      <div><a href="#" class="links">${side_items[i].links[j]}</a>
      >
      </div>
      `
    
  }
}
