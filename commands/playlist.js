const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist que mais escuto"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/6PclpIpOmL3KsHChTedudu?si=a308c72aa27a42e6")
    }
}