<style>
    /* body {
        background-color: black;
        font-family: serif;
    } */
    /* .app{
        margin: 10px;
    padding: 80px;
    border-radius: 1px;
    position: relative;
    left: 300px;
    background-color: rgb(94, 88, 88);
    size: 100%;
    width: 270px;
    } */
    .op {
        background-color: rgb(230, 228, 228);
        border-radius: 1px;
        position: relative;
        width: 500px;
        border: 2px;
        padding: 20px;
    }
 
    .pp {
        background-color: whitesmoke;
        border-radius: 1px;
        position: relative;
        width: 900px;
        border: 2px;
        padding: 20px;
        
    }
 
    img {
        width: 250px;
    }
    p,
    ul,
    li {
        font-size: 15px;
    }
</style>
 <template>
 <div>
     
 <body >
<div style="display: flex;" class="app">
    <div class="op">
    <center>
        <h1>Arya<span style="color: tomato;">Dika</span></h1>
    </center>
        <img src="https://images.bisnis-cdn.com/thumb/posts/2019/01/29/883405/bisnis.jpg?w=600&h=400"><br><br>
 
        <h3>Contact<hr></h3>
        <p><b>Address:</b><br>
        177 Great Portland Street, London W5W 6PQ</p>
        <p><b>Phone:</b><br>
        +62 821 9530 7113</p>
        <b>Email:</b><br>
        <u>fajar.a@gmail.com</u><br><br>
        <b>Linkedln:</b><br>
        <u>linkedin.com/fajar.ariyanto</u><br><br>
 
        <h3>Languages<hr></h3>
       
           Spanish - C2 <br>
           Chinese - A1 <br>
           German - A2 <br>
         
        <h3>Hobbies
            <hr>
        </h3>
        <ul>
            <li>Writing</li>
            <li>Sketching</li>
            <li>Photography</li>
            <li>Design</li>
        </ul>
    </div>
    <div class="pp">
        <h3>Summary</h3>
            <hr>
            <p>Senior Web Developer specializing in front end development. Experienced whit all stages of the
                development
                cycle for dynamic web project. Well-versed in numerous programming languages including HTML5, PHP OOP,
                JavaScript, CSS, MySQL. Strong backgruond in project management and customer relations</p>
 
            <h3>Skill Highlights</h3>
            <hr>
            <ul> <span>
                <li>Project management</li> <li style="padding-right: 10px;">Creative design</li>
                <li>Strong decision maker</li><li>Innovative</li>
                <li>Complex problem solver</li><li>Service-focused</li></span>
            </ul>
 
            <h3>Experience</h3>
            <hr>
            <b>Web Develover</b> - 09/2015 to 05/2019 <br>
            <b>Luna Web Design</b>, New York
            <ul>
                <li>Cooperate With designers to create clean interfaces and simple, intuitive interactions and
                    experience.
                </li>
                <li>Develop project concepts and maintain optimal workflow.</li>
                <li>Work whit senior developer to manage large, complex design project for corporate clients.</li>
                <li>Complete detailed programming and development tasks for front end public and internal websites as
                    well
                    as challenging back and server code.</li>
                <li>carry out quality assurance tests to discover errors and optimize usability.</li>
            </ul>
            <h3>Education</h3>
            <hr>
            Bachelor of science: <b>Computer information System - 2014 Columbia University</b>, NY
            <h3>Certifications</h3>
            <hr>
            <p>PHP framework (certificate): <b>Zend, Codeigniter, Symfony.</b> Programming languages: <div> HTML5, PHP
                    OOP,
                    JavaScript, CSS
        </div>
        </body>
        </div>
        </template>
<script>
export default {
    nama: "AgendaShow",
    computed: {
        agenda() {
            return this.$store.state.listAgenda
        },
    },
};
