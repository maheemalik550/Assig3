let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]

function get(){
   const input = document.getElementById("input");
   const select = document.getElementById("select")
   const inputValue = input.value;
   console.log(inputValue) //input value

  const dropDown = select.value;
  console.log(dropDown); //dropdown alue
  //filter method
const filterItem = arr.filter((mobile)=>  mobile[dropDown] === input.value)

const data = document.getElementById("data");
data.innerHTML = ""; 

filterItem.forEach((mobile) => {
    
    const listItem = document.createElement("ul");
    listItem.innerHTML += `
   <li>Brand: ${mobile.brand}</li>
   <li>model: ${mobile.model}</li>
   <li>price: ${mobile.price}</li>
   <li>camera: ${mobile.camera}</li>
   <li>ram: ${mobile.ram}</li>
   <li>rom: ${mobile.rom}</li>
   `
    data.appendChild(listItem);
    // console.log(mobile)
  });
  input.value = "";
}