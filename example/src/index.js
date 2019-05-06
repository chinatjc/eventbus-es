import eventBus from 'eventbus-es';

setTimeout(function() {
	eventBus.$emit('handler');
	eventBus.$emit('handler2');
}, 1000);

setTimeout(function() {
	eventBus.$on('handler', function() {
		console.log('this is handler');
	});
	eventBus.$on('handler1', function() {
		console.log('this is handler');
	});
}, 1200);
