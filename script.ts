interface Service {
    name: string;
    description: string;
}

class ServiceManager 
{
    services: Service[] = [];

    constructor() {
        this.fetchServices();
    }

    async fetchServices() {
        try {
            const response = await fetch('data.json');
            const data: Service[] = await response.json();
            this.services = data;
            this.displayServices();
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    }

    displayServices() {
        const servicesList = document.getElementById('services-list');
        if (servicesList) {
            servicesList.innerHTML = '';
            this.services.forEach(service => {
                const serviceItem = document.createElement('div');
                serviceItem.classList.add('service-item');
                serviceItem.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
                servicesList.appendChild(serviceItem);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ServiceManager();
});
