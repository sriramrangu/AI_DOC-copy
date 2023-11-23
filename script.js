{/* <script src="https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js"></script> */ }
function getRecommendation() {
    // You can add your recommendation logic here
    // For this example, let's just display a static recommendation
    const recommendation = "Ibuprofen";

    // Display the recommendation
    document.getElementById("recommendation-result").innerHTML = `Recommended Medication: ${recommendation}`;
}

function startVoiceInput() {
    // Use Web Speech API for speech recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("medication-input").value = transcript;
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
}

function getRecommendation() {
    // You can add your recommendation logic here
    // For this example, let's just display a static recommendation
    const recommendation = "Ibuprofen";

    // Display the recommendation
    document.getElementById("recommendation-result").innerHTML = `Recommended Medication: ${recommendation}`;
}

function startVoiceInput() {
    // Use Web Speech API for speech recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("medication-input").value = transcript;
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
}

function handleImageInput(event) {
    const file = event.target.files[0];
    // You can add image analysis logic here
    console.log('Image uploaded:', file.name);
}

function startCameraInput() {
    const video = document.getElementById('video-preview');
    const cameraInput = document.getElementById('camera-input');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            video.style.display = 'block';
            cameraInput.style.display = 'none';
        })
        .catch(function (error) {
            console.error('Error accessing camera:', error);
        });
}

function handleCameraInput(event) {
    const video = document.getElementById('video-preview');
    const cameraInput = document.getElementById('camera-input');

    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());

    // You can add video analysis logic here
    console.log('Video captured');
    video.style.display = 'none';
    cameraInput.style.display = 'block';
}

function captureFromCamera() {
    showLoadingAnimation();

    // The camera capture logic goes here

    // For the sake of example, let's simulate a delay
    setTimeout(() => {
        hideLoadingAnimation();
        // Display a message or perform further actions
    }, 2000);
}

function captureFromCamera() {
    // Use getUserMedia to access the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            // Create a video element and set the stream as its source
            const video = document.createElement('video');
            video.srcObject = stream;
            document.body.appendChild(video);

            // Play the video
            video.play();

            // Capture an image from the video stream after a delay
            setTimeout(function () {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Stop the video stream
                video.srcObject.getTracks().forEach(track => track.stop());

                // Use Tesseract.js for OCR on the captured image
                Tesseract.recognize(
                    canvas,
                    'eng',
                    { logger: info => console.log(info) }
                ).then(({ data: { text } }) => {
                    // Display the recognized text in the input field
                    document.getElementById("medication-input").value = text.trim();
                    // Remove the video element
                    document.body.removeChild(video);
                });
            }, 1000); // Adjust the delay as needed
        })
        .catch(function (error) {
            console.error('Error accessing the camera:', error);
        });
}

function showUploadOptions() {
    // Hide the upload icon button
    document.getElementById('upload-options-button').style.display = 'none';

    // Show the camera and gallery buttons
    document.getElementById('camera-input-button').style.display = 'inline-block';
    document.getElementById('gallery-input-button').style.display = 'inline-block';
}

function selectFromGallery() {
    showLoadingAnimation();

    // The gallery selection logic goes here

    // For the sake of example, let's simulate a delay
    setTimeout(() => {
        hideLoadingAnimation();
        // Display a message or perform further actions
    }, 2000);
}

function captureFromCamera() {
    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Create a video element to display the camera feed
        var videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();
  
        // Create a canvas element to capture the image
        var canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
  
        // Capture the current frame from the video feed
        canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  
        // Stop the camera stream
        stream.getTracks().forEach(track => track.stop());
  
        // Convert the captured frame to a data URL
        var capturedImageURL = canvas.toDataURL('image/png');
  
        // Display the captured image or perform further processing
        displayCapturedImage(capturedImageURL);
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }
  
  // Function to display the captured image
  function displayCapturedImage(imageURL) {
    var recommendationResult = document.getElementById('recommendation-result');
    recommendationResult.innerHTML = '<img src="' + imageURL + '" alt="Captured Image">';
  }
  
  // Function to take video as input
  function startVideoInput() {
    // Access the user's camera for video input
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        // Create a video element to display the camera feed
        var videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();
  
        // Display the video element
        var recommendationResult = document.getElementById('recommendation-result');
        recommendationResult.innerHTML = '';
        recommendationResult.appendChild(videoElement);
      })
      .catch((error) => {
        console.error('Error accessing camera for video input:', error);
      });
  }

  // Add an event listener to call getChatGPTResponse when the recommendation button is clicked
document.getElementById('recommendation-button').addEventListener('click', getChatGPTResponse);


  const apiKey = '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';

// Function to send user input to ChatGPT and display the response
function getChatGPTResponse() {
  // Get user input from the input field
  const userInput = document.getElementById('medication-input').value;

  // Check if the input is not empty
  if (userInput.trim() !== '') {
    // Display loading message while waiting for the response
    document.getElementById('recommendation-result').innerHTML = 'Loading...';

    // Make a request to the OpenAI GPT-3 API
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: userInput,
        max_tokens: 150, // Adjust as needed
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Display the response in the recommendation result area
      const recommendationResult = document.getElementById('recommendation-result');
      recommendationResult.innerHTML = data.choices[0].text;
    })
    .catch(error => {
      console.error('Error fetching data from The Server:', error);
      document.getElementById('recommendation-result').innerHTML = 'An error occurred.';
    });
  } else {
    // Display a message if the input is empty
    document.getElementById('recommendation-result').innerHTML = 'Please enter your symptoms.';
  }
}

function showLoadingAnimation() {
    document.getElementById("loading-animation").style.display = 'block';
}

function hideLoadingAnimation() {
    document.getElementById("loading-animation").style.display = 'none';
}

function captureOrSelect() {
    // Prompt the user to choose between camera or gallery
    const choice = prompt("Choose source: 'camera' or 'gallery'");

    if (choice) {
        if (choice.toLowerCase() === 'camera') {
            captureFromCamera();
        } else if (choice.toLowerCase() === 'gallery') {
            selectFromGallery();
        } else {
            alert("Invalid choice. Please choose 'camera' or 'gallery'.");
        }
    }
}



// Capture from camara



// Add an event listener to call showCamera when the camera button is clicked
document.getElementById('camera-input-button').addEventListener('click', showCamera);

let videoStream; // To keep track of the video stream for later cleanup

// Function to initialize camera and display the capture button
function showCamera() {
  // Access the user's camera
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      videoStream = stream;

      // Create a video element to display the camera feed
      var videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      videoElement.play();

      // Display the video element
      var recommendationResult = document.getElementById('recommendation-result');
      recommendationResult.innerHTML = '';
      recommendationResult.appendChild(videoElement);

      // Add a capture button
      var captureButton = document.createElement('button');
      captureButton.innerText = 'Capture Image';
      captureButton.addEventListener('click', () => captureImage(videoElement));
      recommendationResult.appendChild(captureButton);
    })
    .catch((error) => {
      console.error('Error accessing camera:', error);
    });
}

// Function to capture an image from the camera
function captureImage(videoElement) {
  // Create a canvas element to capture the image
  var canvas = document.createElement('canvas');
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  // Capture the current frame from the video feed
  canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  // Convert the captured frame to a data URL
  var capturedImageURL = canvas.toDataURL('image/png');

  // Display the captured image or perform further processing
  displayCapturedImage(capturedImageURL);

  // Stop the camera stream to release resources
  stopCamera();
}

// Function to stop the camera stream
function stopCamera() {
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
  }
}

// Function to display the captured image
function displayCapturedImage(imageURL) {
  var recommendationResult = document.getElementById('recommendation-result');
  recommendationResult.innerHTML = '<img src="' + imageURL + '" alt="Captured Image">';
}


// selectFromGallery Function


// Add an event listener to call selectFromGallery when the gallery button is clicked
document.getElementById('gallery-input-button').addEventListener('click', selectFromGallery);

// Function to handle gallery input and fetch photos
function selectFromGallery() {
    // Create an input element of type file
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Allow only image files
  
    // Add an event listener for when a file is selected
    fileInput.addEventListener('change', function (event) {
      var selectedFile = event.target.files[0];
  
      if (selectedFile) {
        // Display the selected image as a small thumbnail in the input area
        displayThumbnailInInput(selectedFile);
  
        // Optionally, you can also perform further processing with the selected image
      } else {
        console.error('No file selected');
      }
    });
  
    // Trigger a click on the file input to open the file selection dialog
    fileInput.click();
  }
  
  // Function to display a small thumbnail in the input area
  function displayThumbnailInInput(selectedFile) {
    var inputArea = document.getElementById('medication-input');
    var recommendationResult = document.getElementById('recommendation-result');
  
    // Check if the selected file is an image
    if (selectedFile.type.startsWith('image/')) {
      // Create a FileReader to read the selected image
      var reader = new FileReader();
      reader.onload = function (e) {
        // Create an image element for the thumbnail
        var thumbnail = document.createElement('img');
        thumbnail.src = e.target.result;
        thumbnail.alt = 'Selected Image';
        thumbnail.classList.add('thumbnail');
  
        // Append the thumbnail to the input area
        inputArea.appendChild(thumbnail);
  
        // Add a paper clip symbol to the input area
        inputArea.innerHTML += ' <span class="paper-clip">&#128206;</span>';
  
        // Optionally, you can also hide the file input element
        // fileInput.style.display = 'none';
      };
      reader.readAsDataURL(selectedFile);
    } else {
      recommendationResult.innerHTML = 'Selected file is not an image.';
    }
  }

// For popup 


  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        showPopup();
    }, 1000); // Display the popup after 3 seconds (adjust as needed)
});

function showPopup() {
    document.getElementById("popupContainer").style.display = "block";
}

function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}

function redirect() {
    // Replace 'https://ai-doctor-website.com' with the actual URL you want to redirect to
    // window.location.href = "https://ai-doctor-website.com";
    window.location.href = "tel:9347135267";

}
