# Getting Started

### Install PHP dependencies
```shell
docker compose run --rm app composer install
```

```shell
cp /backend/.env.example /backend/.env
```

### Start Docker containers
```shell
docker compose up
```

### While docker containers are running, access the Laravel application container in another terminal
```shell
docker exec -it laravel-app bash
```

### Inside the Laravel application container, run the following commands

```shell
php artisan config:clear

php artisan route:clear

php artisan key:generate

php artisan migrate

```