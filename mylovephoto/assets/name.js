const fs = require('fs');
const path = require('path');

// Đường dẫn đến thư mục chứa hình ảnh
const imageFolderPath = './images';

// Đọc danh sách tệp trong thư mục và lọc ra các tệp hình ảnh (ví dụ: .jpg, .png)
const imageFiles = fs.readdirSync(imageFolderPath).filter(file => {
  const extension = path.extname(file);
  return ['.JPG', '.jpg', '.png', '.gif','.mp4'].includes(extension);
});

// Sử dụng danh sách tên tệp để cập nhật mảng images
const images = imageFiles.map(file => path.join('', file));

// In ra mảng images để bạn có thể dán vào journey-page.component.ts
console.log(images);
