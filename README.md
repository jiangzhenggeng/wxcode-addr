# wxcode-addr
微信小程序漂亮的地址选择器

## 截图
![Image text](https://github.com/jiangzhenggeng/wxcode-addr/blob/master/WX20170621-122959%402x.png)

## 使用方式1

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



## 使用方式2
### API方式使用更灵活

```html
  <addr-select id="addr-select" />
```

```javascript
    this.selectComponent('#addr-select-api')
    //设置选择回调函数
    .callback((areaSelect, component) => {
        console.log(areaSelect)
        this.setData({
            addressApi: areaSelect
        })
        this.selectComponent('#dialog-toast')
            .message('3秒后自动关闭地址选择组件').show()
    
        setTimeout(() => {
            component.close()
        }, 3000)
    },true/*回调结束是否清除回调函数*/)
    //设置默认选择
    .setAddrSelect(this.data.addressApi || [{name: '贵州'}])
    //设置了autoClose不自动关闭组件 回调里调用 component.close()可关闭组件
       .autoClose(false)
        .show()
```

