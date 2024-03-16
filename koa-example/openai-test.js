const OpenAI = require('openai');
const OPENAI_SECRET = require('./.secrets.js')

const openai = new OpenAI({ apiKey: OPENAI_SECRET });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();