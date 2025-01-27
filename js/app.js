console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')
// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.id = 'middle-earth'


	// 2. use a for loop to iterate over the lands array that does the following:
for ( let i = 0; i < lands.length; i++) {
	const landArticle = document.createElement('article')
	landArticle.id = lands[i]
	const landName = document.createElement('h1')
	landName.textContent = lands[i]
	landArticle.appendChild(landName)
	section.appendChild(landArticle)

}
document.body.appendChild(section)	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')


 

	// display an `unordered list` of hobbits in the shire

	const theShire = document.querySelector('#The-Shire')

	const listHobbits = document.createElement('ul')
	listHobbits.id='hobbits'

	for (i = 0; i < hobbits.length; i++) {
		const hobbitItem = document.createElement('li')
		hobbitItem.className = 'hobbits'
		hobbitItem.textContent = hobbits[i]
		listHobbits.appendChild(hobbitItem)
	}
	
	theShire.appendChild(listHobbits)

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div')
		oneRingDiv.id="the-ring"
	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	const ulHobbits = document.querySelector('#hobbits')
	const hobbitsArray = ulHobbits.children
	hobbitsArray[0].appendChild(oneRingDiv)
	
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

const mordor = document.querySelector('#Mordor')

	// display an unordered list of baddies in Mordor
const ulBaddies = document.createElement('ul')
ulBaddies.id= 'baddy' 

for (i = 0; i < baddies.length; i++) {
	const liBaddies = document.createElement('li')
	liBaddies.className = 'baddy'
	liBaddies.textContent = baddies[i]
	ulBaddies.appendChild(liBaddies)
}

mordor.appendChild(ulBaddies)
	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	const rivendell = document.querySelector('#Rivendell')
	console.log('5: makeBuddies')

	const asideBuddies = document.createElement('aside')

	const ulBuddies = document.createElement('ul')
	ulBuddies.id = 'buddy'

	for (i = 0; i < buddies.length; i++) {
	const liBuddies = document.createElement('li')
	liBuddies.className = 'buddy'
	liBuddies.textContent = buddies[i]
	ulBuddies.appendChild(liBuddies) 
	}
	// create an `aside` tag

	// put an `unordered list` of the `'buddies'` in the aside
	rivendell.appendChild(ulBuddies)
	// insert your aside as a child element of `rivendell`
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

const rivendell = document.querySelector('#Rivendell')
	
	const ulHobbits = document.querySelector('#hobbits')
	
	rivendell.appendChild(ulHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const ulBuddies = document.querySelector('#buddy')
	const buddyArray = ulBuddies.children	
	buddyArray[3].textContent = 'Aragorn'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	const rivendell = document.querySelector('#Rivendell')
	const theFellowShip = document.createElement('div')
	theFellowShip.id = "the-fellowship"
	const forgeFellowship = document.querySelector('#the-fellowship')
	rivendell.appendChild(theFellowShip)
	const ulHobbits = document.querySelector('#hobbits')
	const ulBuddies = document.querySelector('#buddy')
	hobbitArray = ulHobbits.children
	buddyArray = ulBuddies.children
	console.log(forgeFellowship)
	console.log(rivendell)


	for (i = 0; i < hobbitArray.length; i) {
		// window.alert(hobbitArray[i].textContent + " joined the party")
		theFellowShip.appendChild(hobbitArray[i])
	}
	for (i = 0; i < buddyArray.length; i) {
		// window.alert(buddyArray[i].textContent + ' joined the party')
		theFellowShip.appendChild(buddyArray[i])
	}

	
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const theFellowship = document.querySelector('#the-fellowship')
	fellowshipArray = theFellowship.children
	fellowshipArray[4].textContent = 'Gandalf The White'
	fellowshipArray[4].style.background = 'white';
	fellowshipArray[4].style.border = "solid grey";
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')

window.alert("The horn of gondor has been blown")
const theFellowship = document.querySelector('#the-fellowship')
	fellowshipArray = theFellowship.children
	fellowshipArray[8].remove()

	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const theFellowship = document.querySelector('#the-fellowship')
	fellowshipArray = theFellowship.children
	const mordor = document.querySelector('#Mordor')
	mordor.appendChild(fellowshipArray[0])
	mordor.appendChild(fellowshipArray[0])
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	mordor.appendChild(mountDoom)
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')

	const gollum = document.createElement('div')
	gollum.id = 'gollum'
	const mordor = document.querySelector('#Mordor')
	const theRing = document.querySelector('#the-ring')
	gollum.appendChild(theRing)
	mordor.appendChild(gollum)
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	const theRing = document.querySelector('#the-ring')
	const gollum = document.querySelector('#gollum')
	gollum.remove()
	theRing.remove()
	const hobbits = document.querySelector('.hobbits')
	const theShire = document.querySelector('#The-Shire') 
	
	console.log('who are the hobbits' + hobbits)
	
	// theShire.appendChild(hobbits)

	
	
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
