document.getElementById('registrationForm').addEventListener('submit', function (e) { 
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color').value;

    // alert(`
    //     Registration Successful!
    //     Name: ${name}
    //     Age: ${age}
    //     Gender: ${gender}
    //     Favorite Color: ${color}
    // `);

    
        if (!name || !age || !gender || !color) {
            alert("You must fill out all the fields");
            return;
        }
        window.location.href = `welcome.html?name=${name}&color=${color}&gender=${gender}&age=${age}`;    
    
});
