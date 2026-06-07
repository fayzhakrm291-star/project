// الانتظار حتى يتم تحميل عناصر الصفحة بالكامل قبل تشغيل الكود
document.addEventListener("DOMContentLoaded", function() {
    
    // جلب الزر ونص الحالة من صفحة HTML عن طريق الـ ID الخاص بهم
    let myButton = document.getElementById('alertBtn');
    let status = document.getElementById('statusText');
    
    // شرط حماية: الكود يشتغل فقط إذا كان الزر موجود في الصفحة (يمنع الخطأ في about و features)
    if (myButton && status) {
        
        // الاستماع لحدث الضغط (Click) على الزر
        myButton.addEventListener('click', function() {
            
            // تغيير النص عند الضغط لمحاكاة حالة الطوارئ وفك الأقفال
            status.innerHTML = "🚨 تم تفعيل إنذار الطوارئ! تم فتح جميع أقفال المخارج تلقائياً لسلامتكم.";
            
        });
    }
});