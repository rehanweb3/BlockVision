const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'client', 'src', 'pages');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(targetDir, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('/figmaAssets/blackmode-1.png')) {
            let newContent = content.replace(/\/figmaAssets\/blackmode-1\.png/g, '/AtherScan.png');
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
