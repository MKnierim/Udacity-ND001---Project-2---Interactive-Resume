var bio = {
	"name" : "Michael Knierim",
	"role" : "Web Development Learner Resumé",
	"contacts" : {
		"mobile" : "+49-151-59410144",
		"email" : "contact@michaelknierim.info",
		"github" : "https://github.com/MKnierim",
		"location" : "Mainz, Germany"
	},
	"skills" : ["HTML", "CSS", "JavaScript", "VBA", "Python", "Photoshop"],
	"welcomeMessage" : "Welcome to my online resume!",
	"bioPic" : "http://photography.michaelknierim.de/images/mk-bw-1.jpg",
	"display" : function() {
		//Display name, title, bioPic and welcomeMsg in header
		// $("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(HTMLheaderRole.replace("%data%",bio.role));

		//Display contact data in header
		$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace(/%data%/g,bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace(/%data%/g,bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

		//Display contact data in footer
		$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace(/%data%/g,bio.contacts.email));

		//Display skills
		if(bio.skills != []){
			$("#skillsInfo").append(HTMLskillsStart);
		}

		for(skill in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
		}
	}
}

var work = {
	"edp" : [
		{
			"title" : "Web developer",
			"employer" : "Self-employed",
			"duration" : "01/2015 - Today",
			"location" : "Mainz, Germany",
			"description" : "I develop and create websites and web applications. At this point mostly simple projects to further deepen my understanding of the technologies. Bigger projects are lying ahead."
		},
		{
			"title" : "Working student",
			"employer" : "juwi Technologies GmbH",
			"duration" : "07/2012 - 08/2013",
			"location" : "Woerrstadt, Germany",
			"description" : "I developped databases for commercial processes and a tool for a SWOT-analysis."
		}
	],
	"display" : function() {
		for(job in work.edp){
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.edp[job].employer)+HTMLworkTitle.replace("%data%",work.edp[job].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.edp[job].duration));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.edp[job].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.edp[job].description));
		}
	}
}

var projects = {
	"web" : [
		{
			"title" : "Kniebook",
			"dates" : "05/2015 - Today",
			"url" : "http://www.kniebook.de",
			"description" : "I created my first web app, a facebook clone just for my family. Up to now it features a calendar function to organize my family's events.",
			"images" : ["images/knb-1.jpg", "images/knb-2.jpg"]
		},
		{
			"title" : "Photography Portfolio",
			"dates" : "03/2015 - Today",
			"url" : "http://photography.michaelknierim.de",
			"description" : "I created a simple portfolio to showcase my work as a self-employed photographer. The website was built upon the bootstrap framework.",
			"images" : ["images/pho-1.jpg", "images/pho-2.jpg"]
		},
		{
			"title" : "Travel Blog Montpellier",
			"dates" : "10/2013 - Today",
			"url" : "http://france.michaelknierim.de",
			"description" : "I created a blog to write about my experiences during a semester abroad in Montpellier, France. The blog was created using the wordpress CMS and a preset layout which was individualized by me. The content featured photos I took on my travels and articulated experiences in text.",
			"images" : ["images/mtp-1.jpg", "images/mtp-2.jpg"]
		}
	],
	"display" : function() {
		for(project in projects["web"]){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects["web"][project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects["web"][project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects["web"][project].description));
			// $(".project-entry:last").append(HTMLprojectURL.replace("%data%",projects["web"][project].url));
			// $(".project-url:last").append(HTMLprojectImage.replace("%data%",projects["web"][project].image));
			
			// Loop through the image array to capture all images for a project
			for (image in projects["web"][project].images) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects["web"][project].images[image]));
			}
		}
	}
}

var education = {
	"schools" :
		[	
			{
				"name" : "Johannes Gutenberg-University",
				"location" : "Mainz, Germany",
				"degree" : "Master of Science",
				"major" : "International marketing & management",
				"duration" : "04/2012 - 11/2014"
			},
			{
				"name" : "Université Montpellier 1 - ISEM",
				"location" : "Montpellier, France",
				"degree" : "Master of Science",
				"major" : "International marketing & management",
				"duration" : "04/2012 - 11/2014"
			},
			{
				"name" : "Johannes Gutenberg-University",
				"location" : "Mainz, Germany",
				"degree" : "Bachelor of Science",
				"major" : "Marketing, management and business informatics",
				"duration" : "10/2008 - 04/2012"
			}
		],
	"courses" :
		[	
			{
				"institution" : "Udacity",
				"course" : "Web development",
				"duration" : "04/2015 - Today",
				"curriculum" : "https://www.udacity.com/course/web-development--cs253"
			},
			{
				"institution" : "Udacity",
				"course" : "Intro to jQuery",
				"duration" : "05/2015 - 05/2015",
				"curriculum" : "https://www.udacity.com/course/intro-to-jquery--ud245"
			},
			{
				"institution" : "Udacity",
				"course" : "JavaScript Basics",
				"duration" : "05/2015 - 05/2015",
				"curriculum" : "https://www.udacity.com/course/javascript-basics--ud804"
			},
			{
				"institution" : "Udacity",
				"course" : "Responsive web design fundamentals",
				"duration" : "04/2015 - 05/2015",
				"curriculum" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
			},
			{
				"institution" : "Udacity",
				"course" : "Responsive images",
				"duration" : "04/2015 - 05/2015",
				"curriculum" : "https://www.udacity.com/course/responsive-images--ud882"
			},
			{
				"institution" : "Udacity",
				"course" : "Intro to HTML and CSS",
				"duration" : "04/2015 - 04/2015",
				"curriculum" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
			},
			{
				"institution" : "Udacity",
				"course" : "Programming foundations with python",
				"duration" : "02/2015 - 03/2015",
				"curriculum" : "https://www.udacity.com/course/programming-foundations-with-python--ud036"
			},
			{
				"institution" : "Udacity",
				"course" : "How to use git and github",
				"duration" : "02/2015 - 03/2015",
				"curriculum" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
			},
			{
				"institution" : "Udacity",
				"course" : "Intro to computer science",
				"duration" : "01/2015 - 02/2015",
				"curriculum" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
			}
		],
	"displaySchools" : function() {
		for(school in education.schools){
			$("#educationSchools").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name)+HTMLschoolDegree.replace("%data%",education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].duration));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));			
		}
	},
	"displayCourses" : function() {
		for(school in education.courses){
			$("#educationCourses").append(HTMLcoursesStart);
			$(".courses-entry:last").append(HTMLschoolName.replace("%data%",education.courses[school].institution)+HTMLschoolDegree.replace("%data%",education.courses[school].course));
			$(".courses-entry:last").append(HTMLschoolDates.replace("%data%",education.courses[school].duration));
			$(".courses-entry:last").append(HTMLcourseCurriculum.replace(/%data%/g,education.courses[school].curriculum));
		}
	}
}

//Run functions to display chosen content
bio.display();
work.display();
projects.display();
education.displayCourses();
$("#mapDiv").append(googleMap);

// The display of schools was commented out because I did not want to include it in the displayed resume at this time.
// education.displaySchools();