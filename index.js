const startRef = document.querySelector(".start")
const stopRef = document.querySelector('.stop')
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
console.log();


  const timer_colors ={
    intervalId: null,
    isActive: false,
    start(){
        if (this.isActive) {
            return
        }
        this.intervalId = setInterval(()=>{
            const bodyRef = document.body
            bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
            console.log(bodyRef.style.backgroundColor);
            this.isActive = true;
        },1000)
    },
    stop(){
        clearInterval(this.intervalId)
        
        this.isActive = false
    }
  }
  

  startRef.addEventListener('click',timer_colors.start.bind(timer_colors))
  stopRef.addEventListener('click',timer_colors.stop.bind(timer_colors))

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };




// const promise = new Promise((resolve, rejected)=>{
// const isFullfild = Math.random() > 0.3
// if (isFullfild) {
//     resolve('Виконання успішне')
// }
// else{ rejected('Виконано з помилкою')
// }
// })

// const horses = [
//     'Secretariat',
//     'Eclipse',
//     'West Australian',
//     'Flying Fox',
//     'Seabiscuit',
//   ];

//   function run(horse) {
//     const time = getRandomTime(2000,3000)

//     setTimeout(()=>{
// return new Promise((resovle, rejected)=>{
//     resovle({horse, time})
// })
//     }, time)
   

//   }
//   function getRandomTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   run(horses[0]).then(({horse, time}) => {
//     refs.winnerField.textContent = `Переможеч ${horse} фінігував ${time} часу`
//   })


  


class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timer = document.querySelector(this.selector);
      this.refs = {
        days: this.timer.querySelector('[data-value="days"]'),
        hours: this.timer.querySelector('[data-value="hours"]'),
        mins: this.timer.querySelector('[data-value="mins"]'),
        secs: this.timer.querySelector('[data-value="secs"]'),
      };
    }
  
    start() {
      this.intervalId = setInterval(() => {
        const time = this.targetDate - Date.now();
        if (time <= 0) {
          clearInterval(this.intervalId);
          return;
        }
        this.updateTimer(time);
      }, 1000);
    }
  
    updateTimer(time) {
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)).toString())
      const hours =pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString())
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString())
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000).toString())
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    }
  }
  function pad(value) {
    return String(value).padStart(2, '0');
  }
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('2023-03-01T00:00:00'),
  });

  timer.start();