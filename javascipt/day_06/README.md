## Lập trình bất đồng bộ và đồng bộ
- Đồng bộ: các câu lệnh chạy theo một trình tự cụ thể.
- Bất đồng bộ: các câu lệnh chạy không theo một trình tự cụ thể.
- Bất đồng bộ: Javascript chỉ có một luồng duy nhất, nhưng khi một công việc mất thời gian sẽ được đưa vào hàng đợi và hệ điều hành sẽ xử lý, công việc tiếp theo sẽ được xử lý và nếu cũng mất thời gian thì nó lại được ném cho hệ điều hành. (Event Loop)
## Promise
- Đại diện cho một công việc mất nhiều thời gian để hoàn thành.
- promise.then(data): bắt tín hiệu resolve.
- promise.catch(reason): bắt tín hiệu reject.
- Có thể có nhiều then, các then tiếp theo có thể không thực hiện ngay lập tức. Nhưng luôn luôn theo một trình tự và không đồng bộ (**Trình tự**: đặt đồ uống -> làm đồ uống -> nhận đồ uống -> uống. **Không đồng bộ**: order trà đào -> làm trà đào -> order trà sữa -> làm xong trà sữa -> uống trà sữa -> làm xong trà đào -> uống trà đào).
## Async | Await (tương tự promise)
## API
- Giao diện lập trình ứng dụng: là bộ các quy tắc cho phép các ứng dụng/ hệ thống giao tiếp/ trao đổi và làm việc với nhau.
- Các điểm truy cập (endpoint)