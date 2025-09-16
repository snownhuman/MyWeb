let lastScrollTop = 0;
const block = document.querySelector('.block');
const bottom = document.querySelector('.bottom');
window.addEventListener('scroll', function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    block.style.top = '-70px'; // 向下滑动隐藏
  } else {
    block.style.top = '0'; // 向上滑动显示
  }
  lastScrollTop = st <= 0 ? 0 : st;

  // 底部显示逻辑
  if (bottom) {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    if (bodyHeight - (scrollY + windowHeight) < 100) {
      bottom.style.display = 'flex';
    } else {
      bottom.style.display = 'none';
    }
  }
}, false);

const logoutBtn = document.querySelector('.block button');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}

function getTime(){
  let date=new Date();
  let year =date.getFullYear();
  let month =date.getMonth()+1;
  let day =date.getDate();
  let hour =date.getHours();
  let minute =date.getMinutes();
  let second =date.getSeconds();
  let  yearshow=document.getElementById('year');
  yearshow.innerHTML=year;
  let monthshow=document.getElementById('month');
  monthshow.innerHTML=month+'月';
  let dayshow=document.getElementById('date');
  dayshow.innerHTML=day+'日';
  let hourshow=document.getElementById('hours');
  hourshow.innerHTML=hour+'时';
  let minuteshow=document.getElementById('minutes');
  minuteshow.innerHTML=minute+'分';
  let secondshow=document.getElementById('seconds');
  secondshow.innerHTML=second+'秒';
}
setInterval(getTime, 1000);