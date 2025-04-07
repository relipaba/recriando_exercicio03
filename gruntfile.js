module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJson('package.json'),
        sass: {
            dist:{
                options:{
                    style: 'compressed',
                },
                files:{
                    'dist/styles/main.css': 'src/styles/main.scss'
                }
            }
        },
    watch:{
        sass:{
            files: " src/styles/**/*.scss",
            tasks: ['sass']
        }
    }
    })

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('frunt-contrib-watch');

    grunt.registerTasks('default', ['sass', 'watch']);
}