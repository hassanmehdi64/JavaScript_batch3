const sayDate = function(uname){
    console.log(`Hello there ${uname}`, Date.now());
    //  console.log(uname,  Date.now());
     }
 

// setInterval(sayDate, 1000, 'Ajmal')  


  // const inerval = setInterval(sayDate, 1000)  
 


//for clear time ineterval 

  // const inerval = setInterval(sayDate, 1000, 'Ajmal')

  // clearInterval(inerval)
  



  //=========== handle set time interval using strt btn ===========

  const starTI = document.querySelector('#start')

  starTI.addEventListener('click', function(){
      
    clearIN =   setInterval(sayDate, 1000, 'Ajmal')

 })
 


  //=========== handle clear time interval using stop btn =======

  const clearTI = document.querySelector('#stop')
  clearTI.addEventListener('click', function(){
      
      clearInterval(clearIN)

 })
 
 