# Getting Started

### Make sure you have Docker and Docker Compose installed on your machine.
### Also make sure you have nothing running on ports 4321, 8000, and 3306.

### Clone the repository
```shell
git clone <repository_url>
```

### Navigate to the project directory
```shell
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

### visit the application
Open your web browser and navigate to `http://localhost:4321` to access the web application.