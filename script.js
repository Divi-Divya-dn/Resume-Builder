/* ==========================================
   GET HTML ELEMENTS
========================================== */

const resumeForm = document.getElementById("resumeForm");
const resumeOutput = document.getElementById("resumeOutput");

const employmentContainer =
    document.getElementById("employmentContainer");

const addEmploymentButton =
    document.getElementById("addEmployment");


/* ==========================================
   ESCAPE HTML
   Protects user-entered text
========================================== */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ==========================================
   BULLET LIST FUNCTION
========================================== */

function createBulletList(text) {

    if (!text.trim()) {
        return "<p>Not provided.</p>";
    }

    const items = text
        .split(/,|\n/)
        .map(function (item) {
            return item.trim();
        })
        .filter(function (item) {
            return item !== "";
        });

    if (items.length === 0) {
        return "<p>Not provided.</p>";
    }

    return `
        <ul class="skills-list">
            ${items.map(function (item) {
                return `<li>${escapeHTML(item)}</li>`;
            }).join("")}
        </ul>
    `;
}


/* ==========================================
   AUTOMATIC PERCENTAGE CALCULATION
========================================== */

function calculatePercentage(
    marksId,
    totalId,
    percentageId
) {

    const marksInput =
        document.getElementById(marksId);

    const totalInput =
        document.getElementById(totalId);

    const percentageInput =
        document.getElementById(percentageId);


    function calculate() {

        const obtained =
            Number(marksInput.value);

        const total =
            Number(totalInput.value);


        if (
            obtained >= 0 &&
            total > 0 &&
            obtained <= total
        ) {

            const percentage =
                (obtained / total) * 100;

            percentageInput.value =
                percentage.toFixed(2) + "%";

        } else {

            percentageInput.value = "";
        }
    }


    marksInput.addEventListener(
        "input",
        calculate
    );

    totalInput.addEventListener(
        "input",
        calculate
    );
}


/* ==========================================
   ACTIVATE PERCENTAGE CALCULATOR
========================================== */

calculatePercentage(
    "schoolMarks",
    "schoolTotal",
    "schoolPercentage"
);

calculatePercentage(
    "pucMarks",
    "pucTotal",
    "pucPercentage"
);


/* ==========================================
   ADD EMPLOYMENT
========================================== */

addEmploymentButton.addEventListener(
    "click",
    function () {

        const employmentEntry =
            document.createElement("div");

        employmentEntry.className =
            "employment-entry";


        employmentEntry.innerHTML = `

            <label>Company Name</label>

            <input
                type="text"
                class="company"
                placeholder="Enter company name">


            <label>Job Title</label>

            <input
                type="text"
                class="jobTitle"
                placeholder="Example: Software Developer">


            <label>Duration</label>

            <input
                type="text"
                class="employmentDuration"
                placeholder="Example: January 2026 - March 2026">


            <label>Job Description</label>

            <textarea
                class="jobDescription"
                placeholder="Describe your work and responsibilities"></textarea>


            <button
                type="button"
                class="removeEmployment">

                Remove Employment

            </button>
        `;


        employmentContainer.appendChild(
            employmentEntry
        );
    }
);


/* ==========================================
   REMOVE EMPLOYMENT
========================================== */

employmentContainer.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "removeEmployment"
            )
        ) {

            event.target
                .closest(".employment-entry")
                .remove();
        }
    }
);


/* ==========================================
   FORM SUBMIT
========================================== */

resumeForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* -------------------------------
           PERSONAL VALIDATION
        -------------------------------- */

        const fullName =
            document.getElementById("fullName")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const phone =
            document.getElementById("phone")
                .value.trim();


        if (fullName === "") {

            alert("Please enter your full name.");

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        const phonePattern =
            /^[0-9]{10}$/;


        if (!phonePattern.test(phone)) {

            alert(
                "Please enter a valid 10 digit phone number."
            );

            return;
        }


        /* -------------------------------
           SCHOOL MARK VALIDATION
        -------------------------------- */

        const schoolMarks =
            Number(
                document.getElementById(
                    "schoolMarks"
                ).value
            );

        const schoolTotal =
            Number(
                document.getElementById(
                    "schoolTotal"
                ).value
            );


        if (
            schoolTotal > 0 &&
            schoolMarks > schoolTotal
        ) {

            alert(
                "School obtained marks cannot be greater than total marks."
            );

            return;
        }


        /* -------------------------------
           PUC MARK VALIDATION
        -------------------------------- */

        const pucMarks =
            Number(
                document.getElementById(
                    "pucMarks"
                ).value
            );

        const pucTotal =
            Number(
                document.getElementById(
                    "pucTotal"
                ).value
            );


        if (
            pucTotal > 0 &&
            pucMarks > pucTotal
        ) {

            alert(
                "PUC obtained marks cannot be greater than total marks."
            );

            return;
        }


        /* =================================
           GET PERSONAL INFORMATION
        ================================= */

        const objective =
            document.getElementById(
                "objective"
            ).value.trim();

        const address =
            document.getElementById(
                "address"
            ).value.trim();

        const dob =
            document.getElementById(
                "dob"
            ).value;

        const gender =
            document.getElementById(
                "gender"
            ).value;


        /* =================================
           GET EDUCATION
        ================================= */

        const schoolName =
            document.getElementById(
                "schoolName"
            ).value.trim();

        const schoolYear =
            document.getElementById(
                "schoolYear"
            ).value.trim();

        const schoolPercentage =
            document.getElementById(
                "schoolPercentage"
            ).value;


        const pucName =
            document.getElementById(
                "pucName"
            ).value.trim();

        const pucYear =
            document.getElementById(
                "pucYear"
            ).value.trim();

        const pucPercentage =
            document.getElementById(
                "pucPercentage"
            ).value;


        const degreeName =
            document.getElementById(
                "degreeName"
            ).value.trim();

        const degreeCourse =
            document.getElementById(
                "degreeCourse"
            ).value.trim();

        const degreeYear =
            document.getElementById(
                "degreeYear"
            ).value.trim();

        const degreeMarks =
            document.getElementById(
                "degreeMarks"
            ).value.trim();

        const degreePercentage =
            document.getElementById(
                "degreePercentage"
            ).value.trim();


        /* =================================
           OTHER QUALIFICATION
        ================================= */

        const otherQualification =
            document.getElementById(
                "otherQualification"
            ).value.trim();

        const otherInstitution =
            document.getElementById(
                "otherInstitution"
            ).value.trim();

        const otherYear =
            document.getElementById(
                "otherYear"
            ).value.trim();

        const otherMarks =
            document.getElementById(
                "otherMarks"
            ).value.trim();


        /* =================================
           OTHER DETAILS
        ================================= */

        const technicalSkills =
            document.getElementById(
                "technicalSkills"
            ).value;

        const softSkills =
            document.getElementById(
                "softSkills"
            ).value;

        const languages =
            document.getElementById(
                "languages"
            ).value;

        const hobbies =
            document.getElementById(
                "hobbies"
            ).value;

        const certifications =
            document.getElementById(
                "certifications"
            ).value;

        const achievements =
            document.getElementById(
                "achievements"
            ).value;

        const declaration =
            document.getElementById(
                "declaration"
            ).value.trim();


        /* =================================
           PROFILE PHOTO
        ================================= */

        const photoInput =
            document.getElementById("photo");

        let photoHTML = "";


        if (
            photoInput.files &&
            photoInput.files.length > 0
        ) {

            const photoURL =
                URL.createObjectURL(
                    photoInput.files[0]
                );


            photoHTML = `
                <img
                    src="${photoURL}"
                    alt="Profile Photo"
                    class="resume-photo">
            `;
        }


        /* =================================
           CREATE SKILL LISTS
        ================================= */

        const technicalSkillsList =
            createBulletList(
                technicalSkills
            );

        const softSkillsList =
            createBulletList(
                softSkills
            );

        const languagesList =
            createBulletList(
                languages
            );

        const hobbiesList =
            createBulletList(
                hobbies
            );

        const certificationsList =
            createBulletList(
                certifications
            );

        const achievementsList =
            createBulletList(
                achievements
            );


        /* =================================
           EDUCATION TABLE
        ================================= */

        let educationRows = "";


        if (
            schoolName ||
            schoolYear ||
            schoolMarks ||
            schoolPercentage
        ) {

            educationRows += `

                <tr>

                    <td>School</td>

                    <td>${escapeHTML(schoolName || "-")}</td>

                    <td>${escapeHTML(schoolYear || "-")}</td>

                    <td>
                        ${schoolMarks || "-"}
                        /
                        ${schoolTotal || "-"}
                    </td>

                    <td>
                        ${escapeHTML(schoolPercentage || "-")}
                    </td>

                </tr>
            `;
        }


        if (
            pucName ||
            pucYear ||
            pucMarks ||
            pucPercentage
        ) {

            educationRows += `

                <tr>

                    <td>PUC / 12th</td>

                    <td>${escapeHTML(pucName || "-")}</td>

                    <td>${escapeHTML(pucYear || "-")}</td>

                    <td>
                        ${pucMarks || "-"}
                        /
                        ${pucTotal || "-"}
                    </td>

                    <td>
                        ${escapeHTML(pucPercentage || "-")}
                    </td>

                </tr>
            `;
        }


        if (
            degreeName ||
            degreeCourse ||
            degreeYear ||
            degreeMarks ||
            degreePercentage
        ) {

            educationRows += `

                <tr>

                    <td>
                        ${escapeHTML(
                            degreeCourse || "Degree"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            degreeName || "-"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            degreeYear || "-"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            degreeMarks || "-"
                        )}
                    </td>

                    <td>
                        ${escapeHTML(
                            degreePercentage || "-"
                        )}
                    </td>

                </tr>
            `;
        }


        if (educationRows === "") {

            educationRows = `
                <tr>
                    <td colspan="5">
                        Education details not provided.
                    </td>
                </tr>
            `;
        }


        /* =================================
           EMPLOYMENT HISTORY
        ================================= */

        const employmentEntries =
            document.querySelectorAll(
                ".employment-entry"
            );


        let employmentHTML = "";


        employmentEntries.forEach(
            function (entry) {

                const company =
                    entry.querySelector(
                        ".company"
                    ).value.trim();

                const jobTitle =
                    entry.querySelector(
                        ".jobTitle"
                    ).value.trim();

                const duration =
                    entry.querySelector(
                        ".employmentDuration"
                    ).value.trim();

                const description =
                    entry.querySelector(
                        ".jobDescription"
                    ).value.trim();


                if (
                    company ||
                    jobTitle ||
                    duration ||
                    description
                ) {

                    employmentHTML += `

                        <div class="employment-item">

                            <h3>
                                ${escapeHTML(
                                    jobTitle ||
                                    "Job Title"
                                )}
                            </h3>

                            <p>
                                <strong>
                                    ${escapeHTML(
                                        company ||
                                        "Company"
                                    )}
                                </strong>
                            </p>

                            <p>
                                ${escapeHTML(
                                    duration || ""
                                )}
                            </p>

                            <p>
                                ${escapeHTML(
                                    description || ""
                                )}
                            </p>

                        </div>
                    `;
                }
            }
        );


        if (employmentHTML === "") {

            employmentHTML =
                "<p>Not provided.</p>";
        }


        /* =================================
           OTHER QUALIFICATION HTML
        ================================= */

        let otherQualificationHTML =
            "<p>Not provided.</p>";


        if (
            otherQualification ||
            otherInstitution ||
            otherYear ||
            otherMarks
        ) {

            otherQualificationHTML = `

                <p>
                    <strong>
                        ${escapeHTML(
                            otherQualification ||
                            "Qualification"
                        )}
                    </strong>
                </p>

                <p>
                    Institution:
                    ${escapeHTML(
                        otherInstitution || "-"
                    )}
                </p>

                <p>
                    Year:
                    ${escapeHTML(
                        otherYear || "-"
                    )}
                </p>

                <p>
                    Marks / Grade:
                    ${escapeHTML(
                        otherMarks || "-"
                    )}
                </p>
            `;
        }


        /* =================================
           PERSONAL DETAILS HTML
        ================================= */

        let personalDetailsHTML = "";


        if (dob) {

            personalDetailsHTML += `
                <p>
                    <strong>Date of Birth:</strong>
                    ${escapeHTML(dob)}
                </p>
            `;
        }


        if (gender) {

            personalDetailsHTML += `
                <p>
                    <strong>Gender:</strong>
                    ${escapeHTML(gender)}
                </p>
            `;
        }


        if (personalDetailsHTML === "") {

            personalDetailsHTML =
                "<p>Not provided.</p>";
        }


        /* =================================
           GENERATE RESUME
        ================================= */

        resumeOutput.innerHTML = `

            <!-- Resume Header -->

            <div class="resume-header">

                ${photoHTML}

                <h1>
                    ${escapeHTML(fullName)}
                </h1>

                <p>
                    ${escapeHTML(email)}
                </p>

                <p>
                    ${escapeHTML(phone)}
                </p>

                ${
                    address
                    ? `<p>${escapeHTML(address)}</p>`
                    : ""
                }

            </div>


            <!-- Career Objective -->

            <div class="resume-section">

                <h2>
                    Career Objective
                </h2>

                <p>
                    ${
                        objective
                        ? escapeHTML(objective)
                        : "Not provided."
                    }
                </p>

            </div>


            <!-- Personal Details -->

            <div class="resume-section">

                <h2>
                    Personal Details
                </h2>

                ${personalDetailsHTML}

            </div>


            <!-- Education -->

            <div class="resume-section">

                <h2>
                    Educational Qualifications
                </h2>

                <table class="education-table">

                    <thead>

                        <tr>

                            <th>
                                Qualification
                            </th>

                            <th>
                                Institution
                            </th>

                            <th>
                                Year
                            </th>

                            <th>
                                Marks
                            </th>

                            <th>
                                Percentage
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        ${educationRows}

                    </tbody>

                </table>

            </div>


            <!-- Other Qualification -->

            <div class="resume-section">

                <h2>
                    Other Qualifications
                </h2>

                ${otherQualificationHTML}

            </div>


            <!-- Employment -->

            <div class="resume-section">

                <h2>
                    Employment History
                </h2>

                ${employmentHTML}

            </div>


            <!-- Technical Skills -->

            <div class="resume-section">

                <h2>
                    Technical Skills
                </h2>

                ${technicalSkillsList}

            </div>


            <!-- Soft Skills -->

            <div class="resume-section">

                <h2>
                    Soft Skills
                </h2>

                ${softSkillsList}

            </div>


            <!-- Certifications -->

            <div class="resume-section">

                <h2>
                    Certifications
                </h2>

                ${certificationsList}

            </div>


            <!-- Achievements -->

            <div class="resume-section">

                <h2>
                    Achievements
                </h2>

                ${achievementsList}

            </div>


            <!-- Languages -->

            <div class="resume-section">

                <h2>
                    Languages
                </h2>

                ${languagesList}

            </div>


            <!-- Hobbies -->

            <div class="resume-section">

                <h2>
                    Hobbies
                </h2>

                ${hobbiesList}

            </div>


            <!-- Declaration -->

            <div class="resume-section">

                <h2>
                    Declaration
                </h2>

                <p>
                    ${
                        declaration
                        ? escapeHTML(declaration)
                        : "Not provided."
                    }
                </p>

            </div>


            <!-- Print Button -->

            <button
                type="button"
                class="print-button"
                onclick="window.print()">

                Print / Save as PDF

            </button>

        `;


        /* =================================
           SCROLL TO GENERATED RESUME
        ================================= */

        resumeOutput.scrollIntoView({
            behavior: "smooth"
        });

    }
);


/* ==========================================
   CLEAR FORM
========================================== */

resumeForm.addEventListener(
    "reset",
    function () {

        setTimeout(
            function () {

                resumeOutput.innerHTML = "";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            },
            0
        );
    }
);