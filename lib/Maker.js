const path = require("path");
const fs = require("fs");
const pages = path.resolve(__dirname, "../src");


const emps = employees => {
    const html = [];
    // Thanks to scott casey for helping me fix this with ... 
    html.push(...employees.filter(employee => employee.getRole() === "Manager").map(manager => rManager(manager)));
    html.push(...employees.filter(employee => employee.getRole() === "Engineer").map(engineer => rEngineer(engineer)));
    html.push(...employees.filter(employee => employee.getRole() === "Intern").map(intern => rIntern(intern)));
    return render(html.join(""));
};

const rManager = manager => {
    let page = fs.readFileSync(path.resolve(pages,"manager.html"), "utf8");
    page = replaceItems(page, "name", manager.getName());
    page = replaceItems(page, "role", manager.getRole());
    page = replaceItems(page, "id", manager.getId());
    page = replaceItems(page, "email", manager.getEmail());
    page = replaceItems(page, "officeNumber", manager.getOfficeNumber());
    return page;
};

const rEngineer = engineer => {
    let page = fs.readFileSync(path.resolve(pages, "engineer.html"), "utf8");
    page = replaceItems(page, "name", engineer.getName());
    page = replaceItems(page, "role", engineer.getRole());
    page = replaceItems(page, "id", engineer.getId());
    page = replaceItems(page, "email", engineer.getEmail());
    page = replaceItems(page, "github", engineer.getGithub());
    return page;
};

const rIntern = intern => {
    let page = fs.readFileSync(path.resolve(pages, "intern.html"), "utf8");
    page = replaceItems(page, "name", intern.getName());
    page = replaceItems(page, "role", intern.getRole());
    page = replaceItems(page, "id", intern.getId());
    page = replaceItems(page, "email", intern.getEmail());
    page = replaceItems(page, "school", intern.getSchool());
    return page;
};

const render = html => {
    const page = fs.readFileSync(path.resolve(pages, "main.html"), "utf8");
    return replaceItems(page, "team", html);
};

const replaceItems = (page, replaced, value) => {
    const items = new RegExp("// " + replaced + " //", "gm");
    return page.replace(items, value);
};

module.exports = emps;