const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body")

buttons.forEach(
    function(button){
        button.addEventListener(
            'click' , function (e) {
                if (e.target.id === 'white') {
                    body.style.background = e.target.id
                }
                if (e.target.id === 'yellow'){
                    body.style.background = e.target.id
                }
                if (e.target.id === 'blue'){
                    body.style.background = e.target.id
                }
                if (e.target.id === 'red'){
                    body.style.background = e.target.id
                }
                if (e.target.id === 'green'){
                    body.style.background = e.target.id
                }
            }
        )
    }
)