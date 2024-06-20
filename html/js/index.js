 
function run()
{
    setTimeout(play,2500);
    function play()
    {
        document.getElementById('firstlogo').style.display="none";
        document.getElementById('logo').style.display="block";

    }
const product=[{
    product_img: "img/614dUeZq7fL._AC_UL480_FMwebp_QL65_.webp",
    p_rate: 678,
    p_ratting:4.8,
    p_brand:"Olay",
      button:""
},
{
    product_img: "img/r7.jpg",
    p_rate: 2000,
    p_ratting:3.2,
    p_brand:"beauty",
    button:""

},
{
    product_img: "img/r8.jpg",
    p_rate: 120,
    p_ratting:4.2,
    p_brand:"Dove",
    button:""
},
{
    product_img: "img/r5.jpg",
    p_rate: 567,
    p_ratting:3.2,
    
    p_brand:"Toner",
    button:""
},
{
    product_img: "img/r1.jpg",
    p_rate: 8000,
    p_ratting:3.8,
    p_brand:"titan",
    button:""
},

{
    product_img: "img/b7.jpg",
    p_rate: 900,
    p_ratting:4.6,
   
    p_brand:"Zara",
    button:""
},
{
    product_img: "img/f7.jpg",
    p_rate: 1500,
    p_ratting:4.1,
    p_brand:"SB",
    button:""
},
{
    product_img: "img/ola2.jpg",
    p_rate: 432,
    p_ratting:3.2,
    p_brand:"polo",
    button:""
},

]
document.getElementById('showcard').innerHTML=product.map(e =>(  `   <div class="card">
<div>
  <img src="${e.product_img}" alt="">
</div>

<div class="card1">
  <div>${e.p_rate}Rs.&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
   
    
    </div>
     <div>${e.p_ratting}rating****</div>

     <div>&nbsp;${e.p_brand} Brand </div><br>
     <div><button id="buy"><a href="buy.html">${e.button}Buy Now</a></button></div>
   

    </div>
</div>
`))
console.log(product)
}

      function Store(){
       


            let link1  = `   <div id="showmega">
            <ul>
                <li><a href="#">shop</a></li>
                <li><a href="#"><h1>Shop the Latest</h1></a></li>
                <li><a href="#"><h1>Beauty</h1></a></li>
                <li><a href="#"><h1>Brand</h1></a></li>
                <li><a href="#"><h1>beauty prodect</h1></a></li>
                <li><a href="#"><h1>Apple Watch</h1></a></li>
                <li><a href="#"><h1>Accessories</h1></a></li>
        
               
            </ul>
            <ul >
                <li><a href="#">Quick Links</a></li>
                <li><a href="#"><h4>Find a store</h4></a></li>
                <li><a href="#"><h4>Order Status</h4></a></li>
                <li><a href="#"><h4>Way to buy</h4></a></li>
                <li><a href="#"><h4>University Student Offer</h4></a></li>
               
            </ul>
            <ul>
                <li><a href="#">Shop special store</a></li>
                <li><a href="#"><h4>Education</h4></a></li>
                <li><a href="#"><h4>Business</h4></a></li>
            
            </ul>
            </div>      
     `;
            document.getElementById('finaloutput1').innerHTML= link1;
         }
         
         function hiddennav1(){
             document.getElementById('finaloutput1').innerHTML="";
         }
         function hidetop()
         {
             let clienth=window.event.clientY;
             if(clienth<20)
             {
                 document.getElementById('finaloutput1').innerHTML="";  
             }
         }
         function mac1(){
            let link2=`<div id="ipad">
            <ul>
                <li><a href="#">Explore Mac</a></li>
                <li><a href="#"><h1>Explore All Mac</h1></a></li>
                <li><a href="#"><h1>MacBook Air</h1></a></li>  
                <li><a href="#"><h1>MacBook pro</h1></a></li>
                
                <li><a href="#"><h1>iMac</h1></a></li>
                <li><a href="#"><h1>Mac mini</h1></a></li>
                <li><a href="#"><h1>Mac studio</h1></a></li>
              
               
            
                <li><a href="#">Mac</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">ipad</a></li>
                <li><a href="#">Phone</a></li>
                <li><a href="#">Vision</a></li>
              
               
            </ul>
            </div> `;
            document.getElementById('finaloutput1').innerHTML= link2;
         }
         function ipad1(){
            let link3=`        <div id="mac">
            <ul>
            <li><a href="#">Explore ipad</a></li>
            <li><a href="#"><h1>Explore All ipad</h1></a></li>
            <li><a href="#"><h1>ipad pro</h1></a></li>
            <li><a href="#"><h1>ipad Air</h1></a></li>
            <li><a href="#"><h1>iPad mini</h1></a></li>
            <li><a href="#"><h1>Apple Pencil</h1></a></li>
            <li><a href="#"><h1>Keyboard</h1></a></li>
            <li><a href="#">compare iPad</a></li>
            <li><a href="#">Why iPad</a></li>
            </ul>
         
            <ul>
            <li><a href="#">More from iPad</a></li>
            <li><a href="#"><h4>iPad Support</h4></a></li>
            <li><a href="#"><h4>iPadOS 17</h4></a></li>
            <li><a href="#"><h4>iCloud+</h4></a></li>
            <li><a href="#"><h4>Applecare +</h4></a></li>
            <li><a href="#"><h4> Logic iPad</h4></a></li>
            <li><a href="#"><h4>Education</h4></a></li>
          
               
            </ul>
            </div> ; `;
            document.getElementById('finaloutput1').innerHTML= link3;
         }
        
         function phone1(){
            let link4=`   <div id="phone">
            <ul>
        
            <li><a href="#"><h1>Shop the Latest</h1></a></li>
            <li><a href="#"><h1>Mac</h1></a></li>
            <li><a href="#"><h1>ipad</h1></a></li>
            <li><a href="#"><h1>iphone</h1></a></li>
            <li><a href="#"><h1>Apple Watch</h1></a></li>
            <li><a href="#"><h1>Accessories</h1></a></li>
            </ul>
            
        
            <ul>
            <li><a href="#">shop iPad</a></li>
            <li><a href="#"><h4>Shop iPad</h4></a></li>
            <li><a href="#"><h4>iPad Accessories</h4></a></li>
            <li><a href="#"><h4>Ways to Buy</h4></a></li>
            <li><a href="#"><h4>Accessibility</h4></a></li>
               
            </ul>
            </div> `;
            document.getElementById('finaloutput1').innerHTML= link4;
         }
         function vision1(){
            let link5=`<div id="vn">
            <ul>
            <li><a href="#">Explore Support</a></li>
            <li><a href="#"><h1>iphone</h1></a></li>
            <li><a href="#"><h1>Mac</h1></a></li>
            <li><a href="#"><h1>ipad</h1></a></li>
            <li><a href="#"><h1>Watch</h1></a></li>
            <li><a href="#"><h1>AirPods</h1></a></li>
            <li><a href="#"><h1>Music</h1></a></li>
            <li><a href="#"><h1>TV</h1></a></li>
            <li><a href="#">Explore Support</a></li>
               
            </ul>
        
        
            </div> `;
            document.getElementById('finaloutput1').innerHTML= link5;
         }
         function watch1(){
            let link6=`   <div id="wth">
            <ul>
            <li><a href="#"><h1>ipad Air</h1></a></li>
            <li><a href="#"><h1>iPad mini</h1></a></li>
            <li><a href="#"><h1>Apple Pencil</h1></a></li>
            <li><a href="#"><h1>Keyboard</h1></a></li>
            <li><a href="#">compare iPad</a></li>
            <li><a href="#">Why iPad</a></li>
            </ul>
     
            <ul>
           
            <li><a href="#">Get Help</a></li>
            <li><a href="#"><h4>Community</h4></a></li>
            <li><a href="#"><h4> Check Coverage</h4></a></li>
            <li><a href="#"><h4>Repaid</h4></a></li>
            <li><a href="#"><h4>Contact us</a></li>
        
            </ul>
            
            </div> `;
            document.getElementById('finaloutput1').innerHTML= link6;
         }
         
         function teli1(){
            let link7=`   <div id="teli">
            <ul>
            <li><a href="#">shop</a></li>
            <li><a href="#"><h1>Shop the Latest</h1></a></li>
            <li><a href="#"><h1>Mac</h1></a></li>
            <li><a href="#"><h1>ipad</h1></a></li>
            <li><a href="#"><h1>iphone</h1></a></li>
            <li><a href="#"><h1>Apple Watch</h1></a></li>
            <li><a href="#"><h1>Accessories</h1></a></li>
               
            </ul>
    
        
            </div> `;
            document.getElementById('finaloutput1').innerHTML= link7;

         }
         function log(){
       


      
            let link1  = `   <div id="signin">
            <button style="width: 250px; height:35px; background-color: rgb(207, 154, 22); border-radius: 10px; margin-top:17px; "><a href="./sing.html"> Signin</a></button>

 <br><br>
  <ul>
      <li><a href="#"><h1>Your list</h1></a></li>
      <li><a href="#">create list</a></li>
      <li><a href="#">find a list</a></li>


     
  </ul>
  <ul >
      <li><a href="#"><h2>yourAccout</h2> </a></li>
      <li><a href="#">acoount</a></li>
      <li><a href="#">Order </a></li>
      <li><a href="#">watching list</a></li>
      <li><a href="#">contact& delivery</a></li>
              
     `;
            document.getElementById('finaloutput1').innerHTML= link1;
         }
  
