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
      ex3_element.draggable = false;
    })
})();