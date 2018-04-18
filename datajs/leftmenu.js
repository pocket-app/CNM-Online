function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}


$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/yellow/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="featured_photo.html" class="close-panel"><img src="images/icons/yellow/favorites.png" alt="" title="" /><span>Featured</span></a></li><li><a href="service_video.html" class="close-panel"><img src="images/icons/yellow/video.png" alt="" title="" /><span>CNM TV</span></a></li><li><a href="events.html" class="close-panel"><img src="images/icons/yellow/news1.png" alt="" title="" /><span>Events & Meetings</span></a></li><li><a href="cnm-radio.html" class="close-panel"><img src="images/icons/yellow/blog.png" alt="" title="" /><span>CNM Radio</span></a></li><li><a href="abc-church.html" class="close-panel"><img src="images/icons/yellow/box.png" alt="" title="" /><span>ABC Church</span></a></li><li><a href="cnm-prayer-altar.html" class="close-panel"><img src="images/icons/yellow/form.png" alt="" title="" /><span>CNM Prayer Altar</span></a></li>	<li><a href="cnm-media-craft.html" class="close-panel"><img src="images/icons/yellow/movie.png" alt="" title="" /><span>CNM Media Craft</span></a></li>   <li><a href="speaking_engagement.html" class="close-panel"><img src="images/icons/yellow/speak.png" alt="" title="" /><span>Speaking Engagement</span></a></li><li><a href="cnm-stores.html" class="close-panel"><img src="images/icons/yellow/mobile.png" alt="" title="" /><span>CNM Stores</span></a></li><li><a href="support.html" class="close-panel"><img src="images/icons/yellow/top.png" alt="" title="" /><span>Support</span></a></li><li><a href="#" data-popup=".popup-social" class="open-popup"><img src="images/icons/yellow/features.png" alt="" title="" /><span>Join Us</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/yellow/contact.png" alt="" title="" /><span>Contact</span></a></li><li><a href="about.html" class="close-panel"><img src="images/icons/yellow/user.png" alt="" title="" /><span>About</span></a></li>';
		
		$("#sidemenu").append(menu);
		
	});