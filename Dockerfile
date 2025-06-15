# ���������� ����������� ����� Node.js
FROM node:16-alpine

# ������������� ������� ����������
WORKDIR /app

# �������� package.json � package-lock.json
COPY package*.json ./

# ������������� �����������
RUN npm install

# �������� ��������� ����� ����������
COPY . .

# �������� ����������
RUN npm run build

# ������������� nginx ��� ������������ ����������� ������
RUN apk add --no-cache nginx

# �������� ������������ nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ������������ ���� 80
EXPOSE 80

# ��������� nginx
CMD ["nginx", "-g", "daemon off;"]