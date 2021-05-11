FROM nginx


COPY dist/checkpoint-system-frontend/ /usr/share/nginx/html

EXPOSE 81