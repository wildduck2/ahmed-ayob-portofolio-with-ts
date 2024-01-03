import { FormValidation } from "./FormValidation";

export const ContactPage = () => {
  const validationEl = document.querySelector(".contact-hero-section");
  if (!validationEl) return;
  //  Contact Form Validation
  FormValidation();
  // Contact Form Submit
  FormSubmit();
};

export const FormSubmit = () => {
  const submitBtn: HTMLButtonElement | null = document.querySelector(".submit");
  const form: HTMLFormElement | null = document.querySelector(".form");
  const inputs = form?.querySelectorAll(
    ".input"
  ) as NodeListOf<HTMLButtonElement>;
  const submitThanks: HTMLDivElement | null =
    document.querySelector(".thanks-card");
  const submitBlur: HTMLDivElement | null =
    document.querySelector(".contact-blur");
  const submitThanksH1: HTMLHeadingElement | null =
    document.querySelector(".submit-heading");
  const closesubmitCard: HTMLButtonElement | null =
    document.querySelector(".close");
  let valid: boolean = false;

  submitBtn?.addEventListener("click", () => {
    inputs?.forEach((input) => {
      valid = input.value !== "" ? true : false;
    });

    if (valid) {
      const useName: string = inputs[0].value;

      // show submit thanks
      submitThanksH1!.innerText = ` Thanks ${useName} for conatacting me`;
      submitThanks?.classList.add("show");
      submitBlur?.classList.add("active-blur-shape");

      inputs?.forEach((element) => {
        // clearing the form
        element.value = "";
      });
    }
  });

  closesubmitCard?.addEventListener("click", () => {
    submitThanks?.classList.remove("show");
    submitBlur?.classList.remove("active-blur-shape");
  });
};
