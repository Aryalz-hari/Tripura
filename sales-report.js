// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    // Sales data for Chart.js
    const salesData = {
        labels: ['Mobile', 'Car', 'Book', 'Pen'],
        datasets: [{
            label: 'Quantity Sold',
            data: [99, 20, 80, 20],
            backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726', '#ec407a'],
            borderColor: ['#1e88e5', '#43a047', '#fb8c00', '#d81b60'],
            borderWidth: 1
        }]
    };

    // Bar chart configuration
    new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
