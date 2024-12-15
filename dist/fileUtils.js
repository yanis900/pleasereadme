import fs from "fs";
import path from "path";
const readDirectories = async () => {
    try {
        const files = await fs.promises.readdir("src");
        let fileContent = "";
        for (const file of files) {
            const fullPath = path.join("src", file);
            const data = await fs.promises.readFile(fullPath, "utf8");
            fileContent += data + "\n";
        }
        return fileContent;
    }
    catch (err) {
        console.error("Error:", err);
    }
};
const writeFile = async (content) => {
    try {
        if (typeof content === 'string') {
            await fs.promises.writeFile('README.md', content);
            console.log('File created successfully');
        }
        else {
            console.log('Content is not a string');
        }
    }
    catch (err) {
        console.error('Error writing file:', err);
    }
};
export { readDirectories, writeFile };
