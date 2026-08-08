// MOBILE MENU

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("header nav");

function toggleMenu() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);
}


// SERVICES FOR ESTIMATE FORM

const services = [
    "Sofa Cleaning",
    "Mattress Cleaning",
    "Carpet Cleaning",
    "Dining Chair Cleaning",
    "Ottoman Cleaning"
];

const serviceSelect = document.querySelector("#service");

function populateServices() {
    services.forEach((service) => {
        serviceSelect.innerHTML += `
            <option value="${service}">
                ${service}
            </option>
        `;
    });
}

if (serviceSelect) {
    populateServices();
}


// LOAD SAVED CUSTOMER INFORMATION

const estimateForm = document.querySelector("#estimate-form");

function loadSavedCustomer() {
    const savedCustomer = localStorage.getItem("vexaCustomer");

    if (savedCustomer) {
        const customer = JSON.parse(savedCustomer);

        document.querySelector("#name").value = customer.name;
        document.querySelector("#email").value = customer.email;
        document.querySelector("#phone").value = customer.phone;
    }
}

if (estimateForm) {
    loadSavedCustomer();
}


// PROCESS ESTIMATE FORM

function handleEstimateSubmit(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const service = document.querySelector("#service").value;
    const formMessage = document.querySelector("#form-message");

    const customer = {
        name: name,
        email: email,
        phone: phone,
        service: service
    };

    if (name && email && phone && service) {

        localStorage.setItem(
            "vexaCustomer",
            JSON.stringify(customer)
        );

        formMessage.textContent =
            `Thank you, ${name}! Your request for ${service} has been received. We will contact you soon.`;

        estimateForm.reset();

    } else {

        formMessage.textContent =
            `Please complete all required fields before submitting the form.`;
    }
}

if (estimateForm) {
    estimateForm.addEventListener("submit", handleEstimateSubmit);
}