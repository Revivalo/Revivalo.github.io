document.addEventListener("DOMContentLoaded", function () {
        fetch('https://api.spiget.org/v2/resources/108055')
            .then(response => response.json())
            .then(data => {
                const downloadsCount = data.downloads + 43;
                document.getElementById('downloads-count').textContent = `${downloadsCount}`;
            })
            .catch(error => {
                console.error('Došlo k chybě při načítání dat:', error);
                document.getElementById('downloads-count').textContent = 'Nelze načíst počet stažení.';
            });

        fetch('https://api.spiget.org/v2/resources/81780')
        .then(response => response.json())
        .then(data => {
            const downloadsCount = data.downloads;
            document.getElementById('rewards-count').textContent = `${downloadsCount}`;
        })
        .catch(error => {
            console.error('Došlo k chybě při načítání dat:', error);
            document.getElementById('rewards-count').textContent = 'Nelze načíst počet stažení.';
        });

        fetch('https://api.spiget.org/v2/resources/79089')
        .then(response => response.json())
        .then(data => {
            const downloadsCount = data.downloads;
            document.getElementById('warps-count').textContent = `${downloadsCount}`;
        })
        .catch(error => {
            console.error('Došlo k chybě při načítání dat:', error);
            document.getElementById('warps-count').textContent = 'Nelze načíst počet stažení.';
        });

        fetch()
});