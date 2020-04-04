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
