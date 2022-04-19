const btns = document.querySelectorAll('button'),// Получаем все имеющиеся кнопки
        wrapper = document.querySelector('.btn-block');
//console.log(btns[0].classList.length)// В консоли мы получим окличество классов элемента
/*length покажет нам,какие ещё есть классы у элемента*/

//console.log(btns[0].classList.item(0))// в консоли получим класс blue

// console.log(btns[1].classList.add('red'));//Второй кнопке мы задали класс red и окрасили в красный

//console.log(btns[0].classList.remove('blue')); //У этого же элемента мы удаляем класс blue

//console.log(btns[0].classList.toggle('blue')); //Если указанный класс есть на элементе, то он будет убран, а если его нет-добавлен

// if(btns[1].classList.contains('red')){
//     console.log('red')
// }

/*Мы обращаемся к первой кнопке*/

btns[0].addEventListener('click', ()=> {
//     /*Если у второй кнопки нет класса red, то мы ее будем добавлять*/
// if(!btns[1].classList.contains('red')){
//     btns[1].classList.add('red')
// } else { /*если класс есть, мы его убираем*/
//     btns[1].classList.remove('red')}
    /*Пример с использованием toggle*/
btns[1].classList.toggle('red');
    /*в сложных скриптах toggle не всегда удается использовать.*/

});


<!--Делегирование событий -->

/*Назначаем обработчик событий на wrapper*/

// wrapper.addEventListener('click', (event)=> { // Событие будет на клик, и в коллбэк функцию нам нужжно передать элемент события
// if(event.target && event.target.tagName=="BUTTON") { //Мы проверяем, можно ли этот элемент кликнуть
// console.log('Hello');
// }


// wrapper.addEventListener('click', (event)=> { // Событие будет на клик, и в коллбэк функцию нам нужжно передать элемент события
//     if(event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');// Если мы кликаем на кнопку, у которой есть класс blue, в консоль будет выводиться Hello
//     }


/*Таким образом мы можем добавить много кнопок и все они будут выполнять нужные действия*/

// wrapper.addEventListener('click', (event)=> { // Событие будет на клик, и в коллбэк функцию нам нужжно передать элемент события
//     if (event.target && event.target.tagName == "BUTTON") { //Мы проверяем, можно ли этот элемент кликнуть
//         console.log('Hello');
//     }
// });
//
// const btn = document.createElement('button');
// btn.classList.add('red');// Добавляем класс, который позволит нам увидеть элемент
// wrapper.append(btn);// append позволяет поместить нам кнопку btn поместить в wrapper


<!--Ещё мы можем проверять на определённые совпадения -->