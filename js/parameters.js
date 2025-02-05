!function() {
    document.addEventListener('DOMContentLoaded', function() {
        const query = new URLSearchParams(window.location.search);
        document.getElementsByTagName('a')
            .forEach(function(a) {
            const url = new URL(a.href);
            query.forEach(function(value, key) {
                if (!url.searchParams.has(key)) url.searchParams.set(key, value);
            });
            a.href = url.toString();
        })
    })
}()