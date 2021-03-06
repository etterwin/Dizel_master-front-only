# Дизель МАСТЕР (только фронт)
**Ленд для компании по ремонту и обслуживанию в Поволжье (г. Нижний Новгород)**

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

~~Это должно было стать тестовым заданием, но не вышло.~~

**Несложный ленд, наделенный следующими особенностями:**
1. Три формы обратной связи, а именно: имя+телефон, название детали+телефон, вопрос+телефон.
2. Постоянно спамящий попап, куда бы вы не ткнули, например, на всплывающее меню авто. Попап предлагает связаться с диллером (не реализовано).
3. В футере интерактивная Яндекс карта, что мне кажется очень не юзабельным.
4. В меру анимации (мигание фар при наведении на машину, анимация прогресса от сломанной машины к починенной).
5. Каруселька для десктопных устройств, разбитая на 10 элементов, где в десятом выводится объект элемента (с 1 по 9), на который вы кликнули.
6. Прокрутка до карты и первой формы на ленде.

Так как уже есть версия, которая создана при помощи Django App, то тут только его статика, переписанная для того, чтобы отдать фронт заказчику.

Что тут есть? Почти ничего интересного: **Vue.js**, **jQuery**, **SASS(scss)**. Прокрутка реализована при помощи **jQuery**, карусель - **Vue.js**, стили и элементы анимации - **SASS(scss)**.

**Что нужно было реализовать, но я не сделала этого:**
1. Создание **"мульти"-ленда** через **utm-метки**.
<br/>*Дана таблица, содержащая  6 колонок, каждая содержит пару "ключ-значение". Необходимо брать данные "ключа" для метки и выводить его "значение" в объекте на странице, а именно изменять текст в трех местах на ленде.*
2. Отправка форм на email представителя компании.
3. Доделанный адаптив. 
<br/>*Пункт не готов по причине отсутсвия необходимых мне ассетов и текста для наполнения. Ленд содержит очень много абсолютных объектов.*

<hr/>

Ленд оснащен комментариями, чтобы дизайнер, который будет доделывать фронт смог не потеряться в нем, а уж особенно не навредить ему. Я постаралась сделать так, чтобы ему по-минимуму приходилось вносить правки, например, поменять те же картинки в коде: нужно лишь заменить в нужной папке картинки и заменить названия на порядковые номера от 1 до 9 и обязательно в формате PNG.

Я не согласна кодить на PHP для тестового и уж тем более проекта, который отправится в продакшн ~~а мне так и не заплатят~~.
