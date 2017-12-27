# wxcode-addr
微信小程序漂亮的地址选择器

## 截图
![Image text](https://github.com/jiangzhenggeng/wxcode-addr/blob/master/WX20170621-122959%402x.png)

## 使用方式

```html
  <addr-select
    show="{{showArea}}"
    bind:close="closeArea"
    bind:select="selectArea"
  >
    <view class="select" bindtap="openArea">点击我</view>
  </addr-select>
```
## 属性
show 是否显示
## 方法
close 关闭触发事件，选择完成也会触发该事件

select 选择完成触发该事件


