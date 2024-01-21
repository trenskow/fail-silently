export default function(fnc) {

	return (...args) => {

		let result;

		try {
			result = fnc(...args);
		} catch (_) { }

		if (typeof (result || {}).then === 'function') {
			result = result.catch(() => { });
		}

		return result;

	};

}
