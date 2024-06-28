<?php
  include 'link.php';
  
  $a = file_get_contents('program.json');
  $b = json_decode($a, true);
  
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>MIT ADT University Admission Open 2024 [Apply Online] - MIT ADT</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="<?= LINK; ?>images/mit/logo/fevicon.png" rel="icon">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="<?= LINK; ?>lib/animate/animate.min.css" rel="stylesheet">
    <link href="<?= LINK; ?>lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="<?= LINK; ?>lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="<?= LINK; ?>css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="<?= LINK; ?>css/style.css" rel="stylesheet">
    <link href="<?= LINK; ?>css/course.css" rel="stylesheet">

</head>

<body>

    <?php include 'header.php'; ?>

    <!-- Carousel Start -->
    <div class="container-fluid px-0">
        <div id="header-carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100 main-img d-none d-md-block" src="<?= LINK; ?>images/mit/banners/1.jpg"
                        alt="Image">
                    <div class="carousel-caption">
                        <div class="container position-relative">
                            <div class="row align-items-end  ">
                                <div class="col-md-5 text-start">

                                    <h1 class="text-white head-text_02 "><span class="text-golden">EXPERIENCE THE
                                            NEXT </span><br>LEVEL <br> EDUCATION</h1>
                                    <p class=""> Indian Institute of Gems & Jewellery, an initiative of the Gem &
                                        Jewellery Export Promotion Council (GJEPC), was established under the aegis of
                                        the Ministry of Commerce & Industries in 2003 to create the next generation of
                                        jewellery professionals.</p>
                                    <div class="">
                                        <h4 class="text-golden fw-bold">EDUCTAION TRAINING SKILLING</h4>

                                    </div>
                                </div>
                                <div class="col-md-3 pe-md-3  border-end ">
                                    <div class="hrad-img">
                                        <img src="<?= LINK; ?>images/mit/1.png" loading="lazy" alt="">
                                        <div class="box text-center ">
                                            <span class="h5 text-white fw-bold">DELHI | JAIPUR | UDUPI <br> MUMBAI |
                                                VARANASI</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 d-none d-md-block pt-3 pt-md-0 h_abform" id="form_01">
                                    <div class="rounded-3 over_hidden pt-3 bg-white">
                                        <div class="">
                                            <h3 class=""> Admission Open 2024</h2>
                                                <h6 class="">Apply Now</h6>
                                        </div>
                                        <?php include 'form_01.php';?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div class="container">
                <div class="row  d-block d-md-none pt-3 pt-md-0 h_abform" id="form_01">
                    <div class="rounded-3 over_hidden pt-3 bg-white">
                        <div class="text-center">
                            <h3 class=""> Admission Open 2024</h2>
                                <h6 class="">Apply Now</h6>
                        </div>
                        <?php include 'form_01.php';?>
                    </div>
                </div>
            </div>
        </section>
        <!-- Carousel End -->



        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <section class="py-5" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h3 class="text-center fw-bold text-golden pb-3 ">About MIT Art, Design, & Technology
                            University, Pune</h3>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-12 text-center">
                        <p class="">MIT Art Design and Technology University has been making concerted efforts for
                            taking a leap towards the world class education. It is amongst the leading Government
                            recognized Private University within the ambit of the renowned MIT Group of Institutions,
                            Pune. MIT ADT University is a multi-disciplinary university which is famous for its
                            sprawling lush green campus of 125 acres and picturesque location, spanning over the large
                            area of 125 acres. University is the manifestation of the serenity of Mother Nature and
                            aesthetically built on the banks of Mula-Mutha river.</p>
                    </div>

                </div>
            </div>
            <img src="images/mit/about/1.webp" class="img-fluid" alt="">
        </section>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->





        <!-- ------------------------------------------------------------------------------------------------------------ -->
        <section class="py-5  bg-grey ">
            <div class="container">
                <div class="row">
                    <div class="row pb-3">
                        <h3 class="text-center text-golden fw-bold ">WHY TO CHOOSE MIT ART, DESIGN, AND<br> TECHNOLOGY
                            UNIVERSITY?</h3>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-4  why">
                            <?php
                            $a = array( "125","13","36","500");
                            $b = array("Acres of Inspiring Campus","Years of Existence","Foreign University Collaborations","Major Recruiters");
                            $c = array( "1","2","3","4");
                            for ($i=0; $i < count($a); $i++) {
                            ?>
                            <div class="row pb-3">
                                <div class="bg-red rounded-3  text-white py-2 d-flex">
                                    <img src="images/mit/why/<?= $c[$i];?>.png" class="filter" alt="">
                                    <div class="ps-md-3">
                                        <p class="h2 mb-0  text-white ">
                                            <span class=" mb-0 fw-bold  count"><?= $a[$i];?></span>+
                                        </p>
                                        <small class=""><?= $b[$i];?></small>
                                    </div>
                                </div>
                            </div>
                            <?php
                            } 
                        ?>
                        </div>
                        <div class="col-md-4 text-center">
                            <img src="images/mit/logo/fevicon.png" width="250px">
                        </div>
                        <div class="col-md-4 why">
                            <?php
                        $a = array("16","175","61LPA","12K");
                        $b = array("Institutions","Courses LPA","Highest Package","Alumni");
                        $c = array("5","6","7","8");
                        for ($i=0; $i < count($a); $i++) {
                        ?>
                            <div class="row pb-3">
                                <div class="bg-red rounded-3  text-white py-2 d-flex">
                                    <img src="images/mit/why/<?= $c[$i];?>.png" class="filter" width="50px" alt="">
                                    <div class="ps-md-3">
                                        <p class="h2 mb-0  text-white ">
                                            <span class=" mb-0 fw-bold  count"><?= $a[$i];?></span>+
                                        </p>
                                        <small class=""><?= $b[$i];?></small>
                                    </div>
                                </div>
                            </div>
                            <?php
                        } 
                    ?>
                        </div>

                    </div>


                </div>
            </div>
        </section>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <section>
            <div class="container py-5">
                <div class="row">
                    <div class="row align-items-center pb-5 course_001">
                        <div class="col-md-4">
                            <h4 class="fs-1">Here Are Our <span class="display-5 text-golden"> 200+ Industry Centred
                                    Programs </span>To Choose From</h4>
                        </div>
                        <div class="col-md-8">
                            <ul class="nav nav-tabs_01 nav-justified c_ul_1 maintabs wow fadeInUp animated nav nav-pills"
                                id="pills-tab" role="tablist" data-wow-duration="1.5s">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active prg" id="pills-Undergraduate-tab"
                                        data-href="#Undergraduate" data-bs-toggle="pill" data-bs-target="#Undergraduate"
                                        type="button" role="tab" aria-controls="Undergraduate"
                                        aria-selected="true">Undergraduate Programmes</a>
                                </li>
                                <li class=" nav-item" role="presentation">
                                    <a class="nav-link prg" id="pills-Postgraduate-tab" data-href="#Postgraduate"
                                        data-bs-toggle="pill" data-bs-target="#Postgraduate" type="button" role="tab"
                                        aria-controls="Postgraduate" aria-selected="false">
                                        Postgraduate Programmes</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="pills-doctorate-tab" data-href="#doctorate"
                                        data-bs-toggle="pill" data-bs-target="#doctorate" type="button" role="tab"
                                        aria-controls="doctorate" aria-selected="false">
                                        Doctorate</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <?php include 'course.php';?>
                    </div>
                </div>
            </div>
        </section>




        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <section class="bg-purple  mt-md-5" id="placement">
            <div class="container  py-5">
                <div class="row mb-5">
                    <h3 class="text-center text-white fw-bold ">PLACEMENTS & RECRUITERS</h3>
                </div>
                <div class="row justify-content-center text-center mb-90">
                    <?php
                    $a = array( "61", "6.5", "1200","600");
                    $b = array("Highest Package","Average Package","Job Offers","Internship Offers");
                    $c = array( " border-end mb-4 mb-md-0", " border-end  mb-4 mb-md-0"," border-end  mb-4 mb-md-0","");
                    $d = array( "LPA", "LPA", "+","+");
                    $e = array( "1", "2", "3","1");
                    for ($i=0; $i < count($a); $i++) {
                ?>
                    <div class="col-md-3 col-6 <?= $c[$i];?>">
                        <img src="images/mit/highlights/<?= $e[$i];?>.png" class="filter" width="50px" loading="lazy"
                            alt="">
                        <div class=" pb-3">
                            <p class="text-white display-4">
                                <span class=" mb-0 fw-bold text-white count"><?= $a[$i];?></span><?= $d[$i];?>
                            </p>
                            <small class="text-white"><?= $b[$i];?></small>
                        </div>
                    </div>
                    <?php
                } 
                ?>
                </div>
            </div>
        </section>


        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->


        <!-- ---------------------------------------------------------------------------- -->
        <!-- ---------------------------------------------------------------------------- -->
        <section class="py-5 bg-white" id="recruters">
            <div class="container wow fadeInUp" data-wow-delay="0.1s">
                <div class="row justify-content-center company">
                    <div class="col-md-12 pb-5 pb-md-0 shadow rounded-3 position-relative bg-white mt_10 ">
                        <div class="row   justify-content-center text-center company_001">
                            <?php
                            $a = array( "1", "2", "3","4","5", "6", "7","8","9","10","11", "12", "13","14","15", "16", "17","18");
                            $b = array();
                            for ($i=1; $i < count($a); $i++) {
                            ?>
                            <div class="col-md-2 company_01">
                                <img src="images/mit/placement/<?= $a[$i];?>.png" loading="lazy" alt="">
                            </div>

                            <?php
                            } 
                            ?>
                        </div>
                        <div class="text-center pb-5">
                            <a href="<?= LINK; ?>" class="btn c_btn py-2 px-3 ms-2 mt-3 " data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="py-5 bg-purple">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 pt-4 pt-md-0">
                        <h5 class="fw-bold text-golden text-start fs-3 ps-4 mb-3">Teaching Pedagogy</h5>
                        <ul class="h_list_num list-unstyled fs-5 text-white lh-lg ps-4 mb-0">
                            <?php
                            $a = array("World-Class Curriculum with emphasis on Project Based Learning", "Finishing Schools for employability enhancement; across niche domains", "Industry expert faculty delivering value added programs", "A conductive atmosphere in the university, leading to a higher level of research", "Believes and practices Indian Culture, Values & Ethos to promote World Peace", "Unique, Innovative and Industry relevant courses across domains", "Training and Placement (T&P) Cell to help secure the best prospects with reputable MNCs around the world; offering 100 percent placement with 80% ","assistance to graduating students", "Incubation Center for entrepreneurial ideas & networking opportunities", "IGTT- Annual Conference with 100 Plus Eminent delegates in 20 plus Plenary sessions", "CRiEYA - Preincubation Hub for the Research and Innovation", "AIC Centre on 1 Lakh square Feet Research Park", "Centre of Excellence in Amazon, Agree Engineering, Sales force, Film Studio, Museum, Business Lab, Learning Platforms");
                            for ($i=0; $i < count($a); $i++) {
                            ?>
                            <li><i class="fas fa-check-circle pe-3"></i><?= $a[$i];?></li>
                            <?php
                            } 
                        ?>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </section>






        <!---our top ranked patanered end--->
        <section class="py-5 bg-grey" id="n_placement">
            <div class="container wow fadeInUp" data-wow-delay="0.1s">
                <div class="row">
                    <div class="col-md-4">
                        <div class="pt-md-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="display-1 text-golden">MIT-ADT</div>
                            <h2 class="display-3">SUCCESS<br> STORIES</h2>
                        </div>
                    </div>
                    <div class="col-md-8 owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <?php
                            $a = array( "Manish Poojari", "Aishwarya Vaidya", "Sharvari Deshpande");
                            $b = array( "BW LPG", "TATA CONSULTING SERVICES", "ACCENTURE");
                            $c = array( "As we know, Alumni are a major part of the University. And to an Alumni, it&#039;s always great to be in touch with the University to make connections. Since we are the very first batch of the University, there a long way to go. And I would like to contribute to this growth. I look forward to being a part of MITADTU Alumni Association(MAA).", "My four-year journey with MIT ADT University was a significant part of my life. I would honestly say that MIT ADT University is the best place to learn about your true potential. The management and professors have faith in the students and encourage them to achieve new heights of success. I am confident that the alumni association will assist the institute, alumni, and current students in contributing to each other&#039;s growth.", "I am glad to connect with all the budding alumni to share and exchange knowledge and help each other grow. Also through the alumni association, I would like to contribute to MIT ADT university in whichever way possible.");
                            $d = array( "1", "2", "3");
                            for ($i=0; $i < count($a); $i++) { 
                        ?>
                        <div class="row align-items-stretch">
                            <div class="testimonial-item rounded align-items-stretch p-4 p-lg-5 mb-5">
                                <img class="mb-4" src="<?= LINK; ?>images/mit/students/<?= $d[$i]; ?>.png" alt="">
                                <p class="mb-4"><?= $b[$i]; ?></p>
                                <h5><?= $a[$i]; ?></h5>
                                <span class="text-dark"><?= $c[$i]; ?></span>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </section>


        <!-- ---------------------------------------------------------------------------- -->
        <!-- ---------------------------------------------------------------------------- -->



        <!-- ---------------------------------------------------------------------------- -->
        <!-- ---------------------------------------------------------------------------- -->
        <section class="py-5 bg-red" id="recruters">
            <div class="container wow fadeInUp" data-wow-delay="0.1s">

                <div class="row justify-content-center">
                    <div class="col-md-8 text-center">
                        <h3 class="text-center fw-bold text-white pb-3 ">RESEARCH</h3>
                    </div>
                </div>
                <div class="row justify-content-center company ">
                    <div class="row pb-5">
                        <?php
                        $a = array("1328", "400", "26", "15");
                        $b = array( "Publications", "Registered Copyrights", "Patents", "Design Registered");
                        for ($i=0; $i < count($a); $i++) {
                        ?>
                        <div class="col-md-3 col-6  mb-3 mb-md-0">
                            <div class=" bg-white border rounded-3  p-3  text-center">
                                <p class=" display-5 mb-0">
                                    <span class=" mb-0 fw-bold  count"><?= $a[$i];?></span>+
                                </p>
                                <small class="h6"><?= $b[$i];?></small>
                            </div>
                        </div>
                        <?php
                        } 
                    ?>
                    </div>
                    <div class="row justify-content-around">
                        <div class="col-md-6 ">
                            <div class="row bg-white justify-content-center text-center  me-3">
                                <h3 class="text-center fw-bold text-golden pt-3 ">MOU WITH UNIVERSITIES</h3>
                                <?php
                            $z = array( "1", "2", "3","4","5", "6", "7","8","9");
                            for ($i=0; $i < count($z); $i++) {
                            ?>
                                <div class="col-md-4  col-6 company_01">
                                    <img src="images/mit/mou/m<?= $z[$i];?>.png" loading="lazy" alt="">
                                </div>

                                <?php
                            } 
                            ?>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            <div class="row bg-white  justify-content-center text-center ms-3 ">
                                <h3 class="text-center fw-bold text-golden pt-3 ">MOU WITH COMPANIES</h3>
                                <?php
                            $x = array("10","11", "12", "13","14","15", "16", "17","18");
                            for ($i=0; $i < count($x); $i++) {
                            ?>
                                <div class="col-md-4  col-6 company_01">
                                    <img src="images/mit/mou/m<?= $x[$i];?>.png" loading="lazy" alt="">
                                </div>

                                <?php
                            } 
                            ?>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->


        <section class="bg-light pt-5" id="corporatetraining">
            <div class="container">
                <div class="row">
                    <h3 class="text-center fw-bold text-golden pb-3 ">AWARDS & ACCOLADES</h3>
                </div>
                <div class="row pb-5">
                    <?php
                        $a = array("1", "2", "3", "4");
                        $b = array( "Awarded as ‘Best University Campus’ by ASSOCHAM of India", "Only State Private University to get recognized by NITI Aayog, Govt. of India for ATAL Innovation Mission.", "Education Leadership Award by Dewang Mehta Foundation", "NPTEL Local Chapter in assoc. with IIT Bombay for MOOCs");
                        for ($i=0; $i < count($a); $i++) {
                        ?>
                    <div class="col-md-3 mb-3 mb-md-0">
                        <div class=" bg-white border rounded-3  p-3  text-center">
                            <img src="images/mit/awords/<?= $a[$i];?>.png" height="150px" alt="">
                            <p class=""><?= $b[$i];?></p>
                        </div>
                    </div>
                    <?php
                        } 
                    ?>
                </div>
            </div>
        </section>
        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->


        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <?php include "footer.php"; ?>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- JavaScript Libraries -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="<?= LINK; ?>js/bootstrap.min.js"></script>
        <script src="<?= LINK; ?>lib/wow/wow.min.js"></script>
        <script src="<?= LINK; ?>lib/easing/easing.min.js"></script>
        <script src="<?= LINK; ?>lib/waypoints/waypoints.min.js"></script>
        <script src="<?= LINK; ?>lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="<?= LINK; ?>lib/lightbox/js/lightbox.min.js"></script>
        <script src="<?= LINK; ?>js/main.js"></script>
        <script src="<?= LINK; ?>js/course.js"></script>
        <script type="text/javascript">
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
            document.body.appendChild(s);
        </script>
       <!-- Start of HubSpot Embed Code -->
<!-- <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/45253889.js"></script> -->
<!-- End of HubSpot Embed Code -->


</body>

</html>