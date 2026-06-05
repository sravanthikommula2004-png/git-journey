const menu = [
  { name: "margrtia", price: 200 },
  { name: "chessy overloaded", price: 350 },
  { name: "paneer pizza", price: 400 },
  { name: "chicken pizza", price: 450 }
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue =[]

function addNewPizza(pizzaobject) {
    menu.push(pizzaobject)
}

function placeOrder(pizzaname) {
    const selectedPizza =menu.find(pizzaobject => pizzaobject.name === pizzaname) 
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++,pizza: selectedPizza,status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}


function CompleteOrder(orderId) {
    const order = orderQueue.find(order =>order.id== orderId)
    order.status ="completed"
    return order
    }

    addNewPizza({name:"full topings pizza", price: 500,})
    addNewPizza({name:"BBQ Chicken", price: 650,})
    addNewPizza({name:"Spicy sausage", price: 700,})

    placeOrder("full topings pizza")
    CompleteOrder("1")

    console.log("Menu:", menu)
    console.log("cash in regiester :",cashInRegister)
    console.log("Order Queue:", orderQueue)