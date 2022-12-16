let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    
    let updatedData =
    {name: "Mochamad Erwin WN",
    email: "Wahyuerwin81@gmail.com",
    hobby: ["playing game"]
    }
    
    // // join data Object
    const joinData = {...data,...updatedData}
    console.log(joinData);
    
    let {street, city} = data.address;
    
    console.log(street); 
   console.log(city);