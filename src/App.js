import './App.css';
import React from 'react';

const serverURL = "https://fakestoreapi.com/products"

async function getCommerceData() {
  const response = await fetch(`${serverURL}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },

  }); console.log(response)
  const allCat = await response.json()
 

  



  return
}
async function getElectronisData() {
  const response = await fetch(`${serverURL}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },

  }); console.log(response)
  const allElectronics = await response.json()
  
  let electronicsArray = []
  
  if(allElectronics){

    for (let i = 0; i < allElectronics.length; i++) {
      if(allElectronics[8].category === "electronics" ){
        electronicsArray.push()
console.log("hello electronics")
console.log(electronicsArray)
      }
    }
  
    console.log(allElectronics[8].category)
    console.log(allElectronics)
  }
  
  return
}

async function getWClothingData() {
  const response = await fetch(`${serverURL}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },

  }); console.log(response)
  const allWClothing= await response.json()
  console.log(allWClothing)
  return
}
async function getMClothingData() {
  const response = await fetch(`${serverURL}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },

  }); console.log(response)
  const allMClothing = await response.json()
  console.log(allMClothing)
  return 
} 




// id1: {
//   category: "",
//   description: "",
//   image: "",
//   price: "",
//   rating: 0,
//   title: "",},

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {



      id1: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id2: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id3: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id4: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id5: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id6: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id7: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id8: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id9: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id10: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id11: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id12: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id13: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id14: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id15: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id16: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id17: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id18: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id19: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
      id20: {
        category: "",
        description: "",
        image: "",
        price: "",
        rating: 0,
        title: "",
      },
    };
  }


  handleGetCategories = async (event) => {
    const getCategories = await getCommerceData(this.state.id)
  

  }
  handleGetElectronics = async (event) => {
    const getElectronics = await getElectronisData(this.state.category)
  }

  handleGetWClothing = async (event) => {
    const getWClothing = await getWClothingData(this.state)
  }

  handleGetMClothing = async (event) => {
    const getMClothing = await getMClothingData(this.state.id)
    // const clothMen = getMClothing.map(clothes)

    // // function clothes(men){
    // //   return men.category
    // }

   
  }







  render() {

    return (
      <div className="main" >
        <h1 className="headTitle">Shop All</h1>
        <div className="catatoryOrder">
          <button name="allCategory" onClick={this.handleGetCategories}>All Categories</button>
          <button name="onlyElectronics" onClick={this.handleGetElectronics}>Electronics</button>
          <button name="onlyWomenClothing" onClick={this.handleGetWClothing}>Women's Clothing</button>
          <button name="onlyMenClothing" onClick={this.handleGetMClothing}>Men's Clothing</button>
        </div>
        <div className="topicDiv">
          <div className="menClothing">Area 1</div>
          <div className="womenClothing">Area 2</div>
          <div className="electronics">Area 3</div>
        </div>

      </div>
    )
  }
}







export default App;
