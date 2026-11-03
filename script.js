document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme !== "dark";
  if (dark) root.dataset.theme = "dark"; else delete root.dataset.theme;
  try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
});

const email = ["marcopintore0", "gmail.com"].join("@");
const toast = document.createElement("div");
toast.className = "toast";
toast.setAttribute("role", "status");
document.body.appendChild(toast);
let toastTimer;
document.querySelectorAll(".js-email").forEach((a) => {
  a.href = "mailto:" + email;
  a.addEventListener("click", () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(email).then(() => {
      toast.textContent = "copied: " + email;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
    }, () => {});
  });
});
