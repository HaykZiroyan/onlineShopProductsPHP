<?php
    include "main.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>online shop</title>
    <link rel="icon" href="images/download.png">
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div id = "card" class="card-container">

    </div>
    <button id = "kar" class="karzina marginTop scrollKar" onclick="newBox()">
        <img src="images/basket.png" alt="">
        <div id="New" class="num">
            <p>0</p>
        </div>
    </button>
    
    <div id = "para-1" class="none">
        <div class="closeLine" onclick="closeBox()">
            <img src="images/close-button-icon-9.png" class="close">
        </div>
        
        <br> 
         <div class="row">
            <div class="type">ապրանք</div>
            <div class="value">գին</div>
            <div class="number">քանակ</div>
            <div class="all">ընդամենը</div>
         </div>       
        
        
        <ul id="ul">

        </ul>
        <div id="obshi">
            <div class="gumar">ընդամենը</div>
            <div id="obshi1"></div>
        </div>
               
    </div>
    
    
    <!-- <script src="main.js"></script> -->
    
</body>
</html>