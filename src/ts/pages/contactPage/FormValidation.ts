export const FormValidation = () => {
  const form: HTMLFormElement | null = document.querySelector(".form");
  const inputs: NodeListOf<HTMLElement> | undefined =
    form?.querySelectorAll(".input");

  inputs?.forEach((input) => {
    input.addEventListener("keydown", (e) => {
      const value = input.value;

      // console.log( value );
    });
  });

  // console.log( inputs );
};
