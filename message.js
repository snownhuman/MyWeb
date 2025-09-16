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