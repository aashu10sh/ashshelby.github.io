package aashutosh

type AashutoshPudasaini struct {
	name                string
	dayOfBirthTimestamp int64
	email               string
}

func GetAashutosh() *AashutoshPudasaini {
	return &AashutoshPudasaini{
		name:                "Aashutosh Pudasaini",
		dayOfBirthTimestamp: 1086347591,
		email:               "pudasainiashutosh@gmail.com",
	}
}

func (a *AashutoshPudasaini) WorkExperience() []map[string]string {
	return []map[string]string{
		{"Jan 2023 - now": "Fellow at DWIT Software Club (softwareclub.deerwalk.edu.np)"},
		{"Mar 2023 - May 2023": "Technical Volunteer at Deerhack (deerhack.deerwalk.edu.np)"},
		{"Feb 2023 - Mar 2023": "Data Entry Clerk at HamroPay"},
		{"Jun 2022 - Aug 2023": "Laravel API Developer at skillhubltd.org"},
		{"Jun 2022 - Oct 2022": "Backend Developer with Flask."},
		{"May 2021 - Mar 2022": "President of DSS Coding Club"},
	}
}

func (a *AashutoshPudasaini) Education() []map[string]string {
	return []map[string]string{
		{"2023-now": "Deerwalk Institute of Technology - Bachelors in Computer Science and  Information Technology "},
		{"2020-2022": "Deerwalk Sifal School - Science High School Degree  Nepal Education Board (NEB)"},
	}
}

func (a *AashutoshPudasaini) Skills() []string {
	return []string{"HTML/CSS/JS", "SvelteKit - Learning", "Node.js", "Vite", "npm/yarn/pnpm", "Docker/k8s - Learning", "PWA", "SSR", "SPA", "GIT/CVS", "Web Sockets", "Firebase", "PHP", "MySQL/MongoDB/ORM", "Photoshop", "TypeScript", "NextJS", "Core Python", "Flask", "Django", "Laravel", "Golang", "MUX", "FastAPI", "Express.js", "C/C++", "Arduino", "ESP"}
}
