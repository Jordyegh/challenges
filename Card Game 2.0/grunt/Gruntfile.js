module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      dist: {
        files: {
          "../build/css/main.css": "../assets/sass/main.scss"
        }
      }
    },
    watch: {
      script: {
        files: ["../assets/sass/*.scss"],
        tasks: ["sass"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default",["watch"]);
}
