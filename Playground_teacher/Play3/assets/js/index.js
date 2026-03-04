      'use strict';
      
      console.log("Hello, world!");
      let a = 3;
      let b = 4;
      console.log(a + b);

      let pageTitle = document.querySelector("#pageTitle");
      pageTitle.innerText = "Hello from Martin";

      let newTitle = document.createElement("h1");
      newTitle.innerText = "My second title";
      pageTitle.after(newTitle);

      let myList = document.querySelector("#myList")
      for (let index = 0; index < 10; index++) {
        
        let li = document.createElement("li");
        li.innerText = `Item ${index}`;
        myList.appendChild(li);
        
      }