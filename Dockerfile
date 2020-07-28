FROM node:14

COPY . /src
WORKDIR /src

RUN yarn config set registry https://registry.npm.taobao.org/
RUN yarn install
RUN yarn build

CMD ["yarn", "start"]

