window.onload = function () {
  function fullScreen() {
    var el = document.documentElement;
    var request_full_screen = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

    if (typeof request_full_screen != "undefined" && request_full_screen) {
      request_full_screen.call(el);
    };
    console.log('called')
  };


  function exitScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    if (typeof request_full_screen != "undefined" && request_full_screen) {
      request_full_screen.call(el);
    }
  };

  function createStyleSheet() {
    console.log('style')
    var styleText = `
    .__full_btn__ {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      z-index: 999;
      height: 30px;
      padding: 10px;
      font-size: 14px;
      border-radius: 50%;
      background-color: #222;
      color: #eee;
      cursor: pointer;;
      position: fixed;
      bottom: 20px;
      right: 10px;
      opacity: 0.3;
      transition: opacity 0.3s;
    }
    .__full_btn__:hover {
      opacity: 1;
    }`;

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    try { //防止IE中stylesheet数量超过限制而发生错误
      style.innerHTML = styleText;
    } catch (e) { 
      console.log('eeee',e)
    }

    head.appendChild(style);
  }

  createStyleSheet();

  try {
    var div = document.createElement('div');
    div.className = '__full_btn__';
    div.setAttribute('data-mode', 0)
    div.innerHTML = 'Click';
    
    document.body.appendChild(div);
  } catch (e) { console.log('error', e) }

  div.addEventListener('click', function (e) {
    var _this = document.querySelector('.__full_btn__');
    if (+_this.getAttribute('data-mode') === 0) {
      console.log('full');
      _this.setAttribute('data-mode', 1)
      fullScreen();
      return
    }
    if (+_this.getAttribute('data-mode') === 1) {
      console.log('exit full');
      exitScreen();
      _this.setAttribute('data-mode', 0)
      return
    }
  })
}