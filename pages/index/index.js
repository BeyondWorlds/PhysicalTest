var mCurrentIndex = 0
var btnContents = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "message": 0,
    "array": [1, 2, 3, 4],
    "btnDatas": ["从不", "很少", "有时", "经常", "总是"],
    "count": 1,
    "questions": ["1.您精力充沛吗？", "2.您容易疲乏吗？", "3.您容易气短，呼吸短促，接不上气吗？", "4.您说话声音低弱无力吗？", "5.您感到闷闷不乐、情绪低沉吗？", "6.您容易精神紧张、焦虑不安吗？", "7.您因为生活状态改变而感到孤独、失落吗？", "8.您容易感到害怕或受到惊吓吗？", "9.您感到身体超重不轻松吗？", "10.您眼睛干涩吗？", "11.您手脚发凉吗？", "12.您胃脘部、背部或腰膝部怕冷吗？", "13.您比一般人耐受不了寒冷吗？", "14.您容易患感冒吗？", "15.您没有感冒时也会鼻塞、流鼻涕吗？", "16.您有口黏口腻或睡眠打鼾吗？", "17.您容易过敏吗？", "18.您的皮肤容易起荨麻疹吗？", "19.您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗？", "20.您的皮肤一抓就红，并出现抓痕吗？", "21.您皮肤或口唇干吗？", "22.您有肢体麻木或固定部位疼痛的感觉吗？", "23.您面部或鼻部有油腻感或者油亮发光吗？", "24.您面色或目眶晦暗，或出现褐色斑块/斑点吗？", "25.您有皮肤湿疹、疮疖吗？", "26.您感到口干咽燥、总想喝水吗？", "27.您感到口苦或嘴里有异味吗？", "28.您腹部肥大吗？", "29.您吃（喝）凉的东西会感到不舒服或者怕吃（喝）的东西吗？", "30.您有大便粘滞不爽、解不尽的感觉吗？", "31.您容易大便干燥吗？", "32.您舌苔厚腻或有舌苔厚厚的感觉吗？", "33.您舌下静脉淤紫或增粗吗？"],
    "score": [],
    "currentIndex": 0
  },

  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },
  selNever: function () {
    test()
    this.setData({
      message: this.data.questions[mCurrentIndex],
      btnDatas: btnContents
    })
  },
  selSeldom: function () {
    test()
    this.setData({
      message: this.data.questions[mCurrentIndex],
      btnDatas: btnContents
    })

  },
  selSometime: function () {
    test()
    this.setData({
      message: this.data.questions[mCurrentIndex],
      btnDatas: btnContents
    })

  },
  selOften: function () {
    test()
    this.setData({
      message: this.data.questions[mCurrentIndex],
      btnDatas: btnContents
    })

  },
  selAlways: function () {
    test()
    this.setData({
      message: this.data.questions[mCurrentIndex],
      btnDatas: btnContents
    })

  },
  nextQuestion: function () {

  },
  previousQuestion: function () {

  }
})
function test() {

  if (mCurrentIndex <= 32) {
    mCurrentIndex++
  }
  else {
    console.log("mCurrentIndex=" + mCurrentIndex)
  }
  if (mCurrentIndex == 8) {
    btnContents = []
  }
  else {
    btnContents = ["没有", "很少", "有时", "经常", "总是"]
  }

}