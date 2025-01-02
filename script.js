
        // const tinderUser={}
        const tinderUser=new Object()
        console.log(tinderUser);
        
        tinderUser.name="123abc"
        tinderUser.lname="raza"
        tinderUser.IsloggedIn=false

        console.log(tinderUser);
        
        const regularUser={
            email:"regular@gmail.com",
            fullname:{
                userFullName:{
                    firstName:"razanew",
                    lastName:"siddique"
                }
            }
        }
        console.log(regularUser.fullname?.userFullName.firstName);   // ? <- it means - if its is true than go ahead 
        
        const obj1={1:"a",2:"b"}
        const obj2={3:"a",4:"b"}
        // const obj3={obj1,obj2}
        // console.log(obj3);

        // const obj3=Object.assign({},obj1,obj2)  //{} is optional


        const obj3={...obj1,...obj2}
        console.log(obj3);
        
        const users=[
            {
                id:1,
                email:"raza123@gmail.com"
            },
            {
                id:1,
                email:"raza123@gmail.com"
            },
            {
                id:1,
                email:"raza123@gmail.com"
            }
        ]
        console.log(users[1]);
        
            // ************** most IMP method**********


        console.log(Object.keys(tinderUser));
        console.log(Object.values(tinderUser));
        console.log(Object.entries(tinderUser));
        
        console.log(tinderUser.hasOwnProperty('lname'));
        