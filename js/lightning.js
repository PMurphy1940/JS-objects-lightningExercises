// 2.2.1 "Mustang" //
const ponyCar = {
    make: "Ford",
    model:  "Mustang",
    year: "2015",
    color: "red",
    engine: "v8",
    custom: "Shelby GT"
}
console.log(ponyCar)

// 2.2.2 "No Kill shelter" //

const shelterResidents = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Boots", "Sharky"]

console.log(shelterResidents)
console.log(shelterResidents[2])

// 2.2.3 "Family Matters" //

const tom = {
    name: "Tom",
    relation: "father",
    age: 42,
    drink: "beer"
}
const mary = {
    name: "Mary",
    relation: "mother",
    age: 40,
    drink: "wine"
}
const tomjr = {
    name: "Tom Jr.",
    relation: "son",
    age: 17,
    drink: "Mountain Dew"
}
const susan = {
    name: "Susan",
    relation: "daughter",
    age: 12,
    drink: "coffee"
}
const familyMembers = [tom, mary, tomjr, susan]

console.log(`${familyMembers[3].name} likes to drink ${familyMembers[3].drink}`)

// 2.2.4 "Wardrobe" //

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`This wardrobe is ${wardrobe.height} inches high`)
console.log(`This wardrobe was made by ${wardrobe.manufacturer}`)
console.log(`This wardrobe contains a ${wardrobe.contents}`)
console.log(`This wardrobe is ${wardrobe.depth} inches deep`)
console.log(`This wardrobe is ${wardrobe.width} inches wide`)

// 2.2.5 "Empire State building" //

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`The Empire State Building is ${empireStateBuilding.stories} stories`)
console.log(`The Empire State Building is ${empireStateBuilding.height} feet high`)
console.log(`The Empire State Building is ${empireStateBuilding.squareFeet} square feet`)
console.log(`The Empire State Building has a ${empireStateBuilding.eastWestLength} foor length east to west`)
console.log(`The Empire State Building has a ${empireStateBuilding.northSouthLength} foot length north to south`)

const keyAddress = "address"
const keyConDate = "constructionDate"
const keyCost = "cost"
const keyOwner = "owner"
const keyArchitect = "architect"

console.log(`The Empire State Building is located at ${empireStateBuilding[keyAddress]}`)
console.log(`The Empire State Building was built in ${empireStateBuilding[keyConDate]}`)
console.log(`The Empire State Building cost $${empireStateBuilding[keyCost]} to build in ${empireStateBuilding[keyConDate]}`)
console.log(`The Empire State Building is owned by the ${empireStateBuilding[keyOwner]}`)
console.log(`The Empire State Building was designed by the arcitectural firm ${empireStateBuilding[keyArchitect]}`)

// 2.2.6 "Instructors" //

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const ptInstructors = nashvilleSoftwareSchool.instructors.partTime

for (let j = 0; j < ptInstructors.length; j++) {
    console.log(ptInstructors[j])
}

const ftInstructors = nashvilleSoftwareSchool.instructors.fullTime

for (let i = 0; i < ftInstructors.length; i++) {
    console.log(ftInstructors[i])
}

console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])

// 2.2.7 "The Beatles"//

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} album.`)