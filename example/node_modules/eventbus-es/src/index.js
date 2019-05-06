const eventBus = {
	triggerMap: {},
	waitTriggerList: [],

	$on(name, fn) {
		// 注册事件
		if (!this.triggerMap[name]) {
			this.triggerMap[name] = fn;
		}
		// 触发等待触发事件
		var waitTriggerEventNameIndex = this.waitTriggerList.findIndex(eventName => eventName === name);
		if (waitTriggerEventNameIndex !== -1) {
			this.waitTriggerList.splice(waitTriggerEventNameIndex, 1);
			this.$emit(name);
		}
	},
	$emit(name) {
		// 触发已经注册事件
		if (this.triggerMap[name]) {
			return this.triggerMap[name]();
		}
		// 无注册事件，把事件名扔到等待触发数组里
		if (!this.waitTriggerList.find(eventName => eventName === name)) {
			return this.waitTriggerList.push(name);
		}
	}
};

export default eventBus;
