// Creating a function to create an img

function newImage(url, left, bottom){
let object = document.createElement('img')
object.src = url
object.style.position = 'fixed'
object.style.left = left + 'px'
object.style.bottom = bottom + 'px'
document.body.append(object)
return object
}

// Creating a function to create clickable items

function newItem(url, left, bottom){
let item = document.createElement('img')
item.src = url
item.style.position = 'fixed'
item.style.left = left + 'px'
item.style.bottom = bottom + 'px'
document.body.append(item)

item.addEventListener('dblclick', function(){
    item.remove()
})
}

newImage('assets/green-character.gif', '100', '100')
newImage('assets/pine-tree.png', '450', '200')
newImage('assets/tree.png', '200', '300')
newImage('assets/pillar.png', '350','100')
newImage('assets/crate.png','150', '200')
newImage('assets/well.png', '500', '425')

newItem('assets/sword.png', '500', '450')
newItem('assets/sheild.png', '165', '185')
newItem('assets/staff.png', '600', '100')

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// adding a pine tree

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// gotta add these bois
// assets/tree.png (200px from the left, 300px from the bottom)
// assets/pillar.png (350px from the left, 100px from the bottom)
// assets/crate.png (150px from the left, 200px from the bottom)
// assets/well.png (500px from the left, 425px from the bottom)

//adding items starting with this code
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

// after adding a sword, I'll add a shield and staff too using the following
// assets/shield.png (165px from the left, 185px from the bottom)
// assets/staff.png (600px from the left, 100px from the bottom)