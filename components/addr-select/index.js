var cityList = require('./cityList')
cityList = cityList.sort(function (a, b) {
	return a.id > b.id ? -1 : 1
})


function getCurrentItemList(cityList, pid, defaultSelect) {
	var list = []
	var selectid
	for (let i = cityList.length - 1; i >= 0; i--) {
		let item = cityList[i]
		if (item.pid == pid) {
			if (defaultSelect && defaultSelect.name == item.name) {
				selectid = item.id
			}
			list.push(item)
		}
	}
	return {
		list,
		selectid
	}
}


Component({
	properties: {
		show: {
			type: Boolean,
			value: false,
			observer: function (newVal, oldVal) {

			}
		},
		addrSelect: {
			type: Array,
			value: [],
			observer: function (newVal, oldVal) {

			}
		},
		currentTab: {
			type: Number,
			value: 0
		}
	},
	data: {
		addrList: []
	},
	created() {

	},
	attached() {
		var addrSelect = this.data.addrSelect
		var addrList = []
		var tempResult, selectid

		for (var i = 0; i < addrSelect.length || i == 0; i++) {
			selectid = tempResult ? tempResult.selectid : 0
			tempResult = getCurrentItemList(cityList, selectid, addrSelect[i])
			addrList[i] = tempResult.list
		}
		this.setData({
			addrList,
			currentTab: addrList.length - 1
		})
	},
	methods: {
		open() {
			this.setData({
				show: true
			})
			this.triggerEvent('open')
		},
		close() {
			this.setData({
				show: false
			})
			this.triggerEvent('close')
		},
		tapTabBar(e) {
			var dataset = e.currentTarget.dataset
			this.setData({
				currentTab: dataset.currentTab
			})
		},
		swiperChange(e) {
			this.setData({
				currentTab: e.detail.current
			})
		},
		clickSelectArea(e) {
			var dataset = e.currentTarget.dataset
			var currentTab = dataset.currentTab
			var nextTab = currentTab + 1
			var addrSelect = this.data.addrSelect
			var addrList = this.data.addrList
			//已选择地址
			addrSelect[currentTab] = {
				name: dataset.itemName,
				id: dataset.itemId
			}
			addrSelect.splice(currentTab + 1)
			var nextItemList = getCurrentItemList(cityList, dataset.itemId)
			if (nextItemList.list.length) {
				addrList[nextTab] = nextItemList.list
			}
			addrList.splice(nextTab + 1)

			this.setData({
				addrSelect,
				addrList,
				currentTab: currentTab >= addrList.length - 1 ? currentTab : currentTab + 1
			}, () => {
				if (currentTab >= addrList.length - 1) {
					this.triggerEvent('select', this.data.addrSelect)
					this.close()
				}
			})
		}
	}
})
