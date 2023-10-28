

// const server = http.createServer((req,res)=>{
//     if(req.url == '/bookData'){
//         console.log("/ Request")
//         res.write(JSON.stringify(bookData))
//     }
//     res.end();
// })

// server.listen(4000)
// const server = http.createServer((req,res)=>{
//     if(req.url == "/"){
//         console.log("/ Request")
//         res.write(bookData)    }
//     res.end();
// })

// server.listen(4000)

// const express = require("express");

// const App = express();
// App.get("/bookData", (req, res)=>{
//     res.send(bookData);
// })

// App.listen(4000, ()=>{
//     console.log("Server is on http://localhost:4000/")
// })
let http = require("http")



  const express = require("express");
  require("dotenv").config()
  const App = express()
  App.use(express.json())
  const courses = [
    {
      id: 1,
      name: "Graphic Designing",
      shortName: "Graphic Design",
      fee: 1500,
    },
    {
      id: 2,
      name: "MERN Stack Development",
      shortName: "MERN Stack",
      fee: 2500,
    },
    {
      id: 3,
      name: "Python Programming",
      shortName: "Python",
      fee: 1200,
    },
    {
      id: 4,
      name: "Web Development",
      shortName: "Web Dev",
      fee: 2000,
    },
    {
      id: 5,
      name: "Java Programming",
      shortName: "Java",
      fee: 1800,
    },
    {
      id: 6,
      name: "Data Science",
      shortName: "Data Science",
      fee: 3000,
    },
    {
      id: 7,
      name: "iOS App Development",
      shortName: "iOS Dev",
      fee: 2800,
    },
    {
      id: 8,
      name: "Android App Development",
      shortName: "Android Dev",
      fee: 2700,
    },
    {
      id: 9,
      name: "Cloud Computing",
      shortName: "Cloud Computing",
      fee: 2200,
    },
    {
      id: 10,
      name: "Network Security",
      shortName: "Net Security",
      fee: 2600,
    },
    {
      id: 11,
      name: "Full Stack Web Development",
      shortName: "Full Stack Dev",
      fee: 2300,
    },
    // Add more courses as needed
  ];
  App.get("/courses", (req, res)=>{
    res.send(courses)
  })
  App.get("/courses:id", (req, res)=>{
    let id = req.param.id;
    let obj = courses.find((x)=> x.id ==id)
    if(obj){
        res.send(
          {  
            isSuccessful:true,
            data:obj,
            message:""
        
        }
        )
     
    }
    else{
res.send({
    isSuccessful:true,
    data:null,
    message:"No Data Found"
})
    }
  });

  App.post("/courses", (req, res)=>{  
    let {name , shortName, fee} = req.body
    let obj ={name , shortName, fee}
    let errArr={}
    if(!obj.name){
    errArr.push("Required Name")
}
if(!obj.shortName){
    errArr.push("Required Short Name")
}
if(errArr.length > 0 ){
    res.send({
        isSuccessful:false,
        message:"Validation Error !",
        data:errArr,
    });
}
else{
    obj.id = courses.length +1;
    courses.push(obj)
    res.send({
        isSuccessful:true,
        message:"Data Added Successfully",
        data:obj,
    })
}

})
//   App.get("courses/:id", (req, res)=>{})
//   App.delete("courses/:id", (req, res)=>{})
  App.listen(process.env.PORT,()=>{
    console.log(`http://localhost:4000/${process.env.PORT}`)

  
  })

