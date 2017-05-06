function carousel(wrap,options){
  /**
  *  轮播插件
  *
  *  @param {Node} wrap
  *  @param {Object} options
  *        :{Number} width
  *        :{Number} height
  **/

  // 播放
  function play(){
    blur(cur);
    cur = (cur + 1) % len;
    focus(cur);
    var left = -cur * width;
    list.style.left = left + 'px';
  }

  // 重新播放
  function replay(){
    play();
    clearInterval(time);
    time = setInterval(play,2000);
  }

  // 获得焦点
  function focus(n){
    points.children[n].style.background = '#55f';
  }

  // 失去焦点
  function blur(n){
    if (n < 0) return;
    points.children[n].style.background = '#aaa';
  }

  // 初始化参数
  var width = options.width;
  var height = options.height;
  var cur = -1;
  var items = document.getElementsByClassName('carousel-item');
  var len = items.length;
  var list = document.getElementsByClassName('carousel-list')[0];
  var points = document.getElementsByClassName('carousel-points')[0];
  var btns = document.getElementsByClassName('carousel-btn');
  var container = document.getElementsByClassName('carousel-container')[0];
  container.style.width = width + 'px';
  container.style.height = height + 'px';
  var pointWrap = document.getElementsByClassName('carousel-points')[0];
  pointWrap.style.left = (width - (len-1) * 4 - len * 5)/2 + 'px';

  list.style.width = width * len + 'px';
  list.style.height = height + 'px';
  for (var i = 0; i < len; i ++){
    items[i].style.width = width + 'px';
    items[i].style.height = height + 'px';
  }
  wrap.style.width = width + 'px';

  // 当鼠标移动图片上方，停止轮播
  // list上监听比较简单，不用遍历所有图片（事件代理）
  list.onmouseover = function(e){
    clearInterval(time);
    // 显示控制按钮
    btns[0].style.display = 'block';
    btns[1].style.display = 'block';
  }

  // 当鼠标移出图片上方，开始轮播
  list.onmouseout = function(e){
    time = setInterval(play,2000);
    // 隐藏控制按钮
    btns[0].style.display = 'none';
    btns[1].style.display = 'none';
  }

  // 控制按钮
  for (var i = 0; i < 2; i++){
    btns[i].onmouseover = function(e){
      e.stopPropagation();
      this.style.display = 'block';
    }
    btns[i].onmouseout = function(e){
      e.stopPropagation();
      this.style.display = 'none';
    }
  }

  // 第二个按钮点击到下一张
  btns[1].onclick = function(e){
    play();
    clearInterval(time);
    time = setInterval(play,2000);
  }
  // 第一个按钮点击到上一张
  btns[0].onclick = function(e){
    blur(cur);
    if (cur === 0){
      cur = len - 2;
    }
    else {
      cur = cur - 2;
    }
    replay();
  }

  // 插入焦点
  for (let i = 0; i < len; i++){
    var fcs = document.createElement('div');
    fcs.className = 'carousel-point';
    points.appendChild(fcs);
    fcs.onclick = function(e){
      blur(cur);
      cur = i - 1;
      replay();
    }
  }

  play();
  var time = setInterval(play,2000);
}

