import { sendLeadViaWebhook } from "./webhook.js";

const form = document.querySelector("#lead-form");
const statusElement = document.querySelector("#form-status");

if (form && statusElement) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    statusElement.textContent = "Sending...";

    try {
      await sendLeadViaWebhook(payload);
      form.reset();
      statusElement.textContent = "Thanks - your enquiry has been sent.";
    } catch (error) {
      console.error("Lead form submission failed.", error);
      statusElement.textContent =
        "Sorry, something went wrong. Please email hello@redoryx.co.uk directly.";
    }
  });
}
