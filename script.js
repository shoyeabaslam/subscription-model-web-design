let resizeCounter1 = 0;
let resizeCounter2 = 0;
function scroll_buttons_for_window() {
   for(let i = 1;i<=2;i++){
        const node = document.createElement("input");
        node.type = "radio";
        node.value = i;
        if(i === 1){
            node.checked = true
        }
        node.name = "scroll"
        document.getElementById("scroll-buttons").appendChild(node);
   }
   resizeCounter1++;
}
function scroll_buttons_for_mobile() {
   for(let i = 1;i<=4;i++){
        const node = document.createElement("input");
        node.type = "radio";
        node.value = i;
        if(i === 1){
            node.checked = true
        }
        node.name = "scroll"
        document.getElementById("scroll-buttons").appendChild(node);
   }
   resizeCounter1++;
}


function scroll_button_event_listener_window(){
    const radioButtons = document.querySelectorAll('#scroll-buttons input[type="radio"]');
    const wrapper = document.querySelector(".wrapper");
    radioButtons.forEach((radioButton) =>{
        radioButton.addEventListener("change",(event)=>{
            if (event.target.value === "1") {
                // Add the code for changes when value is equal to "1"
                wrapper.style.transform = "translateY(0)";
                // Add more changes or logic as needed
            } else {
                wrapper.style.transform = "translateY(-52%)";
            }
        })
    });
}

function scroll_button_event_listener_mobile(){
    const radioButtons = document.querySelectorAll('#scroll-buttons input[type="radio"]');
    const wrapper = document.querySelector(".wrapper");
    radioButtons.forEach((radioButton) =>{
        radioButton.addEventListener("change",(event)=>{
            switch(event.target.value){
                case "1": wrapper.style.transform = "translateY(0%)";break;
                case "2":  wrapper.style.transform = "translateY(calc(-25% - 20px))";break;
                case "3":  wrapper.style.transform = "translateY(calc(-50% - 20px))";break;
                case "4":  wrapper.style.transform = "translateY(calc(-76% - 20px))";break;
            }
        })
    });
}


function remove_child_node(){
    const scrollButtons = document.getElementById("scroll-buttons");
    while(scrollButtons.firstChild){
        scrollButtons.removeChild(scrollButtons.firstChild)
    }
}


function handleResize() {
    const currWidth = window.innerWidth;
    const wrapper = document.querySelector(".wrapper");

    if (currWidth > 780 && currWidth <= 1250 && resizeCounter1 === 0) {
        wrapper.style.transform = "translateY(0%)"
        remove_child_node();
        scroll_buttons_for_window();
        scroll_button_event_listener_window();
    }

    else if(currWidth <= 780 && resizeCounter2 === 0){
        wrapper.style.transform = "translateY(0%)"
        remove_child_node();
        scroll_buttons_for_mobile();
        scroll_button_event_listener_mobile();
        resizeCounter1 = 0
    }

    if(currWidth > 1250){
       wrapper.style.transform = "translateY(0%)"
       remove_child_node()
       resizeCounter1 = 0;
    }
}

window.addEventListener("resize", handleResize);
