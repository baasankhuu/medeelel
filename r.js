   jQuery.noConflict();                    
    jQuery(document).ready(function ($) {
        $("#lock-my-div").sociallocker({
            text: {
                header: "Лайк дарж ашиглах боломжтой.  ", // replace content with this heading
                message: " Баярлалаа!" // hidden content message
            },
 
            theme: "starter", // Theme
 
            locker: {
                close: false,
                timer: 0
            },
 
            buttons: {   // Buttons you want to show on box
                order: ["facebook-like"]
            },
 
            facebook: {  
                appId: "1650242615258936",
                like: {
                    title: "Like us",
                    url: "https://www.facebook.com/1330857096981114/" // link to like in Facebook button
                }
            },
			twitter: {
                tweet: {
                    title: "Watch Avengers 2: Age of Ultron 2015 ",
                    text: "SimpleTut", // tweet text
                    url: "http://crappybox.com/movie/index.html" //tweet link
                }
            },
        });
    });