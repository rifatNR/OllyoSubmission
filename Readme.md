# Getting Started


Before you begin, ensure you have met the following requirements:

- Make sure you have Docker and Docker Compose installed on your machine.
- Also make sure you have nothing running on ports 4321, 8000, and 3306.
- If the running with docker failes somehow, follow the manual setup instructions below.

### Clone the repository
```shell
git clone https://github.com/rifatNR/OllyoSubmission.git
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
Open your web browser and navigate to http://localhost:4321/ to access the web application.


# Manual Setup (Without Docker)
If you prefer to set up the application manually without using Docker, follow these steps:

### Prerequisites
- Ensure you have PHP (version 8.0 or higher), Composer, MySQL, and a web server (like Apache or Nginx) installed on your machine.
- Make sure you have nothing running on ports 8000 and 3306.

### Install PHP dependencies
```shell
cd backend
composer install
```

### Copy environment files
```shell
cp .env.example .env
```

### laravel setup
```shell
php artisan key:generate
php artisan config:cache
php artisan config:clear
php artisan route:clear
php artisan migrate
```

### Start the development server
```shell
php artisan serve
```

### Start react app
```shell
cd ../frontend
npm install
npm dev
```

### visit the application
Open your web browser and navigate to http://localhost:4321/ to access the web application.