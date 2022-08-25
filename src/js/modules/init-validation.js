import rules from '../utilites/validation-rules.js';

(() => {
  const forms = document.querySelectorAll("form");
  if (!forms.length) return;

  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required]');
    if (!inputs.length) return;
    form.addEventListener('submit', () => {
      inputs.forEach((input) => {
        input.addEventListener("input", () => {
          const check = rules[input.type];
          const result = check(input.value);
          if (typeof result == 'string') {
            input.setCustomValidity(result);
          } else {
            input.setCustomValidity("");
          };
          input.reportValidity();
        })
      })
    })
  })
})();
