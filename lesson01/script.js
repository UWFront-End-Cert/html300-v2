        // SBA District Office Script
        document.getElementById("sbaDistrictForm").addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get the value entered in the state input field
            const state = document.getElementById("state").value;

            // Define a mapping for states that have a custom SBA district URL
            const customDistricts = {
                Washington: "seattle",
                Idaho: "boise",
                California: "fresno",
                Texas: "houston",
                Oregon: "portland",
                // Add more states and custom district URLs as needed
            };

            // Convert the entered state name to title case for matching
            const stateTitleCase = state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();

            // Construct the SBA district office URL based on the entered state
            const stateSlug = customDistricts[stateTitleCase] || state.replace(/\s/g, '-');
            const sbaDistrictURL = `https://www.sba.gov/district/${stateSlug}`;

            // Redirect the user to the SBA district office page
            window.location.href = sbaDistrictURL;

            // Display the result
            const resultContainer = document.getElementById("result");
            const sbaDistrictLink = document.getElementById("sbaDistrictLink");
            sbaDistrictLink.textContent = sbaDistrictURL;
            sbaDistrictLink.href = sbaDistrictURL;
            resultContainer.style.display = "block";
        });

        // Score Script
        document.getElementById("cityForm").addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the form from submitting

            // Get the city entered by the user
            const city = document.getElementById("cityInput").value;

            // Construct the URL based on the entered city
            const url = `https://www.score.org/${city}`;

            // Redirect to the SCORE website for the specified city
            window.location.href = url;
        });

        // USDA State Locator Site
        function redirectToUSDAWebsite() {
            const stateInput = document.getElementById("stateInput");
            const enteredState = stateInput.value;

            // Convert the entered state to lowercase and replace spaces with dashes
            const stateParam = enteredState.toLowerCase().replace(/\s/g, '-');

            // Construct the USDA website URL
            const usdaURL = `https://www.fsa.usda.gov/state-offices/${stateParam}/index`;

            // Display the link
            const usdaWebsiteLink = document.getElementById("usdaWebsiteLink");
            usdaWebsiteLink.innerHTML = `<a href="${usdaURL}">Visit USDA Website for ${enteredState}</a>`;
        }

        // Email Sign-Up
        document.getElementById("emailSignUpForm").addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get the user's email address
            const email = document.getElementById("email").value;

            // Display the confirmation message 
            const signupConfirmation = document.getElementById("signupConfirmation");
            signupConfirmation.style.display = "block";
            signupConfirmation.innerHTML = `<p><strong>You are now signed up with the email: ${email}</strong></p>`;
});