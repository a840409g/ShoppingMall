const clien_id = 'rgzxq2n5g3w2pnd4qrhwlx0wxrmgbc';
const limit = 100;
const twitchAPI = 'https://api.twitch.tv/kraken/streams/?client_id=' + clien_id + '&limit=' + limit;
// const test = "https://api.twitch.tv/kraken/streams/yuniko0720/?client_id="+clien_id;
console.log(twitchAPI)
$.ajax({
	url: twitchAPI,
	success: function(res){
		let stream = res.streams;
		let len = stream.length;
		let str = "";
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
		for(let i=0;i<len;i++){
			let channel = stream[i].channel;
			let lan = channel.broadcaster_language;
			let disName = channel.display_name;
			let game = channel.game;
			let logo = channel.logo;
			let name = channel.name;
			let status = channel.status;
			let url = channel.url;
			let bgi = channel.video_banner;
			let channelAry = {
				bgi: bgi,
				logo: logo,
				name: disName,
				game: game,
				status: status,
				url: url,
			};
			content = strHtml(channelAry);
			str+=content;
			$('.channel_list').html(str);
			$('.cata').click(function(e) {
				let value = e.target.dataset.text;
				$('.channel_list').html("");
				// console.log(value);
				if( value == game){
					content = strHtml(channelAry);
					str+=content;
					$('.channel_list').html(str);
					console.log(game);
				}
			});
		}
	}
});