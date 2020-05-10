const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


  


var para2 = document.createElement("p")

var para = document.createElement("p")
para.innerText = "Hey I'm Red"
document.getElementById("container").appendChild(para)

var head3 = document.createElement("h3") 
head3.innerText = "I'm a blue h3"
document.getElementById("container").appendChild(head3)

var Mydiv = document.createElement("div")

var head1 = document.createElement("h1")
Mydiv.appendChild(head1)
head1.innerText = "Im in a Div"

document.getElementById("container").appendChild(Mydiv)
Mydiv.style.backgroundColor = "pink"
Mydiv.style.borderColor = "black"



