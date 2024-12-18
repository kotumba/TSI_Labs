
let result = new URL(location.href).searchParams.get("data-university");
    if (result==null) {
        result="any"
    }
document.getElementById('university').value=result;