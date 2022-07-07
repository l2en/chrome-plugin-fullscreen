
function createStyleSheet(styleText) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  try { //防止IE中stylesheet数量超过限制而发生错误
    style.innerHTML = styleText;
  } catch (e) {
    console.log('eeee', e)
  }

  head.appendChild(style);
};

function addToDocument(dom) {
  dom && document.body.appendChild(dom);
}

window.onload = function () {
  console.log('mark')
  writeMark();
  readMark();
};


function writeMark() {

  createStyleSheet(`
  .__mark_rever_w__ {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    z-index: 999999;
    height: 30px;
    padding: 10px;
    font-size: 14px;
    border-radius: 50%;
    background-color: #222;
    color: #eee;
    cursor: pointer;;
    position: fixed;
    bottom: 120px;
    right: 10px;
    opacity: 0.3;
    user-select: none;
    transition: opacity 0.3s;
  }
  .__mark_rever_w__:hover {
    opacity: 1;
  }`)
  var mark = document.createElement('div');
  mark.className = '__mark_rever_w__';
  mark.innerHTML = 'W';
  addToDocument(mark);

  mark.addEventListener('click', function (e) {
    
  var host = window.location.host;
  var href = window.location.href;
    alert('已写入', href);

    localStorage.setItem(host, href)
  })

}

function readMark() {
  if(window.localStorage) {
    var host = window.location.host;
    localStorage.getItem(host);

    
  createStyleSheet(`
  .__mark_rever_R__ {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    padding: 10px;
    font-size: 14px;
    z-index: 999999;
    border-radius: 50%;
    user-select: none;
    background-color: #222;
    color: #eee;
    cursor: pointer;;
    position: fixed;
    bottom: 80px;
    right: 10px;
    opacity: 0.3;
    transition: opacity 0.3s;
  }
  .__mark_rever_R__:hover {
    opacity: 1;
  }`)

    var markR = document.createElement('div');
    markR.className = '__mark_rever_R__';
    markR.innerHTML = 'R';
    addToDocument(markR)

    
    markR.addEventListener('click', function (e) {
      var href = localStorage.getItem(host);
      if(!href) {
        alert('此页面没有书签');
        return;
      }
      console.log('get href ', href);
      window.location.href = href || ''
    })

  }
}
