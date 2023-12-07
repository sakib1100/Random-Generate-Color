window.onload = () => {
    main();
}


function main(){
    const root = document.querySelector('.Contaienr');
    const btn = document.querySelector('#handleButton');
    btn.addEventListener('click', function(){
        const genColor = genarateColor();
        root.style.backgroundColor = genColor;
    })
}

function genarateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgba(${red}, ${green}, ${blue})`
}