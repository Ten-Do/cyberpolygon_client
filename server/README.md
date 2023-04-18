# WEB API


## `POST` Registration

### `http://localhost:3000/api/registration`
Необходимо передать 8 параметров в body:

|    Название     |                                  Описание                                  |
|:---------------:|:--------------------------------------------------------------------------:|
|    **email**    |                         рабочий email пользователя                         |
|  **nickname**   |                              никнейм на сайте                              |
|    **name**     |                               имя в паспорте                               |
|   **surname**   |                             фамилия в паспорте                             |
| **categories**  | перечесление категорий `{"admin":true, "stegano":true, "web":true}`-пример |
| **studentCard** |      фотография студенческого билета (в "png", "bmp", "jpeg", "jpg" )      |

### Ответы: 
| status  |          message          |
|:-------:|:-------------------------:|
| **200** | Добавление прошло успешно |
|         |                           |
| **400** |             1             |
|         |             2             |



## `POST` Authorization

### `http://localhost:3000/api/login`
Необходимо передать 2 параметра в body:

|   Название   |          Описание           |
|:------------:|:---------------------------:|
|  **email**   | рабочий email пользователя  |
| **password** |        пароль юзера         |

### Ответы:
| status  | message | json                                           |
|:-------:|:-------:|------------------------------------------------|
| **200** |         | _**"accessToken": "..." "userInfo": { ... }**_ |
|         |         |                                                |
| **400** |    1    |                                                |



## `POST` Activation

### `http://localhost:3000/api/activation`
Необходимо передать 3 параметра в body:

|  Название   |                 Описание                 |
|:-----------:|:----------------------------------------:|
|  **email**  |        рабочий email пользователя        |
| **solved**  |       true - активировать аккаунт        |
| **comment** | комментарий пользователю (необязательно) |

### Ответы:
| status  |             message              |
|:-------:|:--------------------------------:|
| **200** | Аккаунт пользователя активирован |
|         |     Удаление прошло успешно      |
|         |                                  |
| **400** |                5                 |
|         |                8                 |
|         |                11                |
|         |                                  |
| **404** |                2                 |



## `DELETE` Logout

### `http://localhost:3000/api/logout`
Необходимо передать cookies

### Ответы:
| status  |
|:-------:|
| **200** |



## `GET` Refresh

### `http://localhost:3000/api/refresh`
Необходимо передать cookies

### Ответы:
| status  | message | json                                           |
|:-------:|:-------:|------------------------------------------------|
| **200** |         | _**"accessToken": "..." "userInfo": { ... }**_ |
|         |         |                                                |
| **401** |    1    |                                                |



## `GET` Scoreboard

### `http://localhost:3000/api/scoreboard?category=...`
Необходимо передать 1 параметр в **query**:

|   Название   |      Описание      |
|:------------:|:------------------:|
| **category** | Название категории |

### Ответы:
| status  | message | json                                                                                                                                                                  |
|:-------:|:-------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **200** |         | _**"user": {  "name": "...", "surname": "...", "{all, osint, ...}_score": ... },<br/>"topUser": [ { "name": "...", "surname": "...", "all_score": 0 }, {...} ... ]**_ |
|         |         |                                                                                                                                                                       |
| **400** |    6    |                                                                                                                                                                       |
|         |         |                                                                                                                                                                       |
| **401** |    1    |                                                                                                                                                                       |





# TASKS 

## `POST` Add Tasks

### `http://localhost:3000/api/tasks`
Необходимо передать 8 параметров в **body**:

|    Название     |                Описание                 |
|:---------------:|:---------------------------------------:|
|  **category**   |           Название категории            |
| **difficulty**  |   Сложность('low', 'medium', 'hard')    |
|   **points**    | Изначальное количество очков за задание |
|    **title**    |            Заголовок задания            |
| **description** |                Описание                 |
|   **answer**    |               Ответ(Flug)               |
|  **solution**   |                 Решение                 |
|    **task**     |              Файл задания               |

### Ответы:
| status  |          message          |
|:-------:|:-------------------------:|
| **200** | Добавление прошло успешно |
|         |                           |
| **400** |             6             |
|         |             7             |
|         |            11             |
|         |            12             |
|         |            13             |
|         |            14             |
|         |                           |
| **401** |             1             |



## `PUT` Update Task

Необходимо передать 9 параметров в **body**:

|    Название     |                Описание                 |
|:---------------:|:---------------------------------------:|
|     **id**      |                id таска                 |
|  **category**   |           Название категории            |
| **difficulty**  |   Сложность('low', 'medium', 'hard')    |
|   **points**    | Изначальное количество очков за задание |
|    **title**    |            Заголовок задания            |
| **description** |                Описание                 |
|   **answer**    |               Ответ(Flug)               |
|  **solution**   |                 Решение                 |
|    **task**     |              Файл задания               |

### Ответы:
| status  |          message          |
|:-------:|:-------------------------:|
| **200** | Обновление прошло успешно |
|         |                           |
| **400** |             4             |
|         |            11             |
|         |            12             |
|         |            13             |
|         |            14             |
|         |                           |
| **401** |             1             |



## `GET` Get Tasks

### `http://localhost:3000/api/tasks?category=...`
Необходимо передать 2 параметра в **query**:

|   Название   |             Описание             |
|:------------:|:--------------------------------:|
| **category** |        Название категории        |
|   **page**   | Номер страницы(1 - по умолчанию) |

### Ответы:
| status  | message | json                                                                                                                                                             |
|:-------:|:-------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **200** |         | _**tasks: [ {"id": "...", "category": "...", "difficulty": "...", "points": "...", "title": "...", "description": "...",}, {...} ... ] ,<br/> nextPage: "..."**_ |
|         |         |                                                                                                                                                                  |
| **400** |    5    |                                                                                                                                                                  |
|         |    6    |                                                                                                                                                                  |
|         |    7    |                                                                                                                                                                  |
|         |         |                                                                                                                                                                  |
| **401** |    1    |                                                                                                                                                                  |
|         |         |                                                                                                                                                                  |
| **403** |    1    |                                                                                                                                                                  |
|         |         |                                                                                                                                                                  |
| **404** |    3    |                                                                                                                                                                  |



## `GET` Get One Task

### `http://localhost:3000/api/tasks/:id`
Необходимо передать 1 параметр в **params**:

| Название | Описание |
|:--------:|:--------:|
|  **id**  | id таска |

### Ответы:
| status  | message | json                                                                                                                                     |
|:-------:|:-------:|------------------------------------------------------------------------------------------------------------------------------------------|
| **200** |         | _**{ "id": ..., <br/>"category": "...", <br/>"difficulty": "...", <br/>"points": ..., <br/>"title": "...", <br/>"description": "..."}**_ |
|         |         |                                                                                                                                          |
| **400** |   21    |                                                                                                                                          |
|         |    4    |                                                                                                                                          |
|         |         |                                                                                                                                          |
| **401** |    1    |                                                                                                                                          |
|         |         |                                                                                                                                          |
| **403** |    1    |                                                                                                                                          |
|         |         |                                                                                                                                          |
| **404** |    1    |                                                                                                                                          |



## `DELETE` Delete Task

### `http://localhost:3000/api/tasks`
Необходимо передать cookies

### Ответы:
| status  |         message         |
|:-------:|:-----------------------:|
| **200** | Удаление прошло успешно |
|         |                         |
| **400** |            4            |
|         |           21            |
|         |                         |
| **401** |            1            |
|         |                         |
| **403** |            1            |
|         |                         |
| **404** |            1            |



## `POST` Check Flag

### `http://localhost:3000/api/tasks/:id`
Необходимо передать 1 параметр в **params** и 1 в **body**:

|  Название  |  Описание   |
|:----------:|:-----------:|
|   **id**   |  id таска   |
| **answer** | ответ(Flag) |

### Ответы:
| status  |               message               |
|:-------:|:-----------------------------------:|
| **200** | Поздравляем, вы успешно нашли флаг! |
|         |                                     | 
| **400** |                  4                  |
|         |                15-18                |
|         |                                     |
| **401** |                  1                  |
|         |                                     |
| **403** |                  1                  |
|         |                                     |
| **404** |                  1                  |



##  Install Task

### `http://localhost:3000/cyberpolygon-files/tasks/...`
Необходимо передать cookies

### Ответы:
| status  | message |             comment             |
|:-------:|:-------:|:-------------------------------:|
| **200** |         | Отправляется запрашиваемый файл |
|         |         |                                 |
| **401** |    1    |                                 |
|         |         |                                 |
| **404** |         |                                 |


## `GET` Answer to the Task

### `http://localhost:3000/api/answer-task`
Необходимо передать 1 параметр в **query**:

| Название | Описание |
|:--------:|:--------:|
|  **id**  | id таска |

### Ответы:
| status  | message | json                       |
|:-------:|:-------:|----------------------------|
| **200** |         | _**{ "solution": "..."}**_ |
|         |         |                            |
| **400** |   21    |                            |
|         |    4    |                            |
|         |         |                            |
| **401** |    1    |                            |
|         |         |                            |
| **403** |    1    |                            |
|         |         |                            |
| **404** |    1    |                            |



# USERS 

##  Get No Activated Users

### `http://localhost:3000/api/not-users`
Необходимо передать cookies

### Ответы:
| status  | message |                                                                    json                                                                     |
|:-------:|:-------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|
| **200** |         | [{"id": ..., <br/>"name": "...", <br/>"surname": "...", <br/>"email": "...", <br/>"student_card": "(Фотография студента)"}, <br/>{...} ...] |
|         |         |                                                                                                                                             |
| **401** |    1    |                                                                                                                                             |
|         |         |                                                                                                                                             |
| **403** |    1    |                                                                                                                                             |
|         |         |                                                                                                                                             |
| **404** |    4    |                                                                                                                                             |



##  Get New Users

### `http://localhost:3000/api/new-users`
Необходимо передать cookies

### Ответы:
| status  | message |                                                                         json                                                                          |
|:-------:|:-------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
| **200** |         | [{"user_id": ..., <br/>"category": "...", <br/>"name": "...", <br/>"surname": "...", <br/>"student_card": "(Информация о студенте)"}, <br/>{...} ...] |
|         |         |                                                                                                                                                       |
| **400** |   22    |                                                                                                                                                       |
|         |         |                                                                                                                                                       |
| **401** |    1    |                                                                                                                                                       |
|         |         |                                                                                                                                                       |
| **403** |    1    |                                                                                                                                                       |
|         |         |                                                                                                                                                       |
| **404** |    4    |                                                                                                                                                       |



##  Get Users

### `http://localhost:3000/api/users`
Необходимо передать cookies

### Ответы:
| status  | message |                                                                     json                                                                      |
|:-------:|:-------:|:---------------------------------------------------------------------------------------------------------------------------------------------:|
| **200** |         | [{"id": ..., <br/>"name": "...", <br/>"surname": "...", <br/>"email": "...", <br/>"student_card": "(Информация о студенте)"}, <br/>{...} ...] |
|         |         |                                                                                                                                               |
| **400** |   22    |                                                                                                                                               |
|         |         |                                                                                                                                               |
| **401** |    1    |                                                                                                                                               |
|         |         |                                                                                                                                               |
| **403** |    1    |                                                                                                                                               |
|         |         |                                                                                                                                               |
| **404** |    4    |                                                                                                                                               |



##  Get Student cart

### `http://localhost:3000/cyberpolygon-files/students/...`
Необходимо передать cookies

### Ответы:
| status  | message |             comment             |
|:-------:|:-------:|:-------------------------------:|
| **200** |         | Отправляется запрашиваемый файл |
|         |         |                                 |
| **401** |    1    |                                 |
|         |         |                                 |
| **403** |    1    |                                 |
|         |         |                                 |
| **404** |         |                                 |



## `PUT` Add User to Category

### `http://localhost:3000/api/user/:id`
Необходимо передать 1 параметр в **params** и 1 в **body**:

|   Название   |                Описание                 |
|:------------:|:---------------------------------------:|
|    **id**    |                id юзера                 |
| **category** | В какую категорию добавить пользователя |

### Ответы:
| status  |          message          |
|:-------:|:-------------------------:|
| **200** | Добавление прошло успешно |
|         |                           |
| **400** |            21             |
|         |             6             |
|         |             7             |
|         |                           |
| **401** |             1             |
|         |                           |
| **403** |             1             |
|         |                           |
| **404** |             2             |



## `PUT` Update for the User

### `http://localhost:3000/api/user`
Можно передать 4 параметра в **body**(передавать только те, которые нужно изменить):

|     Название      |            Описание             |
|:-----------------:|:-------------------------------:|
|   **nickname**    |          Никнейм юзера          |
|   **password**    |          Новый пароль           |
| **delCategories** |  Массив категорий для удаления  |
| **addCategories** | Массив категорий для добавления |

### Ответы:
| status  |          message          |
|:-------:|:-------------------------:|
| **201** | Обновление прошло успешно |
|         |                           |
| **400** |            23             |
|         |             6             |
|         |             7             |
|         |                           |
| **401** |             1             |
|         |                           |
| **403** |             1             |



## `PUT` Give out a Role

### `http://localhost:3000/api/give-role`
Необходимо передать 3 параметра в **body**:

|   Название   |         Описание         |
|:------------:|:------------------------:|
|    **id**    |         id юзера         |
| **category** | Категория для модератора |
|   **role**   |     Выдаваемая роль      |


### Ответы:
| status  |          message          |
|:-------:|:-------------------------:|
| **201** | Обновление прошло успешно |
|         |                           |
| **400** |            20             |
|         |                           |
| **401** |             1             |
|         |                           |
| **403** |             1             |
|         |                           |
| **404** |             2             |



## `DELETE` Delete User to Category

### `http://localhost:3000/api/user/:id`
Необходимо передать 2 параметра в **body**:

|   Название   |                Описание                 |
|:------------:|:---------------------------------------:|
|    **id**    |                id юзера                 |
| **category** | Из какой категории удалить пользователя |

### Ответы:
| status  |                 message                  |
|:-------:|:----------------------------------------:|
| **201** | Пользователь успешно удален из категории |
|         |                                          |
| **400** |                    21                    |
|         |                    6                     |
|         |                    7                     |
|         |                                          |
| **401** |                    1                     |
|         |                                          |
| **403** |                    1                     |
|         |                                          |
| **404** |                    2                     |



## `DELETE` Delete User

### `http://localhost:3000/api/user/:id`
Необходимо передать 1 параметр в **params**:

|   Название   |                Описание                 |
|:------------:|:---------------------------------------:|
|    **id**    |                id юзера                 |

### Ответы:
| status  |                 message                  |
|:-------:|:----------------------------------------:|
| **201** | Пользователь успешно удален из категории |
|         |                                          |
| **400** |                    21                    |
|         |                                          |
| **401** |                    1                     |
|         |                                          |
| **403** |                    1                     |




# Расшифровка сообщений ошибок
## Status `400`
1. Ошибка при валидации
2. Пользователь с почтовым адресом уже зарегистрирован
3. Неверный пароль
4. id не получен!
5. Email юзера не был получен!
6. Категории не существует!
7. Выберите категорию!
8. Пользователь уже прошел верификацию!
9. Роль или категория не были переданы!
10. Роли не существует!
11. Ошибка с файлом!
12. Одно или несколько полей не заполнены!
13. Невозможное количество очков!
14. Заданной сложности не существует!
15. Задание нельзя решить!
16. Задание уже решено!
17. Поле решения пустое!
18. Неверный ответ!
19. Ошибка при отправке письма на Email 
20. Модератор с выбранной категорией уже существует. его id: ...
21. Некорректный id
22. Некорректные данные об аккаунте!
23. Bad request!

## Status `401`
1. Пользователь не авторизован!

## Status `403`
1. У пользователя нет прав доступа!

## Status `404`
1. Материал не найден!
2. Пользователь не найден!
3. Задания не найдены!
4. Непроверенных пользователей не осталось!

