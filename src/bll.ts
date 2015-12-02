// Open will bring up the default browser and navigate to a URI.
var open = require("open");

// This is the message that we show ever X seconds.  
// TODO: Internationalize
export function GetAlertText( timerPeriod )
{
	// The period is in seconds.  We want minutes;
	var minutes = ToNearestMinute(timerPeriod);
	return 'You have been inactive for ' + minutes + ' minutes. Time to stretch!'
}

// Call this function when you want to stop a timer.
export function StopTimer( timer )
{
	clearInterval(timer);
}

// Bring up the browser to the target URL.
export function ShowImage( targetUrl )
{
	open(targetUrl);
}

export function ToNearestMinute( miliseconds )
{
	if( miliseconds < 0 )
	{
		throw new Error('Invalid Argument less than 0 sent to ToNearestMinute');
	}
	
	return Math.trunc( miliseconds/1000/60 );
}