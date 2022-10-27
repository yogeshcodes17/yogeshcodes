---
id: postgraphile
title: Postgraphile Start Notes
---
# Postgraphile start notes

```bash
npm i db-migrate db-migrate-pg

npx db-migrate create create-schema --sql-file

```

`npm i db-migrate db-migrate-pg` 

`npx db-migrate create create-schema --sql-file` create-schema is a name we can name it anything. —sql-file used to define up and down migrations. The up file will include the new things we want to add to the database. And the down file will define how to remove the things we add in the up file. Down file allowing us to revert the changes made in the up file. 

`npx db-migrate up` - apply migration