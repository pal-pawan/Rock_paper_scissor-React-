import './App.css';

const rock_image = "/Assets/rock.jpg";
const paper_image = "/Assets/paper.jpg";
const scissor_image = "/Assets/scissor.jpg";
function App() {
  const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");
    
    
    //Loop through each option image element
    optionImages.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            image.classList.add("active");
            console.log("class activated for the image");
            
            userResult.src = cpuResult.src = "rock.jpg";
            result.textContent = "Wait...";

        //Loop through each option image again
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        console.log("start class added!");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked image
            let imgageSrc = e.target.querySelector("img").src;

            //Set the user image to the clicked option image
            userResult.src = imgageSrc;

            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);

            // Creating an array of CPU images options
            let cpuImages = [
                "rock.jpg",
                "paper.jpg",
                "scissor.jpg",
            ];

            // Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];

            //Assgn a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible outcomes
            let outcomes = {
                RR: "It's a Draw(-_-)", PP: "It's a Draw(-_-)", SS: "It's a Draw(-_-)",
                RP: "CPU ", PS: "CPU ", SR: "CPU ",
                RS: "User ", PR: "User ", SP: "User "
            };

            // Look up the outcome value based on the user and CPU options
            let outComeValue = outcomes[userValue + cpuValue];

            // Display the results
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2500)
    });
});


  return (
    <>
      <section className="container">
        <div className="result_field">
          <div className="result_images">
            <span className="user_result">
              <img src={rock_image} alt="rock_image" />
            </span>
            <span className="cpu_result">
              <img src={rock_image} alt="rock_image" />
            </span>
          </div>
          <div className="result">Let's Play!!</div>
        </div>
        <div className="option_images">
          <span className="option_image">
            <img src={rock_image} alt="rock_image" />
            <p>Rock</p>
          </span>
          <span className="option_image">
            <img src={paper_image} alt="paper_image" />
            <p>Paper</p>
          </span>
          <span className="option_image">
            <img src={scissor_image} alt="scissor_image" />
            <p>Scissor</p>
          </span>
        </div>
      </section>

    </>
  );
}

export default App;
