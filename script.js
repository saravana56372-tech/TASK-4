let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function addJob() {
  let job = {
    title: document.getElementById("title").value,
    company: document.getElementById("company").value,
    location: document.getElementById("location").value
  };

  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  alert("Job Posted Successfully");
}

function showJobs() {
  let jobList = document.getElementById("jobList");
  if (!jobList) return;

  jobList.innerHTML = "";
  jobs.forEach(job => {
    jobList.innerHTML += `
      <div>
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <button>Apply</button>
      </div>
    `;
  });
}

showJobs();
