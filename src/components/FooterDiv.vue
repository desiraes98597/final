<template>


 <!-- Footer-->
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <!-- Footer Location-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Seattle through Olympia, WA
                            <br />
                            
                        </p>
                    </div>
                    <!-- Footer Social Icons-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <!-- <a class="btn btn-outline-light btn-social mx-1" href="#!"><font-awesome-icon icon="fa-brands fa-facebook" /></a> -->
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><img src="../assets/img/facebook-brands.svg" alt="facebook icon" /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><img src="../assets/img/twitter-brands.svg" alt="twitter icon"/></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><img src="../assets/img/linkedin-in-brands.svg" alt="linkedin icon"/></a>

                    </div>
                    <!-- Footer About Text-->
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">Denise Pedro</h4>
                        <p class="lead mb-0">
                           desiraes@gmail.com
                            <!-- <a href="http://startbootstrap.com">Start Bootstrap</a> -->
                        </p>
                    </div>
                </div> 
                </div>
        </footer>
    </template>

    <script>
    export default{
        name:'FooterDiv',
        
    }
    
    </script>

    <style scoped>
    /* @import '~src/assets/css/style.css';
@import '~src/assets/css/style_bootstrap.css'; */


.footer  {
 padding-top:5rem;
 padding-bottom:5rem;
 background-color:#2c3e50;
 height:auto;
 color:white;
}

.mb-5 {
    background-color: #623e80;
    height:175px;
    
}

.mb-4{
     margin-bottom: 1.5rem !important;
     margin-top: 1.5rem !important;
}

.col-lg-4 {
  flex: 0 0 auto;
  width: 30%;
  margin-left: 5px;
}
    </style>