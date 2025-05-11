const SetErrorOnInput = (object) => {
  const type = object?.type;
  const input_id = object?.input_id;
  let id = type;
  if (object?.input_id) id = type + "-" + input_id;

  const input = document.getElementById(id);
  // email
  if (type === "email") {
    input.classList.add("border-Error-500");
    input.classList.remove("border-secondary/100");
    document.getElementById("danger_email").classList.remove("hidden");
    document.getElementById("close_email").classList.add("hidden");
    document.getElementById("input_email_validate").classList.remove("hidden");

    // password
  } else if (type === "password") {
    input.classList.remove("border-secondary-100");
    input.classList.add("border-Error-500");
    document.getElementById("danger_password").classList.remove("hidden");
    document.getElementById("close_password").classList.add("hidden");
    document
      .getElementById("input_password_validate")
      .classList.remove("hidden");
    // mobile
  } else if (type === "mobile") {
    input.classList.remove("border-secondary/100");
    input.classList.add("border-Error-500");
    document.getElementById("danger_mobile").classList.remove("hidden");
    document.getElementById("close_mobile").classList.add("hidden");
    document.getElementById("input_mobile_validate").classList.remove("hidden");
    // telegram
  } else if (type === "telegram") {
    input.classList.remove("border-secondary-100");
    input.classList.add("border-Error/500");
    document.getElementById("danger_telegram").classList.remove("hidden");
    document.getElementById("close_telegram").classList.add("hidden");
    document
      .getElementById("input_telegram_validate")
      .classList.remove("hidden");
  } else if (type === "drawer") {
    input.classList.remove("border-secondary-100");
    input.classList.add("border-Error-500");

    document
      .getElementById("input_drawer_validate-" + input_id)
      .classList.remove("hidden");
  }
};

export default SetErrorOnInput;
