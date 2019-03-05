const clien_id = 'rgzxq2n5g3w2pnd4qrhwlx0wxrmgbc';
const limit = 100;
const twitchAPI = 'https://api.twitch.tv/kraken/streams/?client_id=' + clien_id + '&limit=' + limit;
// const test = "https://api.twitch.tv/kraken/streams/yuniko0720/?client_id="+clien_id;
console.log(twitchAPI)
$.ajax({
	url: twitchAPI,
	type: 'GET',
	success: function(res){
		let stream = res.streams;
		let len = stream.length;
		// let str = "";
		let strHtml = (ary) =>{
				let content = 
					"<div class='channels'>"+
					"<img class='bgi' src='"+ary.bgi+"'>"+
					"<img class='logo' src='"+ary.logo+"'>"+
					"<p class='name'>"+ ary.name +"</p>"+
					"<p class='game'>"+'正在玩:'+ ary.game +"</p>"+
					"<div class='light'>"+"</div>"+
					"<div class='text'>"+"ONLINE"+"</div>"+
					"<a class='status' href='"+ary.url+"'>"+ ary.status + "</a>"+
					"</div>";
					return content;
			}
		let showFunc = () =>{
			let str = ""
			for(let i=0;i<len;i++){
				let channel = stream[i].channel;
				let {display_name,game,logo,name,status,url,video_banner} = channel;
				// console.log(channel);
				let channelAry = {
					bgi: channel.video_banner,
					logo: channel.logo,
					name: channel.display_name,
					game: channel.game,
					status: channel.status,
					url: channel.url,
				};
				content = strHtml(channelAry);
				str+=content;
			}
			$('.channel_list').html(str);
		}
		showFunc();
		$('.cata').click(function(e) {
			let value = e.target.dataset.text;
			console.log(value);
			let str = ""
			$('.channel_list').html("");
			stream.forEach((item) =>{
				let channel = item.channel;
				let {display_name,game,logo,name,status,url,video_banner} = channel;
				// console.log(channel.game);
				let channelAry = {
					bgi: channel.video_banner,
					logo: channel.logo,
					name: channel.display_name,
					game: channel.game,
					status: channel.status,
					url: channel.url,
				};
				if( value == channelAry.game){
					str+= strHtml(channelAry);
					// console.log(str);
					$('.channel_list').html(str)
				}
			})
		});
		$('.seaBtn').click(function() {
			let value = $('.seaText').val();
			console.log(value);
			let str = ""
			$('.channel_list').html("");
			stream.forEach((item) =>{
				let channel = item.channel;
				let {display_name,game,logo,name,status,url,video_banner} = channel;
				// console.log(channel.game);
				let channelAry = {
					bgi: channel.video_banner,
					logo: channel.logo,
					name: channel.display_name,
					game: channel.game,
					status: channel.status,
					url: channel.url,
				};
				if( value == channelAry.name){
					str+= strHtml(channelAry);
					// console.log(str);
					$('.channel_list').html(str)
				}else if(value == channelAry.game){
					str+= strHtml(channelAry);
					// console.log(str);
					$('.channel_list').html(str)
				}
				$('.seaText').val("")
			})
		});
	}
});