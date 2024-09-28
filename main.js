const button = document.querySelector(".button");
button.onclick = function(){
    const inputValue = document.querySelector(".input_text").value;
    let result = `
        <li>
            <input type="checkbox" class="checkbox">
            <span class="span">${inputValue}</span>
        </li>
    `

    // document.querySelector(".ToDo_List_item").innerHTML += result;
    document.querySelector(".ToDo_List_item").insertAdjacentHTML('beforeend', result);
    const checkboxs = document.querySelectorAll(".checkbox");
    const spans = document.querySelectorAll(".span")

    const lastCheckbox = checkboxs[checkboxs.length - 1];
    const lastSpan = spans[spans.length - 1];


    lastCheckbox.onclick = function() {
        if (lastCheckbox.checked) {
            lastSpan.classList.add('completed');
        } else {
            lastSpan.classList.remove('completed');
        }
    };

};