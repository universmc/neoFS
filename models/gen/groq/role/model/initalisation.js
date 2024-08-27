//console.log(' ╔═════════════════════════════════════╗'),
//console.log(' ╠══════════ ✨Doc assisnt -ia ════════╣'),
//console.log(' ║[🤓.abc]                             ║'),
//console.log(' ║                                     ║'),
//console.log(' ║                                     ║'),
//console.log(' ║ 1                                   ║'),
//console.log(' ║ 2                                   ║'),
//console.log(' ║ 5                                   ║'),
//console.log(' ║ 4                                   ║'),
//console.log(' ║ 5                                   ║'),
//console.log(' ║ 8                                   ║'),
//console.log(' ║ 7                                   ║'),
//console.log(' ║ 8                                   ║'),
//console.log(' ║                                     ║'),
//console.log(' ║                                     ║'),
//console.log(' ║O(x,y,z).ts                          ║'),
//console.log(' ╠═════════════════════════════════════╣'),
//console.log(' ║[✨] [🌌][📔][💬][💻][🏗️][🌴] [🛰] ║'),
//console.log(' ╚═════════════════════════════════════╝')


const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"[📔.codex]", content:"[📔.codex]phase[01]:[RUN]:[brainstorming(initialisation de l'instance{groq-sdk})]"},
      {role: "assistant",name:"🛸_Pi_piBot", content:"[🛸_Pi_piBot]:initalisation role:system"},
      {role: "assistant",name:"🤖_worker_piBot", content:"[🤗_worker_piBot:]initalisation role:assistant"},
      {role: "assistant",name:"🤗_neoFs_piBot", content:"[🤖_neoFs_piBot]:initalisation role:Programmeur FullStack"},
      {role: "assistant",name:"🤖_worker_piBot", content:"[🤗_worker_piBot]:initalisation role:Ambassdeur en IA"},
      {role: "user",name:"[🧍🏼‍♂️.Mickael]", content:"[🧍🏼‍♂️_MOI]:initialisation role:user"},
      {role: "system",name:"[📔.codex]", content:"[📔.codex]phase[02]:[RUN]:[brainstorming(Présention de l'instance)]"},

    ],
    model: "gemma2-9b-it",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();