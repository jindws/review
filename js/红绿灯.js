//红300ms---黄200ms---绿100ms

let light = "";

function execute(i = 0) {
  let colorArr = ["red", "yellow", "green"];
  const time = {
    red: 3000,
    yellow: 2000,
    green: 1000,
  };
  light = colorArr[i];
  console.log(light);
  setTimeout(() => {
    execute((i + 1) % 3);
  }, time[colorArr[i]]);
}

execute();
