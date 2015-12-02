// 
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import * as bll from '../src/bll';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

import expect = require('expect')

// Defines a Mocha test suite to group tests of similar kind together
suite("Business Logic Tests", () => {

	// Defines a Mocha unit test
	test("Test ToNearestMinute", () => {
		assert( bll.ToNearestMinute(3600000), '60' );
		expect( () => { bll.ToNearestMinute(-1); } ).toThrow( 'Invalid Argument less than 0 sent to ToNearestMinute' ); 
	});	
});