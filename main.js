function click(index) {
    console.log(index);
}

for (let i = 0; i < 5; i++){
    let block = document.createElement('button');
    block.innerText = `Кнопка ${i}`;

    block.addEventListener('click', function () {
        click(i);
    });

    document.body.appendChild(block);
}