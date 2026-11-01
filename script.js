const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm instanceof HTMLFormElement) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) return;

    const formData = new FormData(enquiryForm);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const subject = encodeURIComponent("A first conversation with Artha & Co.");
    const body = encodeURIComponent(
      `Hello Artha & Co.,\n\nMy name is ${name}.\nYou can reach me at ${email}.\n${topic ? `I would like to discuss: ${topic}.\n` : ""}\nI look forward to speaking with you.`,
    );
    const status = document.querySelector("#form-status");

    if (status) {
      status.textContent =
        "Your email app will open with a draft. Add your consultant’s email address before sending.";
    }

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}
