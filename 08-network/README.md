# Network
透過將 container 加到相同的 network，彼此可以透過 contaienr 溝通，docker 內部的 DNS server 會自動辨識出 container 對應的 ip。

# Assignment
1. 新增新的 network
2. 將 express container 加到步驟1的 network 中
3. 運行另一個 mongodb container 命名為 `db`，也需要加到步驟1的 network 中
4. 透過 /api/numbers 查看資料
5. 透過 /api/numbers/new 新增資料，再回到 /api/numbers 檢查資料數量。 