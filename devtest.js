
//ques no 1
let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}

//ques no 2
const user = {
	email: "my@email.com",
	updateEmail: function (email){
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)

//ques no 3
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
