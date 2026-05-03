const burgerButton = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu a");
const contactForm = document.querySelector(".contact-form");
const statusNode = document.querySelector(".form-status");

if (burgerButton && mobileMenu) {
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", isOpen);
    burgerButton.setAttribute("aria-expanded", String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerButton.classList.remove("is-open");
      mobileMenu.classList.remove("is-open");
      burgerButton.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm instanceof HTMLFormElement && statusNode) {
  const validationMap = {
    name: {
      test: (value) => value.trim().length >= 2,
      message: "Введите имя не короче 2 символов."
    },
    email: {
      test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Введите корректный email."
    },
    message: {
      test: (value) => value.trim().length >= 10,
      message: "Опишите задачу минимум в 10 символах."
    }
  };

  const setFieldState = (field, message) => {
    const errorNode = field.parentElement?.querySelector(".field-error");
    field.classList.toggle("is-invalid", Boolean(message));

    if (errorNode) {
      errorNode.textContent = message;
    }
  };

  const validateField = (field) => {
    const rule = validationMap[field.name];

    if (!rule) {
      return true;
    }

    const isValid = rule.test(field.value);
    setFieldState(field, isValid ? "" : rule.message);
    return isValid;
  };

  contactForm.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      validateField(field);
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = Array.from(contactForm.querySelectorAll("input, textarea"));
    const isFormValid = fields.every((field) => validateField(field));

    statusNode.className = "form-status";

    if (!isFormValid) {
      statusNode.textContent = "Проверьте поля формы и исправьте ошибки.";
      statusNode.classList.add("is-error");
      return;
    }

    statusNode.textContent = "Заявка отправлена. Мы свяжемся с вами в ближайшее время.";
    statusNode.classList.add("is-success");
    contactForm.reset();
    fields.forEach((field) => setFieldState(field, ""));
  });
}
