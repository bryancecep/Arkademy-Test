 const is_username_valid = (username) =>  /^[A-Z][\w]{7}$/.test(username);

    console.log(is_username_valid('SAMRUBY'));
    console.log(is_username_valid('DEMYLOV'));

  Format password: merupakan kombinasi dari huruf kecil, huruf besar, minimal satu karakter, angka minimal satu karakter,
  dan harus memiliki karakter simbol “#”  dan panjang antara 9 - 15 karakter.

    const is_password_valid = (password) =>  /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\0-10)(?=.*[#]).{9,15}$/.test(password);

    console.log(is_password_valid('passW0rd#'));
    console.log(is_password_valid('C0d3YourFuture#'));
    
