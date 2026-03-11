# Hướng dẫn tắt CORS trong Chrome (chỉ cho development)

## Windows:
1. Đóng TẤT CẢ cửa sổ Chrome
2. Tạo shortcut mới của Chrome
3. Chuột phải > Properties > Target, thêm vào cuối:
   --disable-web-security --user-data-dir="C:/ChromeDevSession"

4. Mở Chrome bằng shortcut này
5. Sẽ thấy cảnh báo "You are using an unsupported command-line flag"

## Hoặc chạy lệnh PowerShell:
Start-Process "chrome.exe" -ArgumentList "--disable-web-security --user-data-dir=C:/ChromeDevSession http://127.0.0.1:5500/viotp/index.html"

## Lưu ý:
- CHỈ dùng cho development
- KHÔNG dùng Chrome này để lướt web bình thường
- Đóng và mở lại Chrome bình thường khi xong
