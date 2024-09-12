# avito
## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build` - Сборка в проекта режиме, который указан в .env
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка storybook билда

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для компонентов описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

----

## Конфигурация проекта

Для разработки проекта содержится webpack конфиг:
- Webpack - ./config/build

Вся конфигурация хранится в /config
- /config/build - конфигурация webpack
- /config/storybook - конфигурация сторибука

Для стилей описаны переменные, которые заданы в ./app/styles/variables

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл и сократить его размер) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Сущности (entities)

- [AdvertisementDetails](/src/entities/AdvertisementDetails)
- [AdvertisementsList](/src/entities/AdvertisementsList)
- [NotificationsList](/src/entities/NotificationsList)
- [OrdersList](/src/entities/OrdersList)

Сущности используются для хранения данных в Redux (slice), запросов (services) и ui компонентов.

## Фичи (features)

- [CompleteOrder](/src/features/CompleteOrder)
- [CreateAdvertisement](/src/features/CreateAdvertisement)
- [EditAdvertisement](/src/features/EditAdvertisement)

Фичи определяют основные бизнес-процессы в приложении.
