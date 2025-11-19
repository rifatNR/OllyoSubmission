# Getting Started

### Run Laravel Migrations and Clear Caches

```shell
docker compose run --rm app bash -c "cd /var/www/html && php artisan migrate && php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan key:generate"
```

### Run Laravel Migrations and Clear Caches again

```shell
docker compose run --rm app bash -c "cd /var/www/html && php artisan migrate && php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan key:generate"
```

### Start backend and frontend services

```shell
docker compose up
```