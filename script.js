/* JS File contains JavaScript code */
function checkAnswers() { /* Defines checkAnswers function that checks user's answers */
        var correctAnswers = 0; /* Initializes counter for correct answers to 0 */

        // Check question1
        var options1 = document.querySelectorAll('input[name="answer1"]'); /* Selects all radio buttons for first question */
        for (var i = 0; i < options1.length; i++) { /* Loops through all radio buttons */
            if (options1[i].checked) { /* Checks if radio button is selected using checked property */
                if (options1[i].value === 'Paris') { /* Checks if radio button value is 'Paris', which is correct answer for this question */
                    correctAnswers++; /* If it is, increments counter for correct answers */
                }
                break; /* Breaks out of loop because it has found a selected radio button */
            }
        }

        // Check question2
        var options2 = document.querySelectorAll('input[name="answer2"]'); /* Selects all radio buttons for second question */
        for (var i = 0; i < options2.length; i++) { /* Loops through all radio buttons */
            if (options2[i].checked) { /* Checks if radio button is selected using checked property */
                if (options2[i].value === 'Ireland') { /* Checks if radio button value is 'Ireland', which is correct answer for this question */
                    correctAnswers++; /* If it is, increments counter for correct answers */
                }
                break; /* Breaks out of loop because it has found a selected radio button */
            }
        }
		
		// Check question3
        var options3 = document.querySelectorAll('input[name="answer3"]'); 
        for (var i = 0; i < options3.length; i++) { 
            if (options3[i].checked) { 
                if (options3[i].value === 'Greenland') { 
                    correctAnswers++; 
                }
                break; 
            }
        }
		
		// Check question4
        var options4 = document.querySelectorAll('input[name="answer4"]'); 
        for (var i = 0; i < options4.length; i++) { 
            if (options4[i].checked) { 
                if (options4[i].value === 'Wellington') { 
                    correctAnswers++; 
                }
                break; 
            }
        }
		
		// Check question5
        var options5 = document.querySelectorAll('input[name="answer5"]');
        for (var i = 0; i < options5.length; i++) { 
            if (options5[i].checked) { 
                if (options5[i].value === 'Canada') { 
                    correctAnswers++; 
                }
                break; 
            }
        }
		
		// Check question6
        var options6 = document.querySelectorAll('input[name="answer6"]');
        for (var i = 0; i < options6.length; i++) {
            if (options6[i].checked) { 
                if (options6[i].value === '3') {
                    correctAnswers++; 
                }
                break; 
            }
        }
		// Check question7
        var options7 = document.querySelectorAll('input[name="answer7"]');
        for (var i = 0; i < options7.length; i++) {
            if (options7[i].checked) { 
                if (options7[i].value === 'Hawaii') {
                    correctAnswers++; 
                }
                break; 
            }
        }

		// Check question8
        var options8 = document.querySelectorAll('input[name="answer8"]');
        for (var i = 0; i < options8.length; i++) {
            if (options8[i].checked) { 
                if (options8[i].value === 'TheNorthernHemisphere') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question9
        var options9 = document.querySelectorAll('input[name="answer9"]');
        for (var i = 0; i < options9.length; i++) {
            if (options9[i].checked) { 
                if (options9[i].value === 'Sicily') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question10
        var options10 = document.querySelectorAll('input[name="answer10"]');
        for (var i = 0; i < options10.length; i++) {
            if (options10[i].checked) { 
                if (options10[i].value === 'Brasilia') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question11
        var options11 = document.querySelectorAll('input[name="answer11"]');
        for (var i = 0; i < options11.length; i++) {
            if (options11[i].checked) { 
                if (options11[i].value === 'MountFuji') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question12
        var options12 = document.querySelectorAll('input[name="answer12"]');
        for (var i = 0; i < options12.length; i++) {
            if (options12[i].checked) { 
                if (options12[i].value === 'MapleLeaf') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question13
        var options13 = document.querySelectorAll('input[name="answer13"]');
        for (var i = 0; i < options13.length; i++) {
            if (options13[i].checked) { 
                if (options13[i].value === 'Antarctica') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question14
        var options14 = document.querySelectorAll('input[name="answer14"]');
        for (var i = 0; i < options14.length; i++) {
            if (options14[i].checked) { 
                if (options14[i].value === 'Germany') {
                    correctAnswers++; 
                }
                break;
            }
        }
		
		// Check question15
        var options15 = document.querySelectorAll('input[name="answer15"]');
        for (var i = 0; i < options15.length; i++) {
            if (options15[i].checked) { 
                if (options15[i].value === 'Tokyo') {
                    correctAnswers++; 
                }
                break;
            }
        }

        // Display the result
		var result = document.querySelector('.result'); /* Selects div element with "result" class */
		result.textContent = 'You got ' + correctAnswers + ' out of 15 questions correct!'; /* Displays quiz result in div element */
}