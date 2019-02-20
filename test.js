
const leakage = require('leakage');

describe( `Testing leakage`, function(){

	it(`Without sinon`, function(){
		leakage.iterate( ()=>{} );
	});

	it(`With sinon`, function(){
		const sinon = require('sinon');
		leakage.iterate( ()=>{} );
	});

});
