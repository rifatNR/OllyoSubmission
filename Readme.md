# Getting Started

### Install PHP dependencies
```shell
docker compose run --rm app composer install
```

### Set up migrations and clear caches
```shell
docker compose run --rm app bash -c "cd /var/www/html && php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan key:generate && php artisan migrate"
```

### Start backend and frontend services

```shell
docker compose up
```