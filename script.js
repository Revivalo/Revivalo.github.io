document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api.spiget.org/v2/resources/108055')
        .then(response => response.json())
        .then(data => {
            const downloadsCount = data.downloads;
            document.getElementById('downloads-count').textContent = `Počet stažení: ${downloadsCount}`;
        })
        .catch(error => {
            console.error('Došlo k chybě při načítání dat:', error);
            document.getElementById('downloads-count').textContent = 'Nelze načíst počet stažení.';
        });
});