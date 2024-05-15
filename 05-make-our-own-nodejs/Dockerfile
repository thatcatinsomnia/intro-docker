FROM alpine:3.18

RUN apk add --update nodejs npm

# -S 創建系統群組 
# -G group
# 創建 group "node" 和 user "node"，並把 user "node" 加進 group "node"
RUN addgroup -S node && adduser -S node -G node

USER node

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "index.js"]