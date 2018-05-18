//1 polaczenie dwoch zmiennych z wartosciami Hello oraz World bez uzycia concat albo join.
console.log('Zadanie pierwsze:');
console.log('');

const strings = (stringA='Hello', stringB="World") => console.log(`${stringA} ${stringB}`);

strings();

console.log('');
console.log('--------------------------------');
console.log('');
//2 Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b.
console.log('Zadanie drugie:');
console.log('');

const multiply = (a, b = 1) => {return a * b};
console.log(multiply(3, 5));
console.log(multiply(4));

console.log('');
console.log('--------------------------------');
console.log('');

//3 Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane.
console.log('Zadanie trzecie:');
console.log('');

const average = (...args) => {
	let sum = 0;
	args.forEach (arg  => {
		sum += arg;
	});
	return (`Średnia: ${sum/args.length}`);
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

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades)); //xD

console.log('');
console.log('--------------------------------');
console.log('');

//5 Podczas pracy nad projektem natknąłeś się na bardzo DZIWNĄ strukturę danych - [1, 4, 'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.
console.log('Zadanie piąte:');
console.log('');

//Bardzo dziwna struktura danych xD :
const wtf = [1, 4, 'Iwona', false, 'Nowak'];

const [, , name, ,surname] = wtf;

console.log(`Name: ${name}`);
console.log(`Surname: ${surname}`);

console.log('');
console.log('Fin');
