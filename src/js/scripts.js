
function sortChecks(x) {
  const yumCheck = document.getElementByName("yumFactor");
  switch (x) {
    case "0":
      yumCheck.checked = false;
      break;
    case "1":
      yumCheck.checked = false;
      document.getElementById("yum1").checked = true;
      break;
    case "2":
      yumCheck.checked = false;
      document.getElementById("yum1, yum2").checked = true;
      break;
    case "3":
      yumCheck.checked = false;
      document.getElementById("yum1, yum2, yum3").checked = true;
      break;
    case "4":
      yumCheck.checked = false;
      document.getElementById("yum1, yum2, yum3, yum4").checked = true;
      break;
    case "5":
      yumCheck.checked = false;
      document.getElementById("yum1, yum2, yum3, yum4, yum5").checked = true;
      break;
  }
}
