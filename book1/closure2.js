function toggle(...args) {
  let count = -1;

  return function getArg() {
    if (count + 1 === args.length) {
      count = 0;
    } else {
      count++;
    }
    console.log(args[count]);
  };
}

const hello = toggle('hello');

const onOff = toggle('on', 'off');

const speed = toggle('slow', 'medium', 'fast');

hello();
hello();

onOff();
onOff();
onOff();

speed();
speed();
speed();
speed();

