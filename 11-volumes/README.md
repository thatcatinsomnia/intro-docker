# Volumes
Volumes 讓你可以讓資料持久化、並在多個資料庫之間共享資料，Volume 在 container 被停止之後，不會被刪除，必須要手動刪除。

# How to start
要了解 volume 我們可以從 docker hub 搜尋 postgers image，並進到任意版本的 image 查看內容，應該可以看到一行指令 `VOLUME /var/lib/postgresql/data` ，這行會在 container 執行時:
  1. 在container 中的 /var/lib/postgresql/data 建立一個 mount point
  2. 在 host 中，建立一個 anonymous volume，會由 docker 來管理，若是在 linux 中的話可以直接到 該路徑看到它，在其他系統因為會透過 vm，所以需要進到 vm 中。
  3. 將 anonymous volume 掛載到 /var/lib/postgresql/data

# play with Volume
執行 `docker volume ls` 指令，查看當前的 volumes 有幾個，接著產生幾個運行 postgres 的 container:

```bash
docker run -d --name postgres1 -e POSTGRES_PASSWORD=1234 postgres:16.1
docker run -d --name postgres2 -e POSTGRES_PASSWORD=1234 postgres:16.1
```

使用 `docker volume ls`，檢查你的 volume 是不是多了 2 個

停止並刪除運行中的 container，`docker rm -f postgres1 postgres2`，接著在次運行 `docker volume ls` 可以看到 volume 並沒有隨著 docker 停止而被刪除。

# use custom volume name
使用 -v 可以讓我們自己命名 volume 名稱。

```bash
docker run -d --name postgres -v my_data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 postgres:16.1
```

使用 docker volume ls 可以看到 `my_data` 出現在列表中指令中的 `my_data:/var/lib/postgresql/data`。

連入 container 並建立新的 db:

```bash
docker exec -it postgres psql -U postgres
```

```sql
CREATE DATABASE my_db;
```

建立完後，可以使用 `\l` 查看 db 列表，透過 `exit;` 可以退出 postgres

現在我們刪除正在運行的 postgres，執行 `docker rm -f postgres`，透過 `docker volume ls` 看到，我們的 volume 並沒有被刪除。
我們在啟動另一個 container，命名成 postgres2，並掛載我們的 volume

```bash
docker run -d --name postgres2 -v my_data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 postgres:16.1
```

進到 postgres 中:
```bash
docker exec -it postgres2 psql -U postgres
```

使用 `\l` 可以看到之前在 postgres 中建立的 my_db 還在。