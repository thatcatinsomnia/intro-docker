FROM node:20-bookworm

# 在 COPY 之前，不然會變成用 root 身分進行 COPY 動作
USER node

WORKDIR /home/node/code

# 複製檔案，並將權限給 node 這個 user
# node:node 為 <USER>:<GROUP>
COPY --chown=node:node index.js index.js


CMD ["node", "index.js"]
