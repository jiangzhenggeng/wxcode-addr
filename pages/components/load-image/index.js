Page({
	data: {
		imageUrls: [
			{src: 'https://raw.githubusercontent.com/jiangzhenggeng/wxcode-addr/master/pages/components/load-image/image.jpg'},
			{src: 'http://img.daimg.com/uploads/allimg/180411/3-1P411233118.jpg'},
			{src: 'http://img.daimg.com/uploads/allimg/180411/3-1P411231616.jpg'},
			{src: 'http://img.daimg.com/uploads/allimg/180409/3-1P409213605.jpg'},
			{src: 'http://sdvsdvsdvimg.daimg.com/uploads/allimg/180409/3-1P409213605.jpg'},
		],
		debug: true
	},
	imageLoadSuccess(e) {
		console.log('success', e.detail)
	},
	imageLoadError(e) {
		console.log('error', e.detail)
	}
})
