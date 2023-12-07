window.onload = () => {
    main();
}


function main(){
    const root = document.querySelector('.Contaienr');
    const btn = document.querySelector('#handleButton');
    const inpVal = document.querySelector('#Selector');
    btn.addEventListener('click', function(){
        const genColor = genarateColor();
        root.style.backgroundColor = genColor;
        inpVal.value = genColor;
    })
}

function genarateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}