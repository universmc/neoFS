const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
    const dataSource = {
        css: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        js: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    };

    groq.chat.completions.create({
        messages: [
            { role: "system", content: `bootstrap CDN \`${dataSource.css}\` \`${dataSource.js}\`` },
            { role: "system", content: `Generate HTML/CSS/js for a black theme bootstrap page index.html` },
            {
                role: "assistant",
                content: "Creating a homepage with a Bootstrap carousel featuring space and time themed images for index.html"
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.4,
        max_tokens: 4096,
        top_p: 1,
        stop: null,
        stream: false
    }).then((chatCompletion) => {
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "build/index_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("HTML code generated and saved to " + outputFilePath);
    });
}

main();
