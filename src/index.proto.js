const example = [2,7,10,9,4,5]

const check = (value) => {
	if (value === null || value === undefined) {
		throw new Error("Object can not be null or undefined")
	}
}

Array.prototype.filter2 = function (callback, thisArg) {
	check(this)
	let T;

	let res = []

	if (arguments.length > 1) {
		T = thisArg
	}

	for (let i = 0; i < this.length; i++) {
		if (callback.call(T, this[i], i, this)) {
			res.push(this[i])
		}
	}

	return res
}

console.log(example.filter2((item, index) => item >= 5 && index < 3))

Array.prototype.map2 = function (callback, thisArg) {
	check(this)
	let T;

	let res = []

	if (arguments.length > 1) {
		T = thisArg
	}

	for (let i = 0; i < this.length; i++) {
		res.push(callback.call(T, this[i], i, this))
	}

	return res
}

console.log(example.map2(item => item * 2))


Array.prototype.every2 = function (callback, thisArg) {
	check(this)

	let T;

	let res = []

	if (arguments.length > 1) {
		T = thisArg
	}

	for (let i = 0; i < this.length; i++) {
		if (!callback.call(T, this[i], i, this)) {
			res.push(this[i])
		}
	}

	return res.length === 0
}

console.log(example.every2(item => item > 1))
console.log(example.every2(item => item < 1))
console.log([].every2())

Array.prototype.find2 = function (callback, thisArg) {
	check(this)

	let T;

	let V;

	if (arguments.length > 1) {
		T = thisArg;
	}

	for (let i = 0; i < this.length; i++) {
		if (callback.call(T, this[i], i, this)) {
			if (V === undefined) {
				V = this[i]
			}
		}
	}

	return V
}

console.log(example.find2((item, index) => item === 5 && index < 5))
