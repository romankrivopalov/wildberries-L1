# **wildberries-L1**
> Задание L1

### **Как делать задания**
***
* В заданиях никаких устных решений — только код. Одно решение — один файл с хорошо откомментированным кодом.
* Никаких сторонних библиотек и фреймворков, если только это специально не оговорено заданием. Только JavaScript.
* Разрешается и приветствуется использование любых справочных ресурсов, привлечение сторонних экспертов и т.д. и т.п.

### **Задания**
***
> :white_check_mark: [Задание №1](https://github.com/romankrivopalov/wildberries-L1/tree/main/01). Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

> :white_check_mark: [Задание №2](https://github.com/romankrivopalov/wildberries-L1/tree/main/02). Задача о странных числах: Напишите функцию, которая принимает число и возвращает `true`, если это число является странным, и `false` в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.

> :white_square_button: Задание №3. Реализовать аналог библиотеки `Math` (можно назвать MathX) с базовым набором функций, используя замыкания:
> * вычисление N-го числа в ряду Фибоначчи
> * вычисление всех чисел в ряду Фибоначчи до числа N
> * вычисление N-го просто числа
> * вычисление всех простых чисел до числа N
>
> > Будет плюсом, если задумаетесь и об оптимизации.

> :white_check_mark: [Задание №4](https://github.com/romankrivopalov/wildberries-L1/tree/main/04). Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
> * 112 сообщения
> * 12 сообщений
> * 1 сообщение
> * 1024 пользователя
> * 1026 пользователей
> * 121 пользователь
>
>  >  Функцию надо упаковать в модуль.

> :white_square_button: Задание №5. Разработайте функцию преобразования `JSON` в связный список. На входе функция должна получать `JSON`, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

> :white_check_mark: [Задание №6](https://github.com/romankrivopalov/wildberries-L1/tree/main/06). Задача о сортировке объектов: у вас есть массив объектов вида `{ name: 'John', age: 25 }`. Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.

> :white_square_button: Задание №7. Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
Другими словами, нужно выполнить следующие шаги:
Вызвать первую функцию из массива.
После завершения работы первой функции вызвать вторую функцию.
После завершения работы второй функции вызвать третью функцию.
И так далее, пока все функции в массиве не будут вызваны по порядку.

> :white_square_button: Задание №8. Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.

> :white_square_button: Задание №9. Реализовать функцию конвертации `JSON` в строку

> :white_square_button: Задание №10. Реализовать функцию конвертации строки в `JSON` со всеми необходимыми проверками и валидациями.

> :white_square_button: Задание №11. Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию. Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, даже после того, как внешняя функция завершила свое выполнение.

> :white_check_mark: [Задание №12](https://github.com/romankrivopalov/wildberries-L1/tree/main/12). Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.

> :white_square_button: Задание №13. Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.

> :white_square_button: Задание №14. Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, который разрешается с данными об изображении, когда оно загружено. Когда говорится "промис разрешается с данными об изображении", это означает, что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.

> :white_square_button: Задание №15. Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.

> :white_square_button: Задание №16. Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. Внутри модуля используйте внешнюю библиотеку `Moment.js` для удобной работы с датами.

> :white_square_button: Задание №17. Необходимо реализовать простое поле ввода адреса с функцией геокодинга: пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.
>
>  >  Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.

> :white_square_button: Задание №18. Подсчитать максимальный объем данных, который можно записать в `localStorage` вашего браузера.

> :white_square_button: Задание №19. Реализовать виджет, отображающий список постов из любого паблика в VK (подойдет любой паблик, где постов очень много). Например, с помощью этой [функции API VK](https://dev.vk.com/ru/method/wall.get). Виджет должен иметь фиксированные размеры и возможность прокрутки. При прокрутке содержимого виджета до конца должны подгружаться новые посты. Необходимо реализовать возможность кэширования уже загруженных данных: если пользователь закрыл страницу, а потом снова открыл ее, виджет должен отображать все загруженные ранее данные (новые данные должны подгружаться из учетом уже загруженных ранее).
>
>  >  При переполнении `localStorage`, данные, загруженные последними должны вытеснять данные загруженные первыми.

> :white_square_button: Задание №20. Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи. При изменении данных в localStorage в консоль должен выводиться объем занятой памяти / максимальный размер хранилища.

> :white_square_button: Задание №21. Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

> :white_square_button: Задание №22. Посчитайте сколько раз можно вызвать функцию `document.write()` внутри `document.write()`. Объясните результат.

> :white_square_button: Задание №23. Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. Необходимо анализировать длину пароля, использование различных символов, наличие чисел и букв в разных регистрах. Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

> :white_square_button: Задание №24. Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого [источника](http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true).

>  >  ##### Требования:
>  >  * данные должны загружаться при загрузке страницы
>  >  * необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
>  >  * необходимо реализовать клиентскую пагинацию (50 элементов на странице)

> :white_check_mark: [Задание №25](https://github.com/romankrivopalov/wildberries-L1/tree/main/25). Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, добавляет его в DOM и устанавливает для него стиль с помощью CSS.

> :white_square_button: Задание №26. Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).

> :white_check_mark: [Задание №27](https://github.com/romankrivopalov/wildberries-L1/tree/main/27). Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, например, плавное изменение его положения или размера.

> :white_check_mark: [Задание №28](https://github.com/romankrivopalov/wildberries-L1/tree/main/28). Создать и добавить элемент с использованием шаблонов: Напишите функцию, которая создает новый элемент с использованием шаблонов (например, с помощью тега `template`) и добавляет его в DOM.

> :white_check_mark: [Задание №29](https://github.com/romankrivopalov/wildberries-L1/tree/main/29). Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и выполняет определенные действия с этими данными, например, отправляет их на сервер или отображает всплывающее окно с результатами.
