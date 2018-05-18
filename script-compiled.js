'use strict';

//1 polaczenie dwoch zmiennych z wartosciami Hello oraz World bez uzycia concat albo join.
console.log('Zadanie pierwsze:');
console.log('');

var strings = function strings() {
	var stringA = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var stringB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "World";
	return console.log(stringA + ' ' + stringB);
};

strings();

console.log('');
console.log('--------------------------------');
console.log('');
//2 Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b.
console.log('Zadanie drugie:');
console.log('');

var multiply = function multiply(a) {
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return a * b;
};
console.log(multiply(3, 5));
console.log(multiply(4));

console.log('');
console.log('--------------------------------');
console.log('');

//3 Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane.
console.log('Zadanie trzecie:');
console.log('');

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return '\u015Arednia: ' + sum / args.length;
};

console.log(average(1, 3, 6, 6, 612361));
console.log(average(1));
console.log(average(1, 3));

console.log('');
console.log('--------------------------------');
console.log('');

//4 Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!
console.log('Zadanie czwarte:');
console.log('');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades)); //xD

console.log('');
console.log('--------------------------------');
console.log('');

//5 Podczas pracy nad projektem natknąłeś się na bardzo DZIWNĄ strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.
console.log('Zadanie piąte:');
console.log('');

//Bardzo dziwna struktura danych xD :
var wtf = [1, 4, 'Iwona', false, 'Nowak'];

var name = wtf[2],
    surname = wtf[4];


console.log('Name: ' + name);
console.log('Surname: ' + surname);

console.log('');
console.log('Fin');
