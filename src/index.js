import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
    const results = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    "You are an AI assistant, answer any questions to the best of your ability.",
            },
            {
                role: "user",
                content: "Hello!",
            },
        ],
    });

    console.log(results);
}

main();
