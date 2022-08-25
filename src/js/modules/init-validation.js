import { format } from 'prettier';
import rules from '../utilites/validation-rules.js';

(() => {
  const forms = document.querySelectorAll("form");
  if (!forms.length) return;

  forms.forEach(form => {
    const inputs = form.querySelectorAll('input[required]');
    if (!inputs.length) return;

    inputs.forEach((input) => {
      const check = rules[input.type];
      const result = check(input.value);

      input.setCustomValidity("");
      form.addEventListener('submit', () => {
        if (typeof result == 'string') {
          input.setCustomValidity(result);
          input.reportValidity();
        } else {
          input.setCustomValidity("");
        };
      })
    })
  })
})();
