const { exec } = require('child_process');

exec('lsof -i:80', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`message ${stdout}`);
});