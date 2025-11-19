

```shell
docker compose run --rm app bash -c "cd /var/www/html && php artisan migrate && php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan key:generate"
```