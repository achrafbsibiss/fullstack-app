const mysql = require('mysql')


// Connection Pool

const pool = mysql.createPool({
    connectionLimit : 100,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    // password : process.env.DB_PASS,
    database : process.env.DB_NAME

})




// View Users

exports.view=(req,res) => {
    // res.render('adminepage')



    // connextion to database
    pool.getConnection((err,connection)=>{
        if (err)throw err; //not connected!
        console.log (`connection as ID `+ connection.threadId)
    
        // user the connection
        connection.query('SELECT * FROM voip ',(err,rows)=>{
            // when done with connection ,release it
                connection.release()
            
                if (!err){
                    res.render('adminepage',{ rows })
                }else{
                    console.log(err);
                }
                // to see the data in your terminale
                
                console.log("the data from voip user table: \n",rows);
            })
    })


} 


// Find User by Search

exports.find =(req,res) =>{

    pool.getConnection((err,connection)=>{

        if (err)throw err; //not connected!
        console.log (`connection as ID `+ connection.threadId)
        

        let seachTem=req.body.search
        // user the connection to Search
        connection.query('SELECT * FROM voip  WHERE name LIKE ?',['%' + seachTem + '%'],(err,rows)=>{
            // when done with connection ,release it
                connection.release()
            
                if (!err){
                    res.render('adminepage',{ rows })
                }else{
                    console.log(err);
                }
                // to see the data in your terminale
                
                console.log("the data from voip user table: \n",rows);
            })

})
}

// page to now the price for all
exports.price = (req,res)=>{
    res.render('prix')
}

// home page to user recte and register
exports.home =(req,res) =>{
    res.render('home')
}

// to user register
exports.registeruser =(req,res) =>{

    const{name,email,number,message}=req.body

     // connextion to database
     pool.getConnection((err,connection)=>{
        if (err)throw err; //not connected!
        console.log (`connection as ID `+ connection.threadId)

        
    
        // user the connection
        connection.query('INSERT INTO voip SET name= ?,email= ?,number= ?,message= ?',[name,email,number,message],(err,rows)=>{
            // when done with connection ,release it
                connection.release()
            
                if (!err){
                    res.render('home',{ alert : 'user added successfuly'})
                }else{
                    console.log(err);
                }
                // to see the data in your terminale
                
                console.log("the data from voip user table: \n",rows);
            })
    })


}



// add user in admine page

exports.adduserinadmine=(req,res)=>{
    res.render('addinadmin')
}


exports.adduser=(req,res)=>{

    const{name,email,number,message}=req.body

    // connextion to database
    pool.getConnection((err,connection)=>{
       if (err)throw err; //not connected!
       console.log (`connection as ID `+ connection.threadId)

       
   
       // user the connection
       connection.query('INSERT INTO voip SET name= ?,email= ?,number= ?,message= ?',[name,email,number,message],(err,rows)=>{
           // when done with connection ,release it
               connection.release()
           
               if (!err){
                   res.render('addinadmin',{ alert : 'user added successfuly'})
               }else{
                   console.log(err);
               }
               // to see the data in your terminale
               
               console.log("the data from voip user table: \n",rows);
           })
   })






}





// update PAGE


exports.edituser =(req,res)=>{
     // connextion to database
     pool.getConnection((err,connection)=>{
        if (err)throw err; //not connected!
        console.log (`connection as ID `+ connection.threadId)


          // User the connection
    connection.query('SELECT * FROM voip WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
          res.render('edituser', { rows });
        } else {
          console.log(err);
        }
        console.log('The data from user table: \n', rows);
      });
        
    
    })

    
  

}

// update user by admin

exports.edituserconfirme=(req,res)=>{
    const{name,email,number,message}=req.body
    // connextion to database
    pool.getConnection((err,connection)=>{
        if (err)throw err; //not connected!
        console.log (`connection as ID `+ connection.threadId)
    
        // user the connection
        connection.query('UPDATE voip SET name=?,email=?,number=?,message=? WHERE id=?',[name,email,number,message,req.params.id],(err,rows)=>{
            // when done with connection ,release it
                connection.release()
            
                if (!err){
                    res.render('edituser',{ rows })
                }else{
                    console.log(err);
                }
                // to see the data in your terminale
                
                console.log("the data from voip user table: \n",rows);
            })
    })

}
