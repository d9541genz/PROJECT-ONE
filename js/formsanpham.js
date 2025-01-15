document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab-menu li').forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Xóa class active khỏi tất cả các tab
            document.querySelectorAll('.tab-menu li').forEach(function(item) {
                item.classList.remove('active');
            });

            // Ẩn tất cả các nội dung tab
            document.querySelectorAll('.tab-content .tab').forEach(function(content) {
                content.classList.remove('active');
            });

            // Kích hoạt tab và nội dung tương ứng
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});