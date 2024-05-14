# 前置
- 透過 vite 在當前資料夾設置一個 react 專案
- 使用 `npm run build` 產生 production 程式碼
- 透過 `npm run preview` 確定 production 的程式碼運作正常

# Assigment
將當前的 react 專案容器化，並透過 ngix 來服務我們的 react 專案內容：
- nginx 預設的路徑是 `/usr/share/nginx/html`，你會需要將透過 `npm run build` 產生的程式碼(通常是 `dist`)放到該路徑下。
- nginx 預設的 port 是 80 port，你需要將 container 內部的 80 port 和 host 進行 mapping。
- 需要使用 multi stage 方式來撰寫 Dockerfile。
- 最後的 runtime image 直接使用 nginx image。
