module.exports = {
  TOKEN: "MTEzMTk1Mjg3NDk1NjUzNzkyMQ.G9ka8U.Fi8AAww-Wp3pKAnLErjfIkIaB0aef_5AQMGf_Q",
  ownerID: ["498189089347207168"], //write your discord user id. example: ["id"] or ["id1","id2"]
  botInvite: "", //write your discord bot invite.
  supportServer: "https://discord.gg/MCEf2F3NUp", //write your discord bot support server invite.
  mongodbURL: "mongodb+srv://fkayaer9:malmustafa@cluster0.ktjiegu.mongodb.net/?retryWrites=true&w=majoritymalmustafa", //write your mongodb url.
  status: '/play normal',
  commandsDir: './commands', //Please don't touch
  language: "tr", //en, tr, nl, pt, fr, ar, zh_TW, it, ja
  embedColor: "ffa954", //hex color code
  errorLog: "1132412182605348915", //write your discord error log channel id.


  sponsor: {
    status: true, //true or false
    url: "https://discord.gg/MCEf2F3NUp", //write your discord sponsor url.
  },

  voteManager: { //optional
    status: false, //true or false
    api_key: "", //write your top.gg api key. 
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
    vote_url: "", //write your top.gg vote url.
  },

  shardManager: {
    shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
  },

  playlistSettings: {
    maxPlaylist: 4, //max playlist count
    maxMusic: 5, //max music count
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
    },

    voiceConfig: {
      leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
      leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

      leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
        status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
        cooldown: 100000, //1000 = 1 second
      },

    },

    maxVol: 80, //You can specify the maximum volume level.

  }
}