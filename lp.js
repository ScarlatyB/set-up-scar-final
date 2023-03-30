
var contact = document.querySelector('.contact')
var menu = document.querySelector('.content-navbar')
console.log(menu)
console.log(contact)


    const touchMouser = () =>{
    //icons
    document.getElementById("pop-window").style.opacity = 0;
    document.getElementById("pop-window").style.display = 'flex'; 

    document.getElementById("pop-lk").style.opacity = 0;
    document.getElementById("pop-lk").style.display = 'flex'; 
    
    document.getElementById("pop-insta").style.opacity = 0;
    document.getElementById("pop-insta").style.display = 'flex'; 

    
    
    
    setTimeout(()=>{
    document.getElementById("pop-window").style.opacity = 1;  
    document.getElementById("pop-window").style.display = 'flex'; 

    document.getElementById("pop-lk").style.opacity = 1;
    document.getElementById("pop-lk").style.display = 'flex'; 

    document.getElementById("pop-insta").style.opacity = 1;
    document.getElementById("pop-insta").style.display = 'flex'; 
    }
    ,1000)
}

const leaveWindow = () =>{
    setTimeout(()=>{
    document.getElementById("pop-window").style.opacity = 0;
    document.getElementById("pop-window").style.display = 'none'; 
    
    document.getElementById("pop-lk").style.opacity = 0;
    document.getElementById("pop-lk").style.display = 'none'; 

    document.getElementById("pop-insta").style.opacity = 0;
    document.getElementById("pop-insta").style.display = 'flex'; 

    }
    ,1000)

}



//menu Hamburger

 const  menuHamburger = () =>{
    

   document.querySelector('.content-navbar').style.opacity = 0;  
   document.querySelector('.content-navbar').style.display = 'flex'; 
    
   setTimeout(()=>{
   document.querySelector('.content-navbar').style.opacity = 0.9;  
   document.querySelector('.content-navbar').style.display = 'flex'; 
  }
,1000) 
}



//fechar menu Hamburger
const closeMenuHamburger = () =>{
    
    setTimeout(()=>{
        document.querySelector(".content-navbar").style.opacity = 0;
        document.querySelector('.content-navbar').style.display = 'none'; 
    }
    ,1000)



}

