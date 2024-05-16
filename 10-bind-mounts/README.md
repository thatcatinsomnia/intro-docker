# bind mounts
在開發過程我們需要在我們編輯程式碼時後，可以馬上看到更動後的效果，這時候 `bind mounts`就很有用，bind mounts 可以讓 container 可以存取我們 host 中的檔案。

# Assignment
- 透過 vite 建立 react 專案，並將它容器化，最後使用 npm run dev 運行。
- 透過 bind mounts 方式，讓 local 端程式碼更動時，會自動偵測到變更，更新到畫面上

# Solution
- 建構 container:
```bash
docker build -t react-dev .
docker run -d --rm --name fe --mount "type=bind,source=$(pwd)/src/,target=/app/src/" -p 5173:5173 react-dev
```
或是不同的 mount 語法:
```bash
docker run -d --rm --name fe -v "$(pwd)/src:/app/src" -p 5173:5173 react-dev
```
- 變更程式碼查看使某有即時更新到畫面。
