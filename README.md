# slonit

## Команды git

### Создание репозитория

|Команда|Описание|
|:---:|:---|
|```git init```|Создаёт локальный репозиторий|

### Изменение конфигурации

|Команда|Описание|
|:---:|:---|
|```git config```|Позволяет посмотреть или изменить настройки репозитория|

### Изменение индекса

> [!CAUTION]
> Некоторые команды также могут изменять рабочую область

|Команда|Описание|
|:---:|:---|
|```git add```|Индексирует изменения|
|```git rm```|Удаляет элемент|
|```git mv```|Переименовывает элемент|
|```git reset```|Откатывает изменения|

### Изменение репозитория

|Команда|Описание|
|:---:|:---|
|```git commit```|Добавляет последние изменения|

### Просмотр состояния проекта

|Команда|Описание|
|:---:|:---|
|```git status```|Показывает различия между рабочей областью, индексом и репозиторием|
|```git show```|Показывает историю изменений репозитория|

### Часто используемые флаги

- ```git config```
  - --global &mdash; применение настроек ко всем репозиториям текущего пользователя
  - --system &mdash; применение настроек для всех пользователей на этом компьютере
- ```git rm```
	- -f &mdash; игнорировать предупреждения гит
	- -r &mdash; удалить директорию
	- --cached &mdash; удалить файлы только из индекса
- ```git reset```
	- -f &mdash; игнорировать предупреждения гит
- ```git commit```
  - -m &mdash; добавить в репозиторий отслеживаемые изменения с сообщением
  - -a &mdash; добавить в репозиторий все изменения в проиндексированных файлах
- ```git show```
  - -pretty= &mdash; позволяет контролировать формат выведенных данных
  	- fuller &mdash; показывает историю изменений, учитывая разделение ролей коммитера и автора