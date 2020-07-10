export function byNumericValue(a, b) {
	a = Number(a);
	b = Number(b);
	switch (true) {
		case isNaN(a) && isNaN(b):
			return 0;
		case isNaN(a):
			return 1;
		case isNaN(b):
			return -1;
		default:
			return a - b;
	}
}
