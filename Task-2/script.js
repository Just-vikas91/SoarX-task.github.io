document.addEventListener('DOMContentLoaded', function() {
            var form = document.getElementById('registrationForm');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                var formData = {
                    name: form.name.value,
                    email: form.email.value,
                    contact: form.contact.value,
                    college: form.college.value,
                    branch: form.branch.value,
                    year: form.year.value
                };

                // Replace with your actual Google Apps Script Web App URL
                var scriptURL = 'https://script.google.com/macros/s/AKfycbyrafWU0TPAyck-YUQboIQ06o_B53_fRDZhxsNM-WkhEse7PwVMuF_UYx_HTksygLF3QQ/exec';
                
                fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(function() {
                    alert('Registration Successful!');
                    form.reset();
                })
                .catch(function(error) {
                    console.error('Error!', error);
                    alert('Registration failed. Please try again.');
                });
            });
        });