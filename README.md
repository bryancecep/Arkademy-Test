# Arkademy-Test
## Soal No. 1
 * Kegunaan JSON pada REST API adalah sebagai format untuk mengirim (sending) dan meminta (requesting) data pada REST API. Selain JSON format data transfer bisa berupa XML (eXtensible Markup Language) dan plain text, tetapi format data JSON lebih populer karena berukuran ringan dan formatnya lebih mudah untuk dibaca dan dimengerti.
 
 
 const myBiodata = () => {
    return {
        'name': 'Cecep Bryan Firdaus',
        'age' : 24,
        'address' : 'Bandung',
        'hobbies' : ['Reading', 'Jogging'],
        'is_married' : false,
        'list_school' : [
                            {
                                name : 'Universitas Pasundan Bandung',
                                year_in : 2013,
                                year_out : 2017,
                                major : 'Ilmu Hubungan Internasional'
                            },

                            {
                                name : 'SMAN 1 Subang',
                                year_in : 2010,
                                year_out : 2013,
                                major : 'IPA'
                            },

                            {
                                name : 'SMPN 1 Jalancagak',
                                year_in : 2007,
                                year_out : 2010,
                                major : null
                            },

                            {
                                name : 'SDN 5 Cisaat',
                                year_in : 2001,
                                year_out : 2007,
                                major : null
                            }
                        ],
        'skills' :  [
                        {
                            skill_name : 'English',
                            level : 'advanced'
                        },

                        {
                            skill_name : 'Communications',
                            level : 'bussines Level'
                        },

                        {
                            skill_name : 'Javascript',
                            level : 'Beginner'
                        },
                    ],
        "interest_in_coding" : true
    }
};

console.log(myBiodata());
 
 ## Soal No. 2
Format username: hanya boleh di isi huruf besar dengan panjang tepat 7 karakter. Username tidak boleh diawali dengan angka / karakter special.

    const is_username_valid = (username) =>  /^[A-Z][\w]{7}$/.test(username);

    console.log(is_username_valid('SAMRUBY'));
    console.log(is_username_valid('DEMYLOV'));

  Format password: merupakan kombinasi dari huruf kecil, huruf besar, minimal satu karakter, angka minimal satu karakter, dan harus memiliki karakter simbol “#”  dan panjang antara 9 - 15 karakter.

    const is_password_valid = (password) =>  /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\0-10)(?=.*[#]).{9,15}$/.test(password);

    console.log(is_password_valid('passW0rd#'));
    console.log(is_password_valid('C0d3YourFuture#'));
    
  ## Soal No. 5
  Buatlah fungsi yang mempunyai sebuah parameter yang bekerja untuk menghitung jumlah huruf yang berulang pada sebuah string.

       function find_duplicate_in_array(arra1) {
        var object = {a-z};
        var result = [0-10];

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        })

        for (var prop in object) {
           if(object[prop] >= 2) {
               result.push(prop);
           }
        }

        return result;

    }

    console.log(find_duplicate_in_array([saya bisa menyelesaikan soal ini]));
    console.log(find_duplicate_in_array([semoga saya bisa lolos arkademy]));
     
     
        
    
