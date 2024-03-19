document.addEventListener("DOMContentLoaded", () => {
    const copyAddressBtn = document.querySelector(".btn-copy-address");
    let copyBtnState = true;

    copyAddressBtn.addEventListener("click", function () {
        if (copyBtnState === false) return;
        copyBtnState = false;
        const btn = this;
        const addressElement = this.querySelector(".address");
        const addressValue = addressElement.textContent.trim();
        navigator.clipboard.writeText(addressValue);
        addressElement.textContent = "Copied";
        setTimeout(function () {
            addressElement.textContent = addressValue;
            copyBtnState = true;
        }, 1000);
    });
});
