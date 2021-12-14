const example = [2,7,10,9,4,5]

const check = (value) => {
	if (value === null || value === undefined) {
		throw new Error("Object can not be null or undefined")
	}
}

export const filter = (array, callback) => {
		check(array)
		let res = []

		for (let i = 0; i < array.length; i++) {
			if (callback.call(array, array[i], i)) {
				res.push(array[i])
			}
		}

		return res
}

export const map = (array, callback) => {
	check(array)

	let res = []

	for (let i = 0; i < array.length; i++) {
		res.push(callback.call(array, array[i], i))
	}

	return res
}

export const every = (array, callback) => {
	check(array)

	let res = []

	for (let i = 0; i < array.length; i++) {
		if (!callback.call(array, array[i], i)) {
			res.push(array[i])
		}
	}

	return res.length === 0
}

export const find = (array, callback) => {
	check(array)
	
	let V;

	for (let i = 0; i < array.length; i++) {
		if (callback.call(array, array[i], i)) {
			if (V === undefined) {
				V = array[i]
			}
		}
	}

	return V
}
