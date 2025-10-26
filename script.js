(function () {
  //C 1_2.1
    var ex3_element = document.getElementById('ex3_element');
    ex3_element.setAttribute('draggable','true');
    var ex3_two = document.getElementById("ex3_two");
    ex3_two.addEventListener("dragover", (event) =>{
      event.preventDefault();
    })
    ex3_two.addEventListener("drop",(event)=>{
      event.preventDefault();
      ex3_two.appendChild(ex3_element);
      //ex3_element.draggable = false;    
    })
    //C 1_2.2
    var ex3_one = document.getElementById("ex3_one");
    ex3_one.addEventListener("dragover", (event) =>{
      event.preventDefault();
    })
    ex3_one.addEventListener("drop",(event)=>{
      event.preventDefault();
      ex3_one.appendChild(ex3_element);
    })
    //C 1_3
    var ex6_element = document.getElementById("ex6_element");
    var ex6_animate_button = document.getElementById("ex6_animate_button");
    var windowWidth = window.innerWidth;
    ex6_animate_button.addEventListener("click", ()=>{
      ex6_element.style.transition = "all 2s";
      ex6_element.style.transform = "translateX(" + (windowWidth - 128) + "px)";
      setTimeout(() => {
        ex6_element.style.transform = "translateX(0px)";
      }, 2000);
    });
    //C 1_4
    var ex4_button = document.getElementById("ex4_button");
    ex4_button.addEventListener("click", ()=>{
      document.body.style.backgroundColor = getRandomColor();
    });
    //C 1_5
    var ex2_text = document.getElementById("ex2_text");
    var ex2_content = document.getElementById("ex2_content");
    ex2_text.addEventListener("input", ()=>{
      var length = ex2_text.value.length;
      ex2_content.textContent = "Wpisano " + length + " znaków";
    });
})();
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }