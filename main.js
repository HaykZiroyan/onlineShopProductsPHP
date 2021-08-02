var cardInfo = jArray;
    console.log(cardInfo);
    for (i in cardInfo) {
        
        for (j in cardInfo[i]) {
            console.log(cardInfo[i][j])
        }
    }
 
var num = 0;
var k = 0;
var obshi = 0;
function getNum() {
    var tag = document.createElement("p");
    var text = document.createTextNode(num);
    tag.classList.add("number");
    tag.setAttribute("id", text)
    tag.appendChild(text);
    var element = document.getElementById("New");
    
        element.innerHTML = "";
        element.appendChild(tag);  
}

function popox() {
    let addobshi = document.createElement('p');
    addobshi.textContent = obshi;
    document.getElementById('obshi1').innerHTML = "";
    document.getElementById('obshi1').appendChild(addobshi);
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    for (i in cardInfo) {
        let middiv = document.createElement('div');
        middiv.classList.add('cont');
    
        console.log(document);
        console.log(document.getElementById('card'));
        console.log(document.getElementById('kar'));
        
    
        document.getElementById('card').appendChild(middiv);
        for (j in cardInfo[i]) {
            let inpnum = 1;
            let carddiv = document.createElement('div');
            carddiv.classList.add('card');
            middiv.appendChild(carddiv);
            
            var img1 = document.createElement("img");
            img1.src = cardInfo[i][j].image;
            carddiv.append(img1);
    
            h2 = document.createElement("h3");
            h2.textContent =cardInfo[i][j].name;
            carddiv.append(h2);
    
            let text = document.createTextNode(cardInfo[i][j].info);
            carddiv.append(text);
    
            let value = document.createElement("h2");
            value.textContent = cardInfo[i][j].price + "դր";
            value.classList.add('price');
            carddiv.appendChild(value);
    
            let min = document.createElement("button");
            min.innerHTML = "-"
            min.classList.add("plus-min");
            min.onclick = function() {
                inpnum = inpnum - 1;
                input.value = inpnum;
            }
            carddiv.append(min);
    
            let input = document.createElement("input");
            input.value = inpnum;
            carddiv.append(input);
            
    
            let plus = document.createElement("button");
            plus.innerHTML = "+"
            plus.classList.add("plus-min");
            plus.onclick = function() {
                inpnum = inpnum + 1;
                input.value = inpnum;
            }
            carddiv.append(plus);
    
            let member = [i, j];
            let btn = document.createElement("button");
            btn.innerHTML = "add to busket";
            btn.classList.add("set-busket");
    
            btn.onclick = function() {
                num = num + 1; 
                getNum();
                
                let ul = document.getElementById('ul')
                var li=document.createElement('li');
                ul.appendChild(li);
    
                let pic = document.createElement('img');
                pic.src = cardInfo[member[0]][member[1]].image;
                pic.classList.add('pic')
                li.appendChild(pic);
    
                let name = document.createElement("p");
                name.classList.add('name');
                name.textContent =cardInfo[member[0]][member[1]].name;
                li.appendChild(name);
    
                let gin = document.createElement("p");
                gin.classList.add("gin")
                gin.textContent =cardInfo[member[0]][member[1]].price;
                li.appendChild(gin);
    
                let qan = document.createElement("p");
                qan.classList.add("qan");
                qan.textContent = inpnum;
                li.appendChild(qan);
    
                let yndh = document.createElement("p");
                yndh.classList.add("last");
                yndh.textContent = inpnum*cardInfo[member[0]][member[1]].price;
                li.appendChild(yndh);
    
                let remove = document.createElement("button");
                remove.innerHTML =  "remove";
                remove.onclick = function() {
                    let change = this.parentNode.childNodes[4].innerHTML;
                    obshi = obshi - change;
                    popox();
                    li.remove();
                    num = num - 1;
                    getNum();
                }
                li.append(remove);
    
                obshi = obshi + inpnum*cardInfo[member[0]][member[1]].price;
                popox();
                
            } //input-ից թիվ ստանալ
            carddiv.append(btn);
            
        }
    }    
  });


setTimeout(function(){

   
}, 
  50);



var a = 1
function newBox() {
    let el = document.getElementById('para-1');
    let remScroll = document.getElementById('kar');
    if (a == 1) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        remScroll.classList.remove('scrollKar');
        el.classList.remove('none');
        el.classList.add('buy');
        a = a + 1;
    } else {
        remScroll.classList.add('scrollKar');
        el.classList.remove('buy');
        el.classList.add('none');
        a = a - 1;
    }
}
function closeBox() {
    let el = document.getElementById('para-1');
    document.getElementById('kar').classList.add('scrollKar');
    el.classList.remove('buy');
    el.classList.add('none');
    a = a - 1;
}
