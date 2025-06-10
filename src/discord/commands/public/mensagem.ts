import { createCommand } from "#base";
import { ApplicationCommandType } from "discord.js";

createCommand({
    name: "mensagem",
    description: "Envia uma mensagem simples 💬",
    type: ApplicationCommandType.ChatInput,
    async run(interaction) {
        await interaction.reply({
            content: "Olá! Esta é uma mensagem simples enviada pelo bot. 🎉",
            ephemeral: true // Torna a mensagem visível apenas para quem usou o comando
        });
    }
});
