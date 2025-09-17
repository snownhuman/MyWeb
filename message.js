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

function getTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  const clock = document.querySelector('.clock');
  if (clock) {
    // 生成内容
    const timeStr = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
    const dateStr = `${year}年${month}月${day}日`;

    // 如果没有 .time/.date 元素则创建
    if (!clock.querySelector('.time')) {
      clock.innerHTML = `<span class="time">${timeStr}</span><span class="date">${dateStr}</span>`;
    } else {
      // 更新内容并重置动画
      const timeElem = clock.querySelector('.time');
      const dateElem = clock.querySelector('.date');
      if (timeElem.innerText !== timeStr) {
        timeElem.innerText = timeStr;
        timeElem.style.animation = 'none';
        void timeElem.offsetWidth; // 触发重绘
        timeElem.style.animation = '';
      }
      if (dateElem.innerText !== dateStr) {
        dateElem.innerText = dateStr;
        dateElem.style.animation = 'none';
        void dateElem.offsetWidth;
        dateElem.style.animation = '';
      }
    }
  }
}
setInterval(getTime, 1000);