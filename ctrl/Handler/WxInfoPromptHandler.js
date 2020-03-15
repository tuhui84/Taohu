let showReconnectModal = false;

class WxInfoPromptHandler {

    // 错误提示
    static fail(info) {
        wx.reLaunch({
            url: '../error/error?info=' + info,
        });
    }

    // 显示重连接对话框提醒
    static showReconnectModal(confirm) {
      wx.hideLoading();
      if (showReconnectModal)
        return;
        showReconnectModal = true;
        wx.showModal({
            title: '警告',
            content: '网络不太稳定，需要尝试重新连接?',
            showCancel: false,
            confirmText: '确定',
            success: function (res) {
              showReconnectModal = false;
                if (res.confirm && confirm) {
                    wx.showLoading({
                        title: '正在重连..',
                        mask: true
                    });
                    confirm();
                }
            }
        });
    }

    // 显示toast
    static showToast(title, duration){
        wx.showToast({
            title: title,
            mask: true,
            icon:"none",
            duration: duration || 2000
          });
    }

    // 显示对话框
    static showModal(options){
        wx.showModal(options);
    }

    // 显示loading界面
    static showLoading(title){
        wx.showLoading({
            title: title,
            mask: true
          })
    }
}

module.exports = WxInfoPromptHandler;