const {spawn} = require('child_process');
const child = spawn('wc');
process.stdin.pipe(child.stdin);
child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});// const ls = spawn('find', ['.', '-type', 'f']);
// const ls = spawn('find . -type f', {
//     stdio: 'inherit',
//     shell: true
// });
// const wc = spawn('wc', ['-l']);
// ls.stdout.pipe(wc.stdin);
// wc.stdout.on('data', (data) => {
//     console.log(`child stdout:\n${data}`);
// });
// const {spawn} = require('child_process');
// const find = spawn('find', ['.', '-type', 'f']);
// const wc = spawn('wc', ['-l']);
// find.stdout.pipe(wc.stdin);
// wc.stdout.on('data', (data) => {
//     console.log(`Number of files ${data}`)
// });

// spawn('lsof -i:80', {
//     stdio: 'ignore',
//     shell: true
// });
//============
// const child = spawn('lsof -i:80', {
//     // stdio: 'inherit',
//     shell: true
// });
//
// child.stdout.on('data', (data) => {
//     console.log(`no stdio ${data}`)
// });
// //============
// exec('lsof -i:80', (err,out)=>{
//     console.log('exec',out)
// });

//
// const child = spawn('node', ['exec.js'], {
//     detached: true,
//     stdio: 'ignore'
// });
// child.unref();
