import { createEvent } from "#base";
import { Events, EmbedBuilder } from "discord.js";

const PREFIX = "!"; // Altere aqui para o prefixo desejado

createEvent({
    name: "Mensagem Prefix Command",
    event: Events.MessageCreate,
    async run(message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(PREFIX)) return;

        const [command] = message.content.slice(PREFIX.length).trim().split(/\s+/);

        if (command === "mensagem") {
            const embed = new EmbedBuilder()
                .setTitle("✨ Mensagem Complexa do Bot ✨")
                .setDescription(`Olá, ${message.author}!\n\n**Este é um exemplo de mensagem com:**\n- _Itálico_\n- **Negrito**\n- ~~Riscado~~\n- [Link do Discord](https://discord.com)\n\n> _Citação em bloco_\n\n\`\`\`js\n// Código formatado\nconsole.log("Olá!");\n\`\`\``)
                .setColor(0x00bfff)
                .addFields(
                    { name: "Campo 1", value: "Valor do campo 1", inline: true },
                    { name: "Campo 2", value: "Valor do campo 2", inline: true }
                )
                .setFooter({ text: "Mensagem enviada pelo bot", iconURL: message.client.user?.displayAvatarURL() ?? undefined })
                .setTimestamp();

            await message.reply({
                content: `Olá ${message.author}! 🎉\nVeja abaixo uma mensagem formatada com **embed** e várias opções do Discord:`,
                embeds: [embed]
            });
        }
    },
});