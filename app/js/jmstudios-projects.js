(function(){
    var app = angular.module('jmstudios-app.projects',['ngParallax'])
    .directive('projects', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/projects.html",
            controller: "Projects"
        };
    })
    .controller('Projects', function($scope, $http) {

        $scope.tempProjects = "hello projects";
        $scope.currentProjects = [{
            name: "Vote Smart Locally",
            description: "A voting information tool to inform voters of their local elections and who is running for them, their supporters, what their plan is and their goals to inform voters of their local elections.",
            problem: "Many people are not informed about their local elections, where they take place, on what date, what elected position, and who is running for the position.",
            references: [
                "site"
            ],
            solutions: [
                "A Web App/Mobile app using Google Civic API to gather local election information and who is running for the position.",
                "Find other APIs for information about person running for position campain funds and where they came from, their plan in the time of office, and party information."
            ],
            link:"",
            logo: "",
            position: 0,
            github: {
                icon: "mdi-github-circle small",
                link: ""
            }
        },
        {
            name: "StudyBuddy",
            description: "StudyBuddy is an educational tool focused on empowering students with the ability to quickly and efficiently answer computer science related questions. Powered by IBM's supercomputer Watson, StudyBuddy is the most powerful and advanced tool of its kind. StudyBuddy is entirely text based and in making it so we ensure that anyone who has a cellphone, not smartphone, can use our tool.",
            problem: "Every student needs a computer and internet to access Google to ask questions. Many services such as Google, Yahoo, Yelp, and many more have a one to many relationship, student asks one question recieves many related search results.",
            references: [
                "site"
            ],
            solutions: [
                "Text message based bot that only requires a phone to have SMS messaging capailities to learn the complex concepts of Computer Science, or any subject matter StudyBuddy could be trained in.",
                "Students as one question and recieve one answer if StudyBuddy knows the answer, if not StudyBuddy will store that unaswered question for the admins to answer later."
            ],
            link:"http://studybuddy.mybluemix.net/",
            logo: "",
            position: 1,
            github: {
                icon: "mdi-github-circle small",
                link: "https://github.com/JMStudiosJoe/StudyBuddyV2"
            }
        },
        {
            name: "Peterest",
            description: "Peterest is the Pinterest for you pets. Also acts as a animal lost and found using algorithms to match uploaded lost pet information with found pet information by your local community.",
            problem: "Every student needs a computer and internet to access Google to ask questions. Many services such as Google, Yahoo, Yelp, and many more have a one to many relationship, student asks one question recieves many related search results.",
            references: [
                "site"
            ],
            solutions: [
                "Text message based bot that only requires a phone to have SMS messaging capailities to learn the complex concepts of Computer Science, or any subject matter StudyBuddy could be trained in.",
                "Students as one question and recieve one answer if StudyBuddy knows the answer, if not StudyBuddy will store that unaswered question for the admins to answer later."
            ],
            link:"",
            logo: "",
            position: 2,
            github: {
                icon: "mdi-github-circle small",
                link: "https://github.com/JMStudiosJoe/Peterest"
            }
        },
        {
            name: "Jester",
            description: "Swift iOS A Jokes and Riddles app.",
            problem: "An app for bringing out the hidden Jester within you.",
            references: [
                "site"
            ],
            solutions: [
                "Get good at telling jokes",
                "Get better with riddles"
            ],
            link:"",
            logo: "",
            position: 2,
            github: {
                icon: "mdi-github-circle small",
                link: "https://github.com/JMStudiosJoe/Jester"
            }
        },
        {
            name: "ReelMash",
            description: "Mobile game matching celebrities through the media content they have starred in.",
            problem: "I am pretty bad at it.",
            references: [

            ],
            solutions: [

            ],
            link:"",
            logo: "",
            position: 3,
            github: {
                icon: "mdi-github-circle small",
                link: "#ReelMash"
            }
        }];
    });
})();
