const baseUrl = "https://danielleipson.github.io/wdd230/"
const linksUrl = "https://danielleipson.github.io/wdd230/data/links.json"

async function getLinks() {
    const links = await fetch(linksUrl);
    const data = await links.json();
    displayLinks(data.lessons);
}

sessions = document.getElementById("session");

function displayLinks(weeks) {
    weeks.forEach(week => {
        const list = document.createElement("li");

        if (week.links.length === 1) {
            const activity = week.links[0];
            list.innerHTML = `<a href="${activity.url}">Week ${week.lesson}: ${activity.title}</a>`;
        } else if (week.links.length > 1) {
            const weekMultiple = document.createElement("span");
            weekMultiple.textContent = `Week ${week.lesson}: `;
            list.appendChild(weekMultiple);
            weekMultiple.style.color = "white";

            week.links.forEach((activity, index) => {

                const anchor = document.createElement("a");
                anchor.href = `${activity.url}`;
                anchor.textContent = activity.title;

                list.appendChild(anchor);


                // add bar | between activities
                if (index < week.links.length - 1) {
                    const bar = document.createElement("span");
                    bar.textContent = " | ";
                    bar.style.color = "black";
                    list.appendChild(bar);
                }
            });

            list.classList.add("multiple");
        }

        sessions.appendChild(list);
    });
}

/**
 * li
 *  <a>Activity 1</a> | <a>Activity 2</a>
 */
getLinks()