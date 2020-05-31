const fs = require('fs'), path = require('path');
const fsp = require('fs').promises;

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach( f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ?
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

async function scan2(directoryName = './data', results = {}) {
    results['folders'].push(directoryName);
    let files = await fsp.readdir(directoryName, {withFileTypes: true});
    for (let f of files) {
        let fullPath = path.join(directoryName, f.name);
        if (f.isDirectory()) {
            await scan2(fullPath, results);
        } else {
            results['files'].push(fullPath);
        }
    }
    return results;
}

const getFiles = function (dir, shift=1) {
    const files = fs.readdirSync(dir);
    files.length > 1 ? console.log(" |".repeat(shift) + "──> ", path.basename(dir) + "/")
        : console.log(" |".repeat(shift) + "├── ", path.basename(dir) + "/");
    if (shift === undefined) shift = 0;
    let fidx = files.length;
    for (let i in files) {
        let name = path.join(dir, files[i]);
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, shift+1);
        } else {
            let idx = i; idx++;
            if(idx >= fidx) {
                console.log(" |".repeat(shift) + "└── ", name);
            } else {
                console.log(" |".repeat(shift) + "├── ", name);
            }
        }
    }
};

const dirPath = process.argv[2];

// experement #1
walkDir(dirPath, function(filePath) {
    //const fileContents = fs.readFileSync(filePath, 'utf8');
    console.log(filePath);
});

// experement #2
let results = { files: [], folders: []};
scan2(dirPath, results).then(data => console.log(data));

// experement #3
getFiles(dirPath);
