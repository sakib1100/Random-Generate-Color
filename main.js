window.onload = () => {
    main();
}


function main(){
    const root = document.querySelector('.Contaienr');
    const btn = document.querySelector('#handleButton');
    const inpVal = document.querySelector('#Selector');
    const copyBtn = document.querySelector('#copyBtn');
    const copyed = document.querySelector('#copyed');
    copyed.style.display = 'none';

    btn.addEventListener('click', function(){
        const genColor = genarateColor();
        root.style.backgroundColor = genColor;
        inpVal.value = genColor;
    })
    copyBtn.addEventListener('click',function(){
        navigator.clipboard.writeText(inpVal.value);
        copyed.style.display = 'block';
    setTimeout(function(){
        copyed.style.display = 'none';
    },2000)


    })
    
}  

function genarateColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}