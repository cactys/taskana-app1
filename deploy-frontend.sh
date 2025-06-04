#!/usr/bin/env bash
set -xe

# Проверка существования пользователя frontend и создание его, если его нет
if ! id "frontend" &>/dev/null; then
    echo "Пользователь frontend не существует, создаю его..."
    # Создание пользователя frontend и добавление его в группу www-data
    sudo useradd -M -G _nginx frontend
    echo "Пользователь frontend успешно создан и добавлен в группу www-data."
else
    echo "Пользователь frontend уже существует."
fi

# Удаление старой версии приложения
sudo rm -rf /var/www/taskana
sudo rm -r ~/taskana-app1.tar.gz

# Загрузка артефакта
if curl -u "${NEXUS_REPO_USER}:${NEXUS_REPO_PASS}" -o taskana-app1.tar.gz "${ARTIFACT_URL}"; then
    echo "✅ Артефакт успешно загружен непосредственно на сервер"
else
    echo "❌ Фатальная ошибка: не удалось загрузить артефакт на сервер"
    exit 1
fi

# Разархивирование артефакта
sudo mkdir -p /var/www/taskana
sudo tar -xzvf taskana-app1.tar.gz -C /var/www/taskana || true
echo "Артефакт успешно разархивирован."

# Изменение владельца и группы для директории приложения
sudo chown frontend:_nginx -R /var/www/taskana
echo "Владелец и группа для директории /var/www/taskana изменены на frontend:_nginx."

# Перезапуск Nginx
sudo systemctl restart nginx.service
echo "Nginx успешно перезапущен."
