const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const bodyColorChanger = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.colorId = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.setAttribute('style', `background: ${colors[randomColor]}`); // : // refs.body.style.background = colors[randomColor];
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.colorId);
    // refs.body.removeAttribute('style');
  },
};

refs.startBtn.addEventListener('click', bodyColorChanger.start.bind(bodyColorChanger));
refs.stopBtn.addEventListener('click', bodyColorChanger.stop.bind(bodyColorChanger));
