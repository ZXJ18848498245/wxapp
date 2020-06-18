Page({
  data:{
   // 首页导航数据
   navList:[],
   //轮播图数据
   swiperList:[],
   //视频列表数据
   videosList:[],
   //被点击首页导航的菜单的索引
   currentIndexNav:0

  },
  //点击首页按钮触发事件
  activeNav(e){
    //console.log(12);
    this.setData({
        currentIndexNav:e.target.dataset.index
    })

  },
  getnavList(){
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        //console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },
  //获取轮播图数据
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
       // console.log(res);
       if(res.data.code===0){
         that.setData({
           swiperList:res.data.data.swiperList
         })
       }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  //获取视频列表数据
  getVideosList(){
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if(res.data.code===0){
          that.setData({
            videosList:res.data.data.videoList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   //1.获取首页导航
   this.getnavList();
   //2.获取轮播图数据
   this.getSwiperList();
   //3.获取播放列表数据
   this.getVideosList();
  },
  //获取首页的导航数据
  
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    //String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    //String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   // String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
   // String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    //String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})