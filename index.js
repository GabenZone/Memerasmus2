const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'Memerasmus',
    password: 'oauth:06kls4wbnp7eyrnb1l0292hptamd4l'
  },
  channels: [
    'terrorist_doge'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!rtd') {
    let rtdModes = ['God Mode', 'Toxic', 'Lucky Sandvich', 'Faster Speed', 'NoClip', 'Low Gravity', 'Unlimited Uber', 'Invisibility', 'Cloak', 'Crits', 'Infinite Ammo', 'Scary Bullets', 'Instant Sentry', 'Homing Projectiles',
    'Instant Charge', 'Dispesner Pop Up', 'Infinite Double Jump', 'Instant Kills', 'Tiny Player', 'Explode', 'Snail', 'Frozen', 'Timebomb', 'Spontaneous Combustion', 'Low Health', 'Drugged', 'Blind', 'Stripped to Melee', 'Beacon',
    'Taunt', 'Nostalgia', 'Earthquake', 'Funny Feeling', 'Mystery Sauce', 'Big Head', 'Infinity Gauntlet', 'Diamond Hoe with Knockback III']

    var rtd = rtdModes[Math.floor(Math.random()*rtdModes.length)];

    client.action('terrorist_doge', 'terrorist_doge rolled ' + rtd + '!');
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
