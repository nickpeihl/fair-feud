// Configuration file, change the contents to your needs. The contents of this
// file are in the public domain.

// The number of rounds can be changed:
//  * add/remove questions in questions_rounds
//  * add/remove rows in answers_rounds
//  * add/remove entries in multiplicator

// The number of answers per question can be changed:
//  * add/remove entries in the correct row of answers_rounds

// The number of questions in the finals can be changed:
//  * add/remove rows in questions_finals
//  * add/remove rows in answers_finals

// The number of valid answers in the finals can be changed:
//  * add/remove entries in the correct row of answers_finals

// questions for rounds
var questions_rounds = [
    'Name something people fall out of',
    'Name something men boast about having',
    'Name something superstitious people think is bad luck',
    'Name something people keep putting off'
];

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
    [
	['Love', 55],
	['Bed', 23],
	['Trees', 16],
	['Chair/Wheelchair', 15],
	['Boat/Car', 15]
    ],[
	['Muscles/Strength', 31],
	['Car/Truck', 23],
	['Hair', 15],
	['Big Tallywacker/"Big Hands-Feet"', 9],
        ['Lovemaking/Women', 6]
	['Hardworking/Their Work', 3],
    ],[
	['Black Cat', 100],
	['Walking Under Ladder', 75],
	['Breaking Mirror', 50],
	['Friday the 13th/Number 13', 25],
        ['Step on a Crack', 20],
        ['Upside-down Horseshoe', 5]
    ], [
        ['Taxes', 90],
        ['Household Chores', 75],
        ['Going to Dentist/Doctor', 50],
        ['Making Will', 25],
        ['Paying Bills', 20]
    ]
];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 2, 3];


// questions for finals
var questions_finals = [
    'Name a wild animal from the San Juan Islands',
    'Name a celebrity with a lot of plastic surgery',
    'Name a piece of clothing people buy without trying on',
    'Name something you stir while cooking',
    'Name a fruit typically served at breakfast'
];


// answers to the questions for the finals
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five questions
var answers_finals = [
    [
	['Fox', 64],
	['Deer', 44],
	['Orca', 14],
	['Raccoon', 11],
	['Eagle', 10],
        ['Rabbit', 7]
    ],[
	['Joan Rivers', 53],
	['Bruce Jenner', 23],
	['Michael Jackson', 14],
	['Dolly Parton', 9],
	['Kenny Rogers', 6],
        ['Pamela Anderson', 5],
        ['Cher', 5],
        ['Burt Reynolds', 4],
        ['Melanie Griffith', 4],
        ['Donald Trump', 3]
    ],[
	['Socks', 66],
	['Underwear', 65],
	['Shirt', 19],
	['Scarf', 5],
	['Hat', 3],
        ['Shorts', 2],
        ['Necktie', 1],
        ['Pantyhose', 1],
        ['Shoes', 1],
        ['Coat', 1]
    ],[
	['Sauce', 35],
	['Soup', 27],
	['Pasta', 16],
	['Pudding/Custard', 13],
        ['Gravy', 11],
        ['Oatmeal', 7],
        ['Risotto', 7]
    ], [
        ['Banana', 84],
        ['Grapefruit', 35],
        ['Melon', 14],
        ['Orange', 11],
        ['Fruit Jam', 9],
        ['Strawberries', 7],
        ['Blueberries', 1],
        ['Mango', 1],
        ['Raspberries', 1]
    ]
];


// timer duration for first and second player in finals, given in seconds
var timers = [20, 25];
