// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 
import * as bll from './bll';

// Open will bring up the default browser and navigate to a URI.
var open = require( "open" );

const timerPeriod = 2000; 					// The peroidicity of the message pop-up in miliseoncds.
const showMeButtonText = 'Show Me'; 			// This text will be shown on the button that brings up the browser
const stopButtonText = 'Stop Alerts';			// This text will be on the button that stops the messages from showing.
const showCatButtonText = 'Show a Cat Instead';

// This is the URI that we will dipslay.  The intent is to show types of stretches to do {
// TODO: Move this image to somewhere that I own.
const imageTargetUrl = 'http://bit.ly/1TsGOW5';
const catImageTargetUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate( context: vscode.ExtensionContext ) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log( 'Congratulations, your extension "Stretch Timer" is now active!  See you in an hour!' ); 

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	var disposable = vscode.commands.registerCommand( 'extension.stretchTimer', () => {
		// Set the timer on a recurring basis.
		var timer = setInterval( 
			() => {
				// This function gets called when the timer goes off.
				TimerCallback( timer );
			},
			// The peroidicity of the timer.
			timerPeriod
		 );
	});
	
	context.subscriptions.push( disposable );
}

// This method gets called when the timer goes off
// It sets up the information message and displays it.
export function TimerCallback( timer )
{
	// Display a information message.
	vscode.window.showInformationMessage( bll.GetAlertText( timerPeriod ), 
										stopButtonText,
										showCatButtonText,
										showMeButtonText)					
		.then( (b)=> {
						// This is the close button ugh.
						if( typeof b == 'undefined' )
						{
							return;
						} 
						else if( b == showMeButtonText )
						{
							bll.ShowImage( imageTargetUrl );
						} 
						else if( b == stopButtonText )
						{
							bll.StopTimer( timer );	
						}
						else if( b == showCatButtonText ) 
						{
							bll.ShowImage( catImageTargetUrl );
						}
					 } );
		
}