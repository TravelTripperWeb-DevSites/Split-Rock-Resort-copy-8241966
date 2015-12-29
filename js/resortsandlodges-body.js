
var hostType = (("https:" == document.location.protocol) ? "https://app." : "http://app.");
document.write(unescape("%3Cscript src='" + hostType + "phonalytics.com/track/phonalytics.js' type='text/javascript'%3E%3C/script%3E"));

try
{
	var _pat = new Phonalytics();
	_pat.phoneTracking('phone');
	_pat.trackPageview();
}
catch(e){}
