// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};


export const projects = async (args: string[]): Promise<string> => {
  return ` 
  Capital Educators - SAT/ACT Teacher
  \tProfessionally taught small, skill level separated
  \tgroups of high schoolers comprehensive strategies 
  \tand required knowledge for use on the SAT and ACT.

  \tResponsible for communication to parents,
  \tstudents, and inter-departmental organizations.

  \t2021-Ongoing | Bethesda, MD 

  Evangelion
  \tDeveloped turn-key cross platform application (iOS, Android, Web)
  \tdesigned to assist local communities in planning rideshares,
  \torganize cultural events, host materials, and communicate.
  \tProgrammed using Dart and the Flutter framework and utilized 
  \tFirestore backend.

  \t2018-Ongoing | Mount Olive, NJ


  There's a lot more to be found on my resume <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.projects_url}" target="_blank">here</a></u>. Take a look!

  `;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
  /support/
  /trans/
  /programmers!/`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Segmentation Fault (Core Dumped). \nJust kidding! There aren't any folders that you'd want to access anyway.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ___  ___  ___  ________   _______           ________  ___  ___  ___  ___       ___  ________   
  |\\  \\|\\  \\|\\  \\|\\   ___  \\|\\  ___ \\         |\\   __  \\|\\  \\|\\  \\|\\  \\|\\  \\     |\\  \\|\\   __  \\  
  \\ \\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\   __/|        \\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\ \\  \\    \\ \\  \\ \\  \\|\\  \\ 
__ \\ \\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\_|/__       \\ \\   ____\\ \\   __  \\ \\  \\ \\  \\    \\ \\  \\ \\   ____\\
|\\  \\\\_\\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\_|\\ \\       \\ \\  \\___|\\ \\  \\ \\  \\ \\  \\ \\  \\____\\ \\  \\ \\  \\___|
\\ \\________\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\       \\ \\__\\    \\ \\__\\ \\__\\ \\__\\ \\_______\\ \\__\\ \\__\\   
\\|________|\\|_______|\\|__| \\|__|\\|_______|        \\|__|     \\|__|\\|__|\\|__|\\|_______|\\|__|\\|__|   
                                                                                                  
                                                                                
Hey! My name's June, a student at the University of Maryland, College Park.
I'm studying computer science, and graduating in 2024. Here's my portfolio!

Tips: Try using the "projects" command!

Type 'help' to see the list of available commands.
Type 'sumfetch' to display a summary of everything here (this one is cool!).
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
