const fs = require("fs");

const DELIMITER = "\n";

const genRandNumber = (minNum, maxNum) => {
    return minNum + Math.round(Math.random() * (maxNum - minNum));
};

const createFile = (
    fileName = "./data.txt",
    fileSize = 10 * 1024 * 1024,
    minNum = Number.MIN_SAFE_INTEGER,
    maxNum = Number.MAX_SAFE_INTEGER
) => {
    const writeStream = fs.createWriteStream(fileName, { flags: 'w', "encoding": "UTF-8" });
    let bytesWritten = 0;

    const writeNumbers = function() {
        while (bytesWritten < fileSize) {
            const chunk = genRandNumber(minNum, maxNum).toString() + DELIMITER;
            if (!writeStream.write(chunk)) {
                writeStream.once('drain', writeNumbers);
                return;
            }
            bytesWritten += chunk.length;
        }
        writeStream.end();
    };

    writeNumbers();
};

const args = process.argv.slice(2);
createFile(...args);
if (args[0]) {
    console.log(`File \"${args[0]}\" has been generated.`);
} else {
    console.log(`File data.txt has been generated.`);
}
