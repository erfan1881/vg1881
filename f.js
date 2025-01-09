const button = document.getElementById("loadButton");

button.onclick = () => {
    document.body.classList.add("loaded"); // کاهش شفافیت

    // بعد از ۱۰۰۰ میلی‌ثانیه (یک ثانیه) کار زیر انجام می‌شود
    setTimeout(() => {
        document.body.classList.remove("not-loaded"); // تغییر تصویر پس‌زمینه
        document.body.style.backgroundImage = "url('new-image.jpg')"; // تصویر جدید

        // پس از تغییر پس‌زمینه، شفافیت را به تدریج به ۱ برمی‌گردانیم
        setTimeout(() => {
            document.body.classList.remove("loaded");
            document.body.style.opacity = 1; // شفافیت دوباره به ۱ برمی‌گردد
        }, 50); // یک تاخیر جزئی
    }, 1000); // زمان انتظار برای کاهش شفافیت
};