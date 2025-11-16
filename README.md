# Opportunity XplAIn - Datathon 2025

**Opportunity XplAIn** – An AI-powered solution for identifying potential customers.
Built during [Datathon2025](https://www.datathon.cat/) for the [Schneider Electric](https://www.se.com) challenge, this web application determines whether a customer will be profitable in a planned sale based on the company’s previous interactions with them. To achieve this, we developed an LLM-based AI model with an F1 score and accuracy of approximately 0.75. In addition, we built a second LLM model that reads and processes the data obtained from the first one and provides a conclusion explaining why the initial model produced its response.

Apart from these functionalities, Opportunity XplAIn presents the analysis results in a simplified, user-friendly, and explanatory way, making it accessible to everyone. It returns both the AI-generated explanations and several graphs designed to make data interpretation smoother and more intuitive.
To make the user experience even easier, Opportunity XplAIn offers two ways of entering data:

Percentage-based input, computed from the average values of all variables.

An interactive slider interface, allowing users to visually input data depending on whether each variable is considered high or low.

<br>


## Tech Stack

<table>
        <tr>
          <td><strong>Frontend:</strong></td>
          <td align="center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="35" title="JavaScript"/>&nbsp;
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="35" title="TypeScript"/>&nbsp;
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="35" title="HTML5"/>&nbsp;
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="35" title="CSS3"/>&nbsp;
          </td>
        </tr>
<tr>
            <td><strong>Backend:</strong></td>
            <td>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="35" title="Python"/>&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width="35" title="FastAPI"/>&nbsp;
            </td>
        </tr>
<tr>
        <td><strong>Machine Learning:</strong></td>
            <td>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="35" title="Python"/>&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width="35" title="FastAPI"/>&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" width="35" title="TensorFlow"/>&nbsp;
            </td>
        </tr>
        <td><strong>DevOps:</strong></td>
              <td align="center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" title="Git"/>&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" title="GitHub"/>&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="50" title="Docker"/>&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width="50" title="Linux"/>
            </td>
        </tr>
      </table>

<br>
<br>


## Deployment Guide


#### Clone the repository:
    # git clone https://github.com/MaxVilaRuiz/Opportunity-XplAIn---Datathon-2025.git

#### Enter backend folder:
    # cd backend

#### Create virtual environment:
    # python3.10 -m venv venv

#### Activate virtual environment:
    # source venv/bin/activate

#### Install dependencies:
    # pip install -r requirements.txt

#### Run backend server:
    # uvicorn app.main:app --reload

<br>

### Open a new terminal

<br>

    # cd frontend

#### Install dependencies:
    # npm install

#### Run development server:
    # npm run dev

<br>

### Install Ollama (if not installed yet)

#### Run model:
    # ollama run smollm2:1.7b

<br>
<br>


## Team & Credits

- [Max Vilà Ruiz](https://github.com/MaxVilaRuiz)
- [Pau Martínez Franch](https://github.com/taopaipau)
- [Aarón Quintanilla](https://github.com/aaronqintanilla)
- [Max Gimeno Giro](https://github.com/Max-Gimeno-G)

<br>



## License

This project is licensed under the [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) © License.