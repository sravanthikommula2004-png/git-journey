type Address ={
    street:"hyderabad",
    country:"telagana"
  }
  
type person ={
  name: string
  age: number
  isStudent: boolean
  address: Address
 
  }
  


let person1: person= {
  name:"joe",
  age:42,
  isStudent:true,
  address: {
    street:"hyderabad",
    country:"telagana"
  }
  
}

let person2: person= {
  name:"jack",
  age:66,
  isStudent:false,
   address: {
    street:"hyderabad",
    country:"telagana"
  }
  
}
function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address.street}`)
}

displayInfo(person1)
