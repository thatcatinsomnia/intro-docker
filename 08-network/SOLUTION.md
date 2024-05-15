1. 建立 network
```bash
docker network create my-net
```

2. 啟動 mongodb container
```bash
docker run --rm -d --name db --network my-net mongo:7
```

3. 建立 api server 的 image 
```bash
docker build -t api .
```

4. 執行 api server container
```bash
docker run --rm -d --network my-net -p 1333:1333 api
```

5. 打開 browser 瀏覽 http://localhost:1333/api/numbers

6. 打開 browser 瀏覽 http://localhost:1333/api/numbers/new，並重新整理幾次
> 💡 這裡為了方便展示，所以沒有照 restful 規則定義 api

7. 回到 http://localhost:1333/api/numbers，可以看到資料增加了
