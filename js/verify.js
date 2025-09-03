let code = "";

function pressNum(num) {
    code += num;
    document.getElementById("hiddenCode").value = code;
    document.getElementById("code-display").innerText = code.replace(/./g, "•");
}

function clearCode() {
    code = code.slice(0, -1);
    document.getElementById("hiddenCode").value = code;
    document.getElementById("code-display").innerText = code.replace(/./g, "•") || "••••••";
}
