# Project MODUSversus

1. [Структура проекта](#Структура-проекта)
2. [EJS](#ejs)

Команды
1. GIT
2. NPM

## Структура проекта 

Каталог:
```
├─ public/
|  ├─ index.html
|  └─ css/
|     └─ style.css
|      
└─ src/
   ├─ index.ejs
   ├─ variables.scss
   ├─ style.scss
   └─ components/
      ├─ <название компонента 1>/
      |  ├─ <название компонента 1>.ejs
      |  └─ <название компонента 1>.scss
      |
      ├─ <название компонента 2>/
      |  ├─ <название компонента 2>.ejs
      |  └─ <название компонента 2>.scss
      ...
```
1. В каталоге ```public/``` храняться скомпилированные файлы **.html** и **.css**. Мы их вручную не редактируем.
2. В каталоге ```src/``` хранятся файлы **.ejs** и **.scss**, в которых мы верстаем. После сохранения любого файла из текущего каталога запускается компилятор, который собирает все файлы и переводит их в понятный html и css в папке ```public/``` 
3. Файл **index.ejs** - это стартовый шаблон страницы, в который надо подключать все компоненты!
4. В каталоге ```components/``` храняться подкаталоги с компонентами. _Название папки, самого шаблона ejs и стилей scss для этого компонента, должны быть одинаковым._
5. После того, как создали файл стилей для своего компонента, импортируйте его в конец файла ```src/style.scss```. 
> ```@import 'components/<название компонента>/<название компонента>'```, можно без уточнения расширения .scss.


## EJS
EJS - шаблонизатор, который позволяет писать js код прямо в html и выполнять его сразу с DOM элементами. Еще позволяет выносить отдельные компоненты в другие файлы и подключать их на разных страницах. 

**Пример:**

ejs:
```javascript
<%
const emails = ['123@gmail.com','456@gmail.com','789@gmail.com','101@gmail.com'];
%>
<ul>
    <% for (var i = 0; i < emails.length; i++) {%>
        <li>{%= emails[i] %}</li>
    <% } %>
</ul>
```
рендерится в такой html:
```html
<ul>
    <li>123@gmail.com</li>
    <li>456@gmail.com</li>
    <li>789@gmail.com</li>
    <li>101@gmail.com</li>
</ul>
```
_______________________________________

1. Возможность писать js в html есть только в файлах с расширением .ejs
2. Код вставляется в тег ```<% ... %>``` и т.д., об это дальше.

Синтаксис:
- ```<% ... %>```  Тег, позволяет испольнять js код, ничего не выводит.
- ```<%=``` Используется, если нужно вывести какие-то значения и переменные на страницу.
- ```<%-``` Используется, если нужно вывести в документе шаблон HTML из другого файла.

> Закрывающий тег ```%>``` везде одинаковый.

Для вставки на страницу какого-то компонента из папки ```components/``` нужно воспользоваться функцией ```include(PATH_TO_EJS);```, в аргументе написать путь к файлу .ejs без указания расширения .ejs.

Например, вставка компонента **header**, который находится в папке ```components/header/```:
```javascript

<body>

<%- include('components/header/header'); %>
<main> ... </main>
<footer> ... </footer>

</body>

```
Теперь, если поменять что-то внутри компонента **header**, он изменится на всех страницах на которых подключен функцией ```include()```.

> Для удобства, в файле **index.ejs** создана функция ```_COMP(COMPONENT_NAME)``` в которую можно написать название подключаемого компонента, она сама вернет нужный путь в функцию ```include()```. (COMP - сокращение от COMPONENT)
>
> Например компонент **header** можно подключить так ```<%- include(_DIR('header')); %>```

> P.S. Можете установить редкатор VS Code расширение, чтобы в .ejs файла подсвечивался синтаксис. По дефолту не подсвечивается)
> Одно из таких расширений – EJS language support –– https://github.com/Digitalbrainstem/ejs-grammar
