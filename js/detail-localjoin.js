/**
 * 当地参团详情页
 */
$(function($, win, doc) {
	
	//document加载完后初始化
	function init(){
		
		//谷歌地图
		$("#google_map").click(function(){
			win.location.href="http://m.woqu.com/map/gmap/"+$.getBusinessID();
		});
		
		//集合地点显示/展开
		$("#meet_location_table tr:gt(2):not(:last)").hide();
		$("#viewAll").on("click", function(){
			var _parent = $("#viewAll");
			var _this = $("#viewAll a");
			if(_parent.is(".hideAll")){
				$("#meet_location_table tr:gt(2):not(:last)").hide();	
				_this.html("查看全部");
				_parent.toggleClass("hideAll");
			}else{
				$("#meet_location_table tr:gt(2)").show();	
				_this.html("收起全部");
				_parent.toggleClass("hideAll");
			}		
		});	
		//主图展示
		$('#checkMoreImg').click(function() {
			$.wqCheckMoreImg({
				imgPathPrefix:'//dn-woqu.qbox.me/poi/260x156/'
			});
		});
		//发送行程单
		(function(){
			$("#showSendTripBoard").click(function(){
				$("#sendTripBoard").show();
				$("#infoBar").hide();
			});
			$("#sendTrip").click(function(){
				fShowErrorFormat("");
				var email = $("#sendTripEmail").val();
				var emailRegExp = ($C.func.wqRegExpTest("email",email)).code;
				if((email != null||email != "") && emailRegExp == false){
					fShowErrorFormat("邮箱格式不正确");
					return;
				}
			});
			$("#closeSendTripBoard").click(function(){
				$("#sendTripBoard").hide();
				$("#infoBar").show();
			});
			//手机格式，邮箱格式错误提醒
			function fShowErrorFormat(msg){
				$("#formateErrorMsg").html(msg);
			}
		})();
		
	}
	
	
	$(doc).ready(function(){
		init();
	});

}(jQuery, window, document));