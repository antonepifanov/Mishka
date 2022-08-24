import IMask from 'imask';

(() => {
  const elements = document.querySelectorAll("input[type='tel']")
  if (!elements) {
    return
  }

  const maskOptions = {
    mask: "{+7} 000 000 00 00"
  }

  elements.forEach(element => {
    const mask = IMask(element, maskOptions)
  })
})();
