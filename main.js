Array.from(document.getElementsByClassName("rate")).forEach(t => t.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d\/\.]/, "").replace(/\.\./g, "").replace(/\s\s/g, "").replace(/\s\.\s/g, ""), "" !== this.value && (this.value = this.value), "00" !== this.value && "000" !== this.value && "0.000" !== this.value || (this.value = "0"), Number(this.value) > 12 && (this.value = "12")
}));
const getSubtotal = (t, e, n, u, l) => {
    t = document.getElementById(t), e = document.getElementById(e), (n = document.getElementById(n)).textContent = "$0.00", t.addEventListener("input", function () {
        n.textContent = (t.value * u + e.value * l).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        }), "$NaN" === n.textContent && (n.textContent = "$0.00")
    }), e.addEventListener("input", function () {
        n.textContent = (t.value * u + e.value * l).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        }), "$NaN" === n.textContent && (n.textContent = "$0.00")
    })
};
getSubtotal("m12", "m15", "smsub", 12, 15), getSubtotal("t12", "t15", "tsub", 12, 15), getSubtotal("w12", "w15", "wsub", 12, 15), getSubtotal("th12", "th15", "thsub", 12, 15), getSubtotal("f12", "f15", "fsub", 12, 15), document.getElementById("total").textContent = "$0.00", document.addEventListener("change", t => {
    let e = [Number(document.getElementById("smsub").textContent.replace(/[$,\s]/g, "")), Number(document.getElementById("tsub").textContent.replace(/[$,\s]/g, "")), Number(document.getElementById("wsub").textContent.replace(/[$,\s]/g, "")), Number(document.getElementById("thsub").textContent.replace(/[$,\s]/g, "")), Number(document.getElementById("fsub").textContent.replace(/[$,\s]/g, ""))];
    document.getElementById("total").textContent = e.reduce((t, e) => t + e).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    }), "$NaN" === document.getElementById("total").textContent && (document.getElementById("total").textContent = "$0.00")
});
const validate = t => {
    Array.from(document.getElementsByClassName(t)).forEach(t => {
        t.addEventListener("blur", function () {
            !1 === t.checkValidity() || "" === t.value ? (t.classList.add("error"), setTimeout(function () {
                t.classList.remove("error")
            }, 300), event.preventDefault()) : t.style.backgroundColor = null
        })
    })
};
validate("rate");