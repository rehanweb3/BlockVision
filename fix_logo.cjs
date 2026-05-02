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
        
        // Find the logo image element with the h-8 class
        let newContent = content.replace(/<img className="h-8 w-auto object-contain cursor-pointer" alt="AtherScan Logo" src="\/AtherScan\.png" \/>/g, 
            '<img className="h-5 w-auto object-contain cursor-pointer" alt="AtherScan Logo" src="/AtherScan.png" />');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Resized logo in ${filePath}`);
        }
    }
});
