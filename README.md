# synapse-with-oidc-crashing

Synapse server (1.90.0) crashing when trying to fetch lemonLDAP metadata

## Test

- Compile the project with `npm run build`
- Run `npm start` or `npm run start:debug` to see all logs of containers creation and setup

With synase image 1.90.0 the containers will crash. If you change synapse image version from 1.90.0 to 1.89.0 in `docker-compose.yml` file it will work.
