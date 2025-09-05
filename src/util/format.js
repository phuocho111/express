const formatSlug = (str) => {
  return str
    .normalize("NFD") // tách dấu khỏi ký tự gốc
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .toLowerCase() // chuyển thành chữ thường
    .trim() // xóa khoảng trắng thừa đầu/cuối
    .replace(/[^a-z0-9\s-]/g, "") // xóa ký tự đặc biệt
    .replace(/\s+/g, "-") // thay khoảng trắng bằng "-"
    .replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành 1
};

module.exports = { formatSlug };
