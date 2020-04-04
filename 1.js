const myBiodata = () => {
    return {
        'name': 'Cecep Bryan Firdaus',
        'age' : 24,
        'address' : 'Bandung',
        'hobbies' : ['Reading','Jogging'],
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
                            level : 'beginner'
                        },
                    ],
        "interest_in_coding" : true
    }
};

console.log(myBiodata());
