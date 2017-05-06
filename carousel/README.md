## 轮播图插件

使用原生JS实现

#### 基本功能：

* 自动轮播
* 鼠标移到图片上会停止播放，移开会继续播放
* 控制按钮，控制下一张与上一张播放
* 底部焦点随着轮播图播放而移动，点击焦点会播放对应图片

#### 使用方法:

编写html框架
```html
<div class="carousel-wrap">
  <!-- 图片列表 -->
  <div class="carousel-container">
    <div class="carousel-list">
    <img class="carousel-item" src="image-filename">
    </div>
  </div>
  <!-- 控制按钮 -->
  <div class="carousel-btn" id="carousel-prev"></div>
  <div class="carousel-btn" id="carousel-next"></div>
  <!-- 焦点 -->
  <div class="carousel-points"></div>
</div>
```

> 修改的img标签的src属性来添加自己的图片，可以添加任意数量的图片，其他设定请不要修改。

引入样式文件**carousel.css**
```html
<link href="carousel.css" rel="stylesheet">
```

在最后引入JS文件**carousel.js**
```html
<script src="carousel.js"></script>
```

调用**carousel**函数
```js
var element = getElementsByClassName("carousel-wrap")[0]; 
var options = {
  width: 500,
  height: 300
};
carousel(element,options);
```

需要获取上面html最外层元素的引用，作为第一个参数传入carousel函数。

需要设置图片的宽与高存于一个对象中，这个对象将作为第二个参数传入carousel函数。
