const serviceLists = document.querySelectorAll(".service_list");

serviceLists.forEach(service_list => {
    service_list.addEventListener("click", () => {
        service_list.classList.toggle("active");
    });
});