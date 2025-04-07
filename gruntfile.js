module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJson('package.json'),
        sass:{
            dsit:{
                options:{
                    style: 'compressed'
                },
                files:{
                'dist/styles/main.css': 'src/styles/main.css'
            }
            }
        },
        watch:{
            sass:{
                files: "src/styles/**/*.scss",
                tasks: ['sass']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['sass', 'watch']);
}