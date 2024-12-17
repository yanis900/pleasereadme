#!/usr/bin/env node
import OpenAI from "openai";
import { readDirectories, writeFile } from "./fileUtils.js";
const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});
const generateReadme = async () => {
    const fileContent = await readDirectories();
    if (!fileContent) {
        console.log("Your src directory is empty!");
    }
    // console.log(fileContent);
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Create a README file using markdown based on this src directory:\n${fileContent}`,
          },
        ],
      });
      const readmeContent = completion.choices[0].message.content;
    //   console.log("Generated README:\n", readmeContent);
      await writeFile(readmeContent);
      console.log(`README as been created`)
    } catch (err) {
      console.error("Error generating README:", err);
    }
};
generateReadme();
