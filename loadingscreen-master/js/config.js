/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Eternal Gaming Clone Wars";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/server 1.jpg",
	"backgrounds/images/server 2.jpg",
	"backgrounds/images/server 3.jpg",
	"backgrounds/images/server 4.jpg",
        "backgrounds/images/server 5.jpg",
        "backgrounds/images/server 6.jpg",
        "backgrounds/images/server 7.jpg",
        "backgrounds/images/server 8.jpg",
        "backgrounds/images/server 9.jpg",
        "backgrounds/images/server 10.jpg",
        "backgrounds/images/server.png",
	
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "DNWaJU8nNno", name: "Halo 3 - Finish the Fight"},
	{youtube: "uXcWxw7UHME", name: "Halo 3 - Menu Theme"},
	{youtube: "q_pAa9252Uo", name: "Halo 3 - Warthog Run - Extended"},
	{youtube: "Hr6dlbhLKdk", name: "Halo Reach - Intro/Theme"},
	{youtube: "ZJ9QrQ1j4sU", name: "Halo Reach - Overture"},
	{youtube: "GnXwhcOClbk", name: "Halo Reach - Lone Wolf"},
	{youtube: "8q4jWeo5oxA", name: "Halo Reach - Epilogue"},
	{youtube: "isaOrKNHw7g", name: "Halo Reach - Ghosts and Glass"},
	{youtube: "xT0Pte5nXAU", name: "Halo 3 - Never Forget"},
		
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 8;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Thanks for joining!",
"We have a large number of addons! Please be patient and enjoy the music!",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
