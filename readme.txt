Make project:
npm init adonis-ts-app@latest <project-name>
eslint: False

Run:
node ace serve --watch

https://docs.adonisjs.com/guides/database/introduction
Install database:
npm i @adonisjs/lucid

Configure database:
node ace configure @adonisjs/lucid

Rebuild SQLite:
npm rebuild sqlite3

Make Model and Controller (sudah include sama migration file):
node ace make:model <tabel-name> -c -m

Structurize the table, model, controller

Routes:
Route.resource('<table-name>', '<ClassController>')

Run migration to sqlite:
node ace migration:run

Refresh migration:
node ace migration:refresh

-Additional-
Make Controller with resource:
node ace make:controller <tabel-name> -r
Making tables via migration:
node ace make:migration <tabel-name>