# Getting Started

### Clone the repository
```shell
git clone <repository_url>
```

### Navigate to the project directory
```shellshell
cd OllyoSubmission
```

### Copy environment files
```shell
cp ./backend/.env.example ./backend/.env
```

### Install PHP dependencies
```shell
docker compose run --rm app composer install
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