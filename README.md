# Movies Explorer (фронтенд-часть)

Репозиторий для фронтенд-части приложения с интерфейсом на React

## Приложение Movies Explorer

Приложение Movies Explorer - сервис с поиском фильмов и сохранением их в личном кабинете. Учебный проект Яндекс.Практикум х BeatFilm.

Это дипломный проект Яндекс.Практикума по специальности "Веб-разработчик".

### Структура приложения

Полностью приложение состоит из двух частей:

1. [Movies Explorer (бэкенд-часть)](https://github.com/Foxylabstory/movies-explorer-api)
2. Movies Explorer (фронтенд-часть) ⬅ _этот репозиторий_

## Демо

На GitHub Pages: []()

## Макет в Figma

[Фигма](<https://www.figma.com/file/iugITBCFQn7QdIqLy4Bbj8/Diploma>)
[Обменник](https://disk.yandex.ru/d/MDXSRaZOMyN5FQ)

## Пул-реквест для сдачи работы

[github.com/Foxylabstory/movies-explorer-frontend/pull/1](https://github.com/Foxylabstory/movies-explorer-frontend/pull/2)

## Используемые API
- собственное API для регистрации/авторизации и хранения сохраненных фильмов: `https://api.foxylabstory.nomoredomains.sbs`
- публичное API для получения коллекции фильмов BeatFilm `https://api.nomoreparties.co/beatfilm-movies`

## Функциональность

- Адаптивная, семантическая верстка
- Лендинг с описанием работы, а также с информацией обо мне и ссылками на другие работы из портфолио
- Отдельная страница с приложением по поиску и сохранению фильмов
- Регистрация/авторизация пользователей
- Поиск фильмов по ключевому слову
- Постепенный вывод результатов поиска на экран при клике на копнку «Ещё»
- Сохранение/удаление фильмов из результов поиска
- Просмотр и удаление фильмов из сохраненных в личном кабинете
- Редактирование информации о пользователе
- Валидация форм перед отправкой на сервер
- Прелоадеры с анимацией во время запросов к серверу

## Стек технологий

- HTML5, CSS3, БЭМ
  - JSX
  - normalize.css
  - @media, @keyframes, transition
- React
  - Create React App
  - React Router 6
  - Валидация форм с помощью кастомных хуков
  - React Context
  - Защищенные роуты
- Работа с API: публичное и собственное
- Local Storage: хранение JWT-токена и параметров поиска

## Статус разработки

Плакал над версткой, теперь над функциональностью...


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

