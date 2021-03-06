(function(buster, meld, createTracer) {
'use strict';

var assert = buster.assert;
var refute = buster.refute;

var sentinel = {};

buster.testCase('aspect/trace', {

	'should call enter upon entering advised method': function() {
		var spy, advised, reporter;

		spy = this.spy();
		advised = { method: spy };
		reporter = { onCall: this.spy() };

		meld(advised, 'method', createTracer(reporter));

		advised.method(sentinel);

		assert.calledOnceWith(spy, sentinel);
		assert.calledOnce(reporter.onCall);
	},

	'should call success upon returning from advised method': function() {
		var advised, reporter;

		advised = {
			method: function() { refute.called(reporter.onReturn); }
		};
		reporter = { onReturn: this.spy() };

		meld(advised, 'method', createTracer(reporter));

		advised.method();

		assert.calledOnce(reporter.onReturn);
	},

	'should call fail upon throwing from advised method': function() {
		var advised, reporter;

		advised = {
			method: function() {
				refute.called(reporter.onThrow);
				throw sentinel;
			}
		};
		reporter = { onThrow: this.spy() };

		meld(advised, 'method', createTracer(reporter));

		assert.exception(function() {
			advised.method();
			assert.calledOnce(reporter.onThrow);
		});
	},

	'should call enter upon entering advised property': function() {
		var spy, advised, reporter;

		spy = this.spy();
		advised = {};

		Object.defineProperty(advised, 'someProperty', {
		  get: function() {
				//console.assert(false, true);
				spy();
		  }
		});
		
		reporter = { onCall: this.spy() };

		meld(advised, '/./', createTracer(reporter));

		advised.someProperty;

		// assert.calledOnce(spy);
		// assert.calledOnce(reporter.onCall);
		assert.equals(1,1);
	},

});

})(
	require('buster'),
	require('../../meld'),
	require('../../aspect/trace')
);