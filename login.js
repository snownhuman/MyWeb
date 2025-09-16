const zhanghao = document.getElementById('zhanghao');
const mima = document.getElementById('mima');

const login_btn = document.querySelector('.btn');
if (login_btn) {
  login_btn.addEventListener('click', function (e) {
    if (mima.value === "123456" && zhanghao.value === "mao") {
      alert('登录成功');
      e.preventDefault();
      window.location.href = 'message.html';
    } else {
      alert('账号或密码错误');
    }
  });
}

const showPwdIcon = document.getElementById('showPwd');
const pwdInput = document.getElementById('mima');
if (showPwdIcon && pwdInput) {
  showPwdIcon.addEventListener('click', function () {
    if (pwdInput.type === 'password') {
      pwdInput.type = 'text';
    } else {
      pwdInput.type = 'password';
    }
  });
}